# AGI Radar / AGI 小雷达

A bilingual, open AGI and ASI radar.

[中文说明](./README.zh-CN.md)

This project compares two kinds of signals:

- Expert and frontier-lab signals: interviews, product releases, model capabilities, policy statements, benchmark shifts.
- Public takes: lightweight votes from people in different fields about AGI, ASI, and domain-level automation.

The tone is intentionally friendly rather than apocalyptic. It is inspired by public clock projects, but it is not a doomsday clock.

## First MVP

- Static bilingual website.
- Light visual identity.
- Two radar panels for AGI and ASI signals.
- Signal notes with direction, confidence, relative radar distance, and public sources.
- A sci-fi timeline for fictional AI milestones.
- Chinese survey via Wenjuanxing and English survey via Google Forms.
- Optional one-sentence AGI and ASI definition submissions with opt-in attribution.
- Community definition leaderboard.
- A public radar update every two weeks.

## UI Concepts

Several visual directions are available at `concepts.html`:

- Signal radar.
- Melting calendar clock.
- Dashboard clock.
- Star-map clock.
- Timeline film strip.

## Data Model Draft

Signal entries now live in `data/events.json`. A signal follows this shape:

```json
{
  "date": "2026-05-26",
  "title": {
    "en": "DeepMind leadership says society has only a few years to prepare",
    "zh": "DeepMind 负责人称社会只剩几年准备时间"
  },
  "source": {
    "name": "Axios",
    "url": "https://example.com/source"
  },
  "target": "AGI",
  "deltaMeters": -90,
  "confidence": {
    "en": "medium",
    "zh": "中"
  },
  "category": "expert_prediction",
  "rationale": "Near-term expert framing from a frontier AI leader."
}
```

## Public Vote Draft

Starter questions:

- When do you think AGI arrives?
- When do you think ASI arrives?
- Optional: what field are you in?
- Optional: when can AI do 90% of your field's work?
- Optional: define AGI in one sentence.
- Optional: define ASI in one sentence.

Optional later fields:

- Country or region.
- Age range.
- AI usage frequency.
- Confidence level.
- Free-form reason.

Responses are collected in Wenjuanxing and Google Forms for the first launch. The aggregation plan is documented in `docs/vote-backend.md`.

## Privacy and Analytics

This site uses Cloudflare Web Analytics to understand aggregate traffic, such as page views, visits, referrers, countries, devices, and browsers. The project does not use analytics to identify individual visitors.

## GitHub Participation

This repo includes issue templates for:

- Signal proposals.
- Public Pulse survey improvements.

Pull requests also have a short checklist so contributors remember sources, bilingual copy, and local checks.

## Contribution Ideas

- Add a signal with a public source.
- Debate a timeline movement delta.
- Translate copy.
- Improve the public-vote questions.
- Add a backend for public vote collection.
- Add weekly update posts.

## Launch Copy

Short launch drafts for X/Twitter and WeChat are in `docs/launch-copy.md`.

## Local Preview

Open `index.html` in a browser, or run any static server in this folder.

Version history is documented in [`CHANGELOG.md`](./CHANGELOG.md).
