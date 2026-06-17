# Changelog

All notable changes to AGI Radar / AGI 小雷达 are documented here.

[中文更新日志](./CHANGELOG.zh-CN.md)

## [Unreleased]

#### Added

- Add the Cloudflare Web Analytics snippet so the public site can report page views and visits.
- Add an internal analytics test mode and `test.html` entry point so production testing does not pollute public traffic metrics.
- Add a weekly Cloudflare Analytics report script that saves local Markdown summaries under `reports/analytics/`.
- Add two sourced ASI radar signals: Ilya Sutskever's Safe Superintelligence lab and Geoffrey Hinton's AI-risk warning.
- Add a lightweight signal-submission card to balance uneven AGI / ASI radar-log columns.
- Refresh the Demis Hassabis avatar with DeepMind, Nobel Prize, AlphaFold, AlphaGo, and neural-network visual cues.
- Rename Demis Hassabis' radar tag to "the game-to-science builder" and feature Liang Wenfeng in the AGI radar scan.
- Rename Liang Wenfeng's radar tag to "the open-source efficiency frontier".
- Refresh Luo Fuli's avatar with subtle DeepSeek and Xiaomi MiMo reasoning cues, and rename her radar tag to "the MiMo reasoning lead".
- Replace Zhang Peng's ASI caution signal with Fei-Fei Li's human-agency ASI signal and add her pixels-to-worlds avatar.
- Add full-resolution public avatar originals so avatar preview, copy-link, and download actions use the crisp source art instead of 512px thumbnails.
- Attribute the OpenAI AGI confidence signal to Sam Altman and rename his radar tag to "the lab-to-world operator".
- Refresh the Sam Altman avatar with OpenAI / ChatGPT, YC, and global diffusion visual cues.
- Refresh the Liang Wenfeng avatar with DeepSeek, open-source, efficiency, and AGI target visual cues.
- Add a radar-log avatar preview lightbox with copy and download actions while keeping the rest of each card linked to its public source.
- Localize radar persona names in the Chinese interface so Chinese titles and cards no longer mix in English names.
- Refresh Yang Zhilin's avatar with Tsinghua, Kimi, long-context orbit, and AGI moonshot cues, and rename his radar tag to "the long-context moonshotter".
- Refresh Peter Steinberger's OpenClaw avatar with AGENT, Codex, lobster, and PDF-tool visual cues, and rename his radar tag to "The Clawdfather".
- Refresh Ilya Sutskever's avatar with SSI, alignment, and deep-learning visual cues, and rename his radar tag to "the Alignment Gatekeeper".
- Replace Leopold Aschenbrenner's narrative ASI signal with Geoffrey Hinton, and add Hinton's neural-net pathfinder avatar.
- Refresh Yann LeCun's avatar with LeNet, FAIR, AMI, and JEPA world-model cues, and rename his radar tag to "the world-model contrarian".
- Refresh Elon Musk's avatar with Tesla Roadster, xAI, GPU compute, and SpaceX cues, and rename his radar tag to "the first-principles engineer".
- Refresh Andrew Ng's avatar with Coursera, DeepLearning.AI, Google Brain, and Baidu AI cues, and rename his radar tag to "the AI educator at scale".
- Refresh Jensen Huang's avatar with CUDA, DGX-1, gaming GPU, Taiwan night-market, and early-work visual cues, and rename his radar tag to "the Leather-Jacket Visionary".

## [1.1.0] - 2026-06-07

#### Changed

- Put the radar first on mobile and remove the heavy cover artwork from the mobile experience.
- Move the biweekly update summary into the AGI card on mobile.
- Replace radar initials with the existing illustrated expert and product avatars.
- Let the mobile radar sweep automatically focus each signal and reveal its distance.
- Replace clock-style day adjustments with playful radar distance: closer or farther in relative meters.
- Remove the leftover "Almost zone" label and clarify the center as the current forecast position.
- Rename Updates / 动态 to Radar Log / 雷达记录.
- Rewrite the open-source section as a calmer invitation to contribute signals, sources, copy, and ideas.
- Shorten the public survey to four required choices; keep demographic and free-form questions optional.
- Keep the mobile language switch on one line at narrow viewport widths.
- Keep expert and public forecasts side by side on mobile.
- Turn the AGI / ASI radar cards and definition cards into swipeable mobile tracks.
- Add a compact survey shortcut directly below each radar comparison.
- Expand AGI and ASI on the cards and explain that the center year is the current expert forecast.
- Rebalance signal distances by evidence strength, identify Peter Steinberger alongside OpenClaw, and date the official OpenClaw rename to January 2026.
- Delay each mobile distance reveal until the radar sweep visually reaches its signal.
- Rename the baseline label to "Current radar definition" and explain that leading vote candidates are reviewed every two weeks.
- Split Radar Log into swipeable AGI and ASI signal columns on mobile.
- Remove the internal Method Desk placeholder so the public log contains sourced people, products, and claims only.
- Keep left-side radar distance labels inside the dial on narrow screens.
- Remove duplicated AGI / ASI text from the Radar Log column headings.

#### Added

- Make sourced Radar Log cards and selected radar events open their original public source.
- Add a short explanation that radar meters are a relative project unit, not a physical measurement.
- Add a public GitHub entry point for proposing a new radar signal.

#### Community

- Mobile radar-first layout, avatar signals, distance language, open-project copy, and navigation naming were proposed by an AI product manager who is also the project creator's wife.
- Source links on Radar Log entries were suggested by an early reader who reached out through WeChat.
- The shorter survey direction was proposed by the project creator after the first public launch.

## [1.0.0] - 2026-06-06

### Added

- Bilingual AGI and ASI radar with expert forecasts and public takes.
- Expert and product signal log with illustrated portraits.
- Clickable AGI and ASI definition candidates with public references.
- Sci-fi AI timeline.
- Chinese survey through Wenjuanxing and English survey through Google Forms.
- Biweekly update cadence and open-source contribution templates.

[Unreleased]: https://github.com/Marco-Wang-AI/intelligence-horizon/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/Marco-Wang-AI/intelligence-horizon/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Marco-Wang-AI/intelligence-horizon/releases/tag/v1.0.0
