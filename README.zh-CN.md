# Almost O'Clock / 快了钟

一个轻松、不吓人的 AGI / ASI 小钟。

[English README](./README.md)

这个项目想做两件事：

- 记录专家预测和前沿实验室信号：采访、产品发布、模型能力、政策变化、基准变化。
- 收集大家的预测：普通访问者认为 AGI、ASI 什么时候到来，以及自己的行业什么时候会被 AI 大幅自动化。

它不是“AI 末日钟”。我们更想做一个有证据、有分歧、也有一点玩笑感的小项目。

## 当前版本

- 中英双语静态网站。
- 两只主钟：AGI 和 ASI。
- 每只钟同时显示“专家预测”和“大众感受”。
- 拨钟记录：每个事件都有方向、置信度和调整天数。
- 科幻时间轴：整理经典作品里的 AI 节点。
- 投票原型：现在先存在浏览器本地。
- 可选的一句话定义：用户可以写下自己理解的 AGI / ASI。
- 定义榜单：展示社区里更受欢迎的定义样例。

## UI 方案预览

`concepts.html` 里放了三个视觉方向：

- 仪表盘时钟。
- 星图时钟。
- 时间胶片。

## 数据结构

拨钟事件放在 `data/events.json`。一条事件大概长这样：

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
  "category": "expert_prediction"
}
```

## 投票问题

当前投票包括：

- 你认为 AGI 什么时候到来？
- 你认为 ASI 什么时候到来？
- 你所在的行业是什么？
- AI 什么时候能完成你所在领域 90% 的工作？
- 可选：用一句话定义 AGI。
- 可选：用一句话定义 ASI。

后端计划写在 `docs/vote-backend.md`。

## 如何参与

你可以通过 GitHub issue 或 pull request 参与：

- 提交一个新的拨钟事件，并附上公开来源。
- 讨论某个事件应该拨快还是拨慢。
- 优化中英文文案。
- 改进投票问题。
- 帮忙接入公开投票后端。
- 做每周或每月更新。

## 本地预览

打开 `index.html`，或者在项目目录里启动任意静态服务器。

推广文案草稿在 `docs/launch-copy.md`。
