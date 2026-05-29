# Intelligence Horizon / 智能地平线

A bilingual, open AGI and ASI horizon tracker.

This project compares two kinds of signals:

- Expert and frontier-lab signals: interviews, product releases, model capabilities, policy statements, benchmark shifts.
- Public pulse signals: lightweight votes from people in different fields about AGI, ASI, and domain-level automation.

The tone is intentionally friendly rather than apocalyptic. It is inspired by public clock projects, but it is not a doomsday clock.

## First MVP

- Static bilingual website.
- Light visual identity.
- Two horizon clocks: AGI and ASI.
- Signal log with direction, confidence, and clock movement.
- Local public-vote prototype stored in the browser.
- Naming playground for English and Chinese candidates.

## Possible Names

English:

- Intelligence Horizon
- Horizon Pulse
- Maybe Soon
- The Maybe Clock
- Almost O'Clock
- T-minus Maybe
- The Generality Gauge
- Frontier Pulse
- When AGI?
- Soonish
- Future's Loading Bar
- The Tomorrow Meter

Chinese:

- 智能地平线
- 地平线报时
- 快了钟
- 快乐钟
- 差不多钟
- 差不多两年钟
- 通用智能还有多久
- 智能几更天
- 快到 AGI 了吗
- 还有几步
- 未来进度条
- 智能风向标

## Data Model Draft

Future signal entries can follow this shape:

```json
{
  "date": "2026-05-26",
  "title": "DeepMind leadership says society has only a few years to prepare",
  "source": "Axios",
  "url": "https://example.com/source",
  "target": "AGI",
  "delta_days": -90,
  "confidence": "medium",
  "category": "expert_prediction",
  "rationale": "Near-term expert framing from a frontier AI leader."
}
```

## Public Vote Draft

Starter questions:

- When do you think AGI arrives?
- When do you think ASI arrives?
- What field are you in?
- When can AI do 90% of your field's work?

Optional later fields:

- Country or region.
- Age range.
- AI usage frequency.
- Confidence level.
- Free-form reason.

## Contribution Ideas

- Add a signal with a public source.
- Debate a clock movement delta.
- Translate copy.
- Improve the public-vote questions.
- Add a backend for public vote collection.
- Add weekly update posts.

## Local Preview

Open `index.html` in a browser, or run any static server in this folder.
