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
- Signal notes with direction, confidence, and timeline movement.
- A sci-fi timeline for fictional AI milestones.
- Local public-vote prototype stored in the browser.
- Optional one-sentence AGI and ASI definition submissions.
- Community definition leaderboard.

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
  "deltaDays": -90,
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
- What field are you in?
- When can AI do 90% of your field's work?
- Optional: define AGI in one sentence.
- Optional: define ASI in one sentence.

Optional later fields:

- Country or region.
- Age range.
- AI usage frequency.
- Confidence level.
- Free-form reason.

The backend plan is documented in `docs/vote-backend.md`.

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
