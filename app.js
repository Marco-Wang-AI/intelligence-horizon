const copy = {
  en: {
    navDefinitions: "Definitions",
    navSignals: "Signals",
    navPulse: "Public Pulse",
    navOpen: "Open",
    eyebrow: "A playful AGI / ASI clock",
    heroTitle: "Almost O'Clock",
    heroCopy:
      "A friendly clock for asking one very human question: is general intelligence almost here?",
    voteCta: "Add your forecast",
    signalsCta: "View latest moves",
    agiLabel: "AGI horizon",
    expertLabel: "Expert signal",
    publicLabelShort: "Public pulse",
    agiNote: "Expert signal and public pulse shown side by side.",
    agiMove: "Moved 7 months closer this quarter",
    asiLabel: "ASI horizon",
    asiNote: "A wider, more uncertain band for early superintelligence.",
    asiMove: "Still high uncertainty",
    definitionsEyebrow: "Working definitions",
    definitionsTitle: "Before we count down, we say what we mean.",
    agiDefinitionTitle: "Current working definition",
    agiDefinitionCopy:
      "Highly autonomous AI that can outperform humans at most economically valuable work.",
    asiDefinitionTitle: "Current working definition",
    asiDefinitionCopy:
      "AI that greatly exceeds human cognitive performance in virtually all domains of interest.",
    definitionSource: "Source / reference",
    signalsEyebrow: "Signal log",
    signalsTitle: "What moved the clock?",
    pulseEyebrow: "Public Pulse",
    pulseTitle: "Vote on the date. Optionally define the thing.",
    pulseCopy:
      "The interesting part is not only when people think AGI or ASI arrives, but what they think those words should mean.",
    votesLabel: "votes",
    fieldLabel: "field automation median",
    formAgi: "When do you think AGI arrives?",
    formAsi: "When do you think ASI arrives?",
    formField: "Your field",
    formWork: "When can AI do 90% of your field's work?",
    formAgiDefinition: "Optional: define AGI in one sentence",
    formAsiDefinition: "Optional: define ASI in one sentence",
    agiDefinitionPlaceholder: "AGI is...",
    asiDefinitionPlaceholder: "ASI is...",
    submitVote: "Submit local vote",
    formNote:
      "MVP note: this prototype stores votes in your browser. Public collection can be added after the question set feels right.",
    openEyebrow: "Open project",
    openTitle: "Built for issues, pull requests, and timeline arguments.",
    readmeCta: "Open README draft",
    footer: "A friendly clock for a very fuzzy future.",
    submitted: "Vote added",
  },
  zh: {
    navDefinitions: "定义",
    navSignals: "信号",
    navPulse: "公众脉搏",
    navOpen: "开源",
    eyebrow: "一个轻松的 AGI / ASI 小钟",
    heroTitle: "快了钟",
    heroCopy:
      "一个友好的小钟，用来问那个很人类的问题：通用智能是不是快来了？",
    voteCta: "加入你的预测",
    signalsCta: "查看最近拨动",
    agiLabel: "AGI 地平线",
    expertLabel: "专家信号",
    publicLabelShort: "公众脉搏",
    agiNote: "把专家信号和公众脉搏放在一起看。",
    agiMove: "本季度向前拨快 7 个月",
    asiLabel: "ASI 地平线",
    asiNote: "早期超级智能的不确定性更高，区间更宽。",
    asiMove: "仍处于高不确定区间",
    definitionsEyebrow: "工作定义",
    definitionsTitle: "倒数之前，先说清楚我们在数什么。",
    agiDefinitionTitle: "当前工作定义",
    agiDefinitionCopy: "高度自主，并能在大多数有经济价值工作上超过人类的 AI。",
    asiDefinitionTitle: "当前工作定义",
    asiDefinitionCopy: "在几乎所有重要认知领域都大幅超过人类表现的 AI。",
    definitionSource: "来源 / 参考",
    signalsEyebrow: "信号日志",
    signalsTitle: "什么拨动了这只钟？",
    pulseEyebrow: "公众脉搏",
    pulseTitle: "投一个时间，也可以顺手定义一下。",
    pulseCopy:
      "有意思的不只是大家认为 AGI 或 ASI 什么时候到来，也包括大家到底认为这些词是什么意思。",
    votesLabel: "票",
    fieldLabel: "领域自动化中位数",
    formAgi: "你认为 AGI 什么时候到来？",
    formAsi: "你认为 ASI 什么时候到来？",
    formField: "你的行业",
    formWork: "AI 什么时候能完成你所在领域 90% 的工作？",
    formAgiDefinition: "可选：用一句话定义 AGI",
    formAsiDefinition: "可选：用一句话定义 ASI",
    agiDefinitionPlaceholder: "AGI 是……",
    asiDefinitionPlaceholder: "ASI 是……",
    submitVote: "提交本地投票",
    formNote:
      "MVP 说明：这个原型先把投票存在你的浏览器里。等问题设计稳定后，再接公开收集。",
    openEyebrow: "开源项目",
    openTitle: "为 issue、pull request 和时间线争论而生。",
    readmeCta: "打开 README 草稿",
    footer: "给模糊未来的一只友好小钟。",
    submitted: "已加入投票",
  },
};

let language = "en";
let events = [];
let starterVotes = [];
let starterDefinitions = { agi: [], asi: [] };

const fallbackEvents = [
  {
    id: "fallback-signal",
    date: "2026-05",
    target: "AGI",
    deltaDays: -90,
    confidence: { en: "medium", zh: "中" },
    title: {
      en: "DeepMind leadership says society has only a few years to prepare",
      zh: "DeepMind 负责人称社会只剩几年准备时间",
    },
    body: {
      en: "Expert tone shifts from distant speculation toward near-term preparation.",
      zh: "专家语气从远期猜测，转向更近的现实准备。",
    },
  },
];

const fallbackStarterVotes = [
  { agi: 2027, asi: 2030, work: 2028, field: "ai" },
  { agi: 2028, asi: 2031, work: 2029, field: "ai" },
  { agi: 2029, asi: 2033, work: 2029, field: "design" },
];

const fallbackDefinitions = {
  agi: [
    {
      text: {
        en: "AGI is AI that can reliably do most economically valuable knowledge work with minimal human help.",
        zh: "AGI 是能在极少人类帮助下，可靠完成大多数有经济价值知识工作的 AI。",
      },
      votes: 18,
    },
  ],
  asi: [
    {
      text: {
        en: "ASI is AI that is far better than the best humans at nearly every important cognitive task.",
        zh: "ASI 是在几乎所有重要认知任务上，都远强于最优秀人类的 AI。",
      },
      votes: 16,
    },
  ],
};

function localVotes() {
  try {
    return JSON.parse(localStorage.getItem("ih_votes") || "[]");
  } catch {
    return [];
  }
}

function localDefinitions() {
  try {
    return JSON.parse(localStorage.getItem("ih_definitions") || "[]");
  } catch {
    return [];
  }
}

async function fetchPublicVotes() {
  return localVotes();
}

async function fetchPublicDefinitions() {
  return localDefinitions();
}

async function savePublicVote(vote) {
  const votes = localVotes().concat(vote);
  localStorage.setItem("ih_votes", JSON.stringify(votes));
  const definitions = [];
  if (vote.agiDefinition) {
    definitions.push({ type: "agi", text: { en: vote.agiDefinition, zh: vote.agiDefinition }, votes: 1 });
  }
  if (vote.asiDefinition) {
    definitions.push({ type: "asi", text: { en: vote.asiDefinition, zh: vote.asiDefinition }, votes: 1 });
  }
  if (definitions.length) {
    localStorage.setItem("ih_definitions", JSON.stringify(localDefinitions().concat(definitions)));
  }
  return vote;
}

function median(values) {
  const sorted = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (!sorted.length) return 0;
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function formatYear(value) {
  return Number(value).toFixed(1);
}

function formatDelta(days) {
  const sign = days > 0 ? "+" : "";
  const unit = language === "zh" ? "天" : Math.abs(days) === 1 ? "day" : "days";
  return language === "zh" ? `${sign}${days} ${unit}` : `${sign}${days} ${unit}`;
}

async function allVotes() {
  return starterVotes.concat(await fetchPublicVotes());
}

async function fetchJson(path, fallback) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Could not load ${path}`);
    return await response.json();
  } catch {
    return fallback;
  }
}

async function loadData() {
  const [loadedEvents, loadedVotes, loadedDefinitions] = await Promise.all([
    fetchJson("./data/events.json", fallbackEvents),
    fetchJson("./data/starter-votes.json", fallbackStarterVotes),
    fetchJson("./data/definitions.json", fallbackDefinitions),
  ]);
  events = loadedEvents;
  starterVotes = loadedVotes;
  starterDefinitions = loadedDefinitions;
}

async function renderLanguage() {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[language][key] || node.textContent;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    node.setAttribute("placeholder", copy[language][key] || node.getAttribute("placeholder"));
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });
  renderSignals();
  await renderDefinitions();
  await updateVotes();
}

function renderSignals() {
  const list = document.querySelector("#signal-list");
  list.innerHTML = events
    .map(
      (item) => `
        <article class="signal-card">
          <span class="signal-date">${item.date}</span>
          <div>
            <strong>${item.title[language]}</strong>
            <p>${item.body[language]}</p>
            <div class="signal-meta">
              <span class="pill">${item.target}</span>
              <span class="pill">${item.confidence[language]}</span>
            </div>
          </div>
          <span class="pill delta ${item.deltaDays > 0 ? "slow" : ""}">${formatDelta(item.deltaDays)}</span>
        </article>
      `,
    )
    .join("");
}

async function renderDefinitions() {
  const publicDefinitions = await fetchPublicDefinitions();
  ["agi", "asi"].forEach((type) => {
    const list = document.querySelector(`#${type}-definition-list`);
    const starter = starterDefinitions[type].map((definition) => ({ ...definition, type }));
    const items = starter.concat(publicDefinitions.filter((definition) => definition.type === type));
    list.innerHTML = items
      .sort((a, b) => Number(b.votes || 0) - Number(a.votes || 0))
      .slice(0, 5)
      .map(
        (definition) => `
          <li>
            <span>${definition.text[language] || definition.text.en}</span>
            <small>${Number(definition.votes || 1)} ${copy[language].votesLabel}</small>
          </li>
        `,
      )
      .join("");
  });
}

async function updateVotes() {
  const votes = await allVotes();
  const agiMedian = median(votes.map((vote) => Number(vote.agi)));
  const asiMedian = median(votes.map((vote) => Number(vote.asi)));
  const workMedian = median(votes.map((vote) => Number(vote.work)));
  document.querySelector("#agi-public").textContent = formatYear(agiMedian);
  document.querySelector("#asi-public").textContent = formatYear(asiMedian);
  document.querySelector("#vote-count").textContent = votes.length + 34;
  document.querySelector("#field-median").textContent = formatYear(workMedian);
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    language = button.dataset.lang;
    renderLanguage();
  });
});

document.querySelector("#vote-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const nextVote = {
    agi: Number(form.get("agi")),
    asi: Number(form.get("asi")),
    work: Number(form.get("work")),
    field: String(form.get("field")),
    agiDefinition: String(form.get("agiDefinition") || "").trim(),
    asiDefinition: String(form.get("asiDefinition") || "").trim(),
  };
  await savePublicVote(nextVote);
  event.currentTarget.querySelector(".form-button").textContent = copy[language].submitted;
  setTimeout(() => {
    event.currentTarget.querySelector(".form-button").textContent = copy[language].submitVote;
  }, 1400);
  await renderDefinitions();
  await updateVotes();
});

loadData().then(renderLanguage);
