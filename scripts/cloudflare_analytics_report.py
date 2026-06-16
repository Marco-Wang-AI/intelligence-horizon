#!/usr/bin/env python3
"""Generate a weekly Cloudflare Web Analytics report for AGI Radar.

The script reads credentials from ~/.codex/secrets/agi-radar-cloudflare.env by
default. It never prints the token.
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any


DEFAULT_ENV = Path.home() / ".codex" / "secrets" / "agi-radar-cloudflare.env"
GRAPHQL_URL = "https://api.cloudflare.com/client/v4/graphql"
DEFAULT_REPORT_DIR = Path("reports") / "analytics"


QUERY = """
query(
  $accountTag: string!,
  $siteTag: string!,
  $start: Time!,
  $end: Time!,
  $prevStart: Time!
) {
  viewer {
    accounts(filter: {accountTag: $accountTag}) {
      current: rumPageloadEventsAdaptiveGroups(
        limit: 1,
        filter: {siteTag: $siteTag, bot: 0, datetime_geq: $start, datetime_lt: $end}
      ) { count sum { visits } }
      previous: rumPageloadEventsAdaptiveGroups(
        limit: 1,
        filter: {siteTag: $siteTag, bot: 0, datetime_geq: $prevStart, datetime_lt: $start}
      ) { count sum { visits } }
      daily: rumPageloadEventsAdaptiveGroups(
        limit: 10,
        filter: {siteTag: $siteTag, bot: 0, datetime_geq: $start, datetime_lt: $end},
        orderBy: [date_ASC]
      ) { count sum { visits } dimensions { date } }
      referrers: rumPageloadEventsAdaptiveGroups(
        limit: 10,
        filter: {siteTag: $siteTag, bot: 0, datetime_geq: $start, datetime_lt: $end},
        orderBy: [sum_visits_DESC]
      ) { count sum { visits } dimensions { refererHost refererScheme } }
      countries: rumPageloadEventsAdaptiveGroups(
        limit: 10,
        filter: {siteTag: $siteTag, bot: 0, datetime_geq: $start, datetime_lt: $end},
        orderBy: [sum_visits_DESC]
      ) { count sum { visits } dimensions { countryName } }
      devices: rumPageloadEventsAdaptiveGroups(
        limit: 10,
        filter: {siteTag: $siteTag, bot: 0, datetime_geq: $start, datetime_lt: $end},
        orderBy: [sum_visits_DESC]
      ) { count sum { visits } dimensions { deviceType } }
      browsers: rumPageloadEventsAdaptiveGroups(
        limit: 10,
        filter: {siteTag: $siteTag, bot: 0, datetime_geq: $start, datetime_lt: $end},
        orderBy: [sum_visits_DESC]
      ) { count sum { visits } dimensions { userAgentBrowser } }
      pages: rumPageloadEventsAdaptiveGroups(
        limit: 10,
        filter: {siteTag: $siteTag, bot: 0, datetime_geq: $start, datetime_lt: $end},
        orderBy: [sum_visits_DESC]
      ) { count sum { visits } dimensions { requestHost requestPath } }
      perf: rumPerformanceEventsAdaptiveGroups(
        limit: 1,
        filter: {siteTag: $siteTag, bot: 0, datetime_geq: $start, datetime_lt: $end}
      ) {
        count
        avg { pageLoadTime responseTime requestTime firstContentfulPaint }
        quantiles {
          pageLoadTimeP50 pageLoadTimeP75 pageLoadTimeP90
          responseTimeP50 requestTimeP50 firstContentfulPaintP50
        }
        sum { visits }
      }
      vitals: rumWebVitalsEventsAdaptiveGroups(
        limit: 1,
        filter: {siteTag: $siteTag, bot: 0, datetime_geq: $start, datetime_lt: $end}
      ) {
        count
        quantiles {
          largestContentfulPaintP50 largestContentfulPaintP75
          firstContentfulPaintP50 firstContentfulPaintP75
          cumulativeLayoutShiftP50 cumulativeLayoutShiftP75
          interactionToNextPaintP50 interactionToNextPaintP75
          timeToFirstByteP50 timeToFirstByteP75
        }
        sum { visits }
      }
    }
  }
}
"""


def load_env(path: Path) -> dict[str, str]:
    if not path.exists():
        raise SystemExit(f"Missing credentials file: {path}")
    values: dict[str, str] = {}
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        values[key.strip()] = value.strip().strip('"').strip("'")
    required = ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID", "CLOUDFLARE_SITE_TAG"]
    missing = [key for key in required if not values.get(key)]
    if missing:
        raise SystemExit(f"Missing required env values: {', '.join(missing)}")
    return values


def gql(token: str, query: str, variables: dict[str, Any]) -> dict[str, Any]:
    payload = json.dumps({"query": query, "variables": variables}).encode("utf-8")
    request = urllib.request.Request(
        GRAPHQL_URL,
        data=payload,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            result = json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as error:
        body = error.read().decode("utf-8", errors="replace")
        raise SystemExit(f"Cloudflare API HTTP {error.code}: {body}") from error
    errors = result.get("errors")
    if errors:
        raise SystemExit("Cloudflare GraphQL errors: " + json.dumps(errors, ensure_ascii=False))
    return result


def visits(row: dict[str, Any] | None) -> int:
    if not row:
        return 0
    summed = row.get("sum") or {}
    return int(summed.get("visits") or row.get("count") or 0)


def microseconds_to_seconds(value: Any) -> float | None:
    if value is None:
        return None
    return round(float(value) / 1_000_000, 2)


def seconds_text(value: Any) -> str:
    seconds = microseconds_to_seconds(value)
    if seconds is None:
        return "暂无数据"
    return f"{seconds}s"


def pct_change(current: int, previous: int) -> str:
    if previous <= 0:
        return "暂无上周期基线"
    delta = current - previous
    pct = delta / previous * 100
    sign = "+" if delta >= 0 else ""
    return f"{sign}{delta} ({sign}{pct:.1f}%)"


def list_rows(rows: list[dict[str, Any]], label_fn) -> list[str]:
    output = []
    for row in rows:
        label = label_fn(row.get("dimensions") or {})
        if not label:
            label = "direct / unknown"
        output.append(f"- {label}: {visits(row)}")
    return output or ["- 暂无数据"]


def build_report(data: dict[str, Any], start: dt.datetime, end: dt.datetime) -> str:
    account = ((data.get("data") or {}).get("viewer") or {}).get("accounts") or []
    if not account:
        raise SystemExit("No account returned. Check token scope and account id.")
    a = account[0]

    current = visits((a.get("current") or [None])[0])
    previous = visits((a.get("previous") or [None])[0])
    vitals = ((a.get("vitals") or [{}])[0]).get("quantiles") or {}
    perf = ((a.get("perf") or [{}])[0]).get("quantiles") or {}

    lines = [
        "# AGI Radar Weekly Analytics",
        "",
        f"统计周期：{start.strftime('%Y-%m-%d %H:%M UTC')} 到 {end.strftime('%Y-%m-%d %H:%M UTC')}",
        "",
        "## 总览",
        "",
        f"- 访问 / 页面加载：{current}",
        f"- 上一周期变化：{pct_change(current, previous)}",
        "",
        "## 统计口径",
        "",
        "- 数据来自 Cloudflare Web Analytics 的 RUM 事件，并已过滤 Cloudflare 标记的 bot。",
        "- 它会包含真实用户访问，也会包含我们自己打开普通线上链接时产生的测试访问。",
        "- 使用 /test.html 或带 internal_test=1、test、utm_source=internal_test 参数的链接时，页面不会加载 Cloudflare 统计脚本。",
        "- 直接调用 Cloudflare API、运行本地脚本、打开本地 file:// 或 localhost 页面不会计入访问量。",
        "",
        "## 每日访问",
        "",
        *list_rows(a.get("daily") or [], lambda d: d.get("date")),
        "",
        "## 来源",
        "",
        "Cloudflare RUM 分组为估算值；小样本时以趋势判断为主。",
        "",
        *list_rows(
            a.get("referrers") or [],
            lambda d: d.get("refererHost") or ("direct / unknown" if d.get("refererScheme") == "unknown" else ""),
        ),
        "",
        "## 国家 / 地区",
        "",
        *list_rows(a.get("countries") or [], lambda d: d.get("countryName")),
        "",
        "## 设备",
        "",
        *list_rows(a.get("devices") or [], lambda d: d.get("deviceType")),
        "",
        "## 浏览器",
        "",
        *list_rows(a.get("browsers") or [], lambda d: d.get("userAgentBrowser")),
        "",
        "## 页面",
        "",
        *list_rows(
            a.get("pages") or [],
            lambda d: f"{d.get('requestHost', '')}{d.get('requestPath', '')}".strip(),
        ),
        "",
        "## 性能",
        "",
        f"- FCP P50：{seconds_text(vitals.get('firstContentfulPaintP50') or perf.get('firstContentfulPaintP50'))}",
        f"- LCP P50：{seconds_text(vitals.get('largestContentfulPaintP50'))}",
        f"- TTFB P50：{seconds_text(vitals.get('timeToFirstByteP50'))}",
        f"- INP P50：{seconds_text(vitals.get('interactionToNextPaintP50'))}",
        f"- CLS P50：{vitals.get('cumulativeLayoutShiftP50')}",
        f"- Page Load P50：{seconds_text(perf.get('pageLoadTimeP50'))}",
        f"- Page Load P90：{seconds_text(perf.get('pageLoadTimeP90'))}",
        "",
        "## 建议",
        "",
        "- 为 Twitter / 小红书 / 朋友圈分别使用 UTM 链接，否则大量访问会被归到 direct / unknown。",
        "- 如果微信来源继续增长，优先复查移动端首屏、投票入口和分享卡片文案。",
        "- 如果 Page Load P90 持续偏高，优先压缩头像原图和首屏图片资源。",
        "- 如果国家 / 地区长期集中在少数地区，推广复盘时不要过度解释小样本。",
    ]
    return "\n".join(lines)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate AGI Radar Cloudflare analytics report.")
    parser.add_argument("--env-file", type=Path, default=DEFAULT_ENV)
    parser.add_argument("--days", type=int, default=7)
    parser.add_argument("--end", help="UTC end time, ISO format. Defaults to now.")
    parser.add_argument("--json", action="store_true", help="Print raw API data as JSON.")
    parser.add_argument("--output", type=Path, help="Write the report to a Markdown or JSON file.")
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=DEFAULT_REPORT_DIR,
        help="Directory used by --write-default. Defaults to reports/analytics.",
    )
    parser.add_argument(
        "--write-default",
        action="store_true",
        help="Write Markdown to reports/analytics/YYYY-MM-DD.md based on the report end date.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    env = load_env(args.env_file)
    if args.end:
        end = dt.datetime.fromisoformat(args.end.replace("Z", "+00:00")).astimezone(dt.timezone.utc)
    else:
        end = dt.datetime.now(dt.timezone.utc)
    start = end - dt.timedelta(days=args.days)
    prev_start = start - dt.timedelta(days=args.days)
    variables = {
        "accountTag": env["CLOUDFLARE_ACCOUNT_ID"],
        "siteTag": env["CLOUDFLARE_SITE_TAG"],
        "start": start.isoformat().replace("+00:00", "Z"),
        "end": end.isoformat().replace("+00:00", "Z"),
        "prevStart": prev_start.isoformat().replace("+00:00", "Z"),
    }
    result = gql(env["CLOUDFLARE_API_TOKEN"], QUERY, variables)
    if args.json:
        output = json.dumps({"range": variables, "result": result}, ensure_ascii=False, indent=2)
    else:
        output = build_report(result, start, end)
    if args.write_default and not args.output:
        args.output = args.output_dir / f"{end.date().isoformat()}.md"
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(output + "\n", encoding="utf-8")
        print(f"Wrote {args.output}")
    else:
        print(output)
    return 0


if __name__ == "__main__":
    sys.exit(main())
