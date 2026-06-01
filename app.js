const copy = {
  en: {
    navDefinitions: "Definitions",
    navFiction: "Fiction",
    navSignals: "Updates",
    navPulse: "Vote",
    navOpen: "Open",
    eyebrow: "Almost, not alarming.",
    heroTitle: "Almost O'Clock",
    heroCopy:
      "A lighthearted clock for the question everyone keeps asking: are we almost there?",
    voteCta: "Add your forecast",
    signalsCta: "See what changed",
    agiLabel: "AGI clock",
    expertLabel: "Expert forecast",
    publicLabelShort: "Public take",
    agiNote: "A quick compare: expert forecasts vs. public intuition.",
    agiMove: "7 months earlier this quarter",
    asiLabel: "ASI clock",
    asiNote: "A wider, more uncertain band for early superintelligence.",
    asiMove: "Still high uncertainty",
    definitionsEyebrow: "Working definitions",
    definitionsTitle: "First, what are we even counting down to?",
    agiDefinitionTitle: "Current working definition",
    agiDefinitionCopy:
      "Highly autonomous AI that can outperform humans at most economically valuable work.",
    asiDefinitionTitle: "Current working definition",
    asiDefinitionCopy:
      "AI that greatly exceeds human cognitive performance in virtually all domains of interest.",
    definitionSource: "Reference",
    fictionEyebrow: "Sci-fi receipts",
    fictionTitle: "Pop culture has been setting AI dates for decades.",
    fictionCopy:
      "A very unserious timeline of when famous stories imagined AI waking up, taking over, or becoming impossible to ignore.",
    signalsEyebrow: "Clock notes",
    signalsTitle: "Why did the clock move?",
    pulseEyebrow: "Public take",
    pulseTitle: "Pick a year. Add a definition if you feel brave.",
    pulseCopy:
      "Dates are only half the fun. The other half is watching people disagree about what AGI and ASI actually mean.",
    votesLabel: "votes",
    fieldLabel: "your-field median",
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
      "Prototype note: votes are stored in your browser for now. Shared public results come next.",
    openEyebrow: "Open project",
    openTitle: "Open source, because arguing about timelines is better with receipts.",
    conceptsCta: "View UI concepts",
    readmeCta: "Open README",
    clockEventHint: "Tap a bead to see what moved the clock.",
    footer: "Receipts, guesses, and a clock that keeps changing.",
    submitted: "Vote added",
  },
  zh: {
    navDefinitions: "定义",
    navFiction: "科幻",
    navSignals: "动态",
    navPulse: "投票",
    navOpen: "开源",
    eyebrow: "快了，但别慌。",
    heroTitle: "快了钟",
    heroCopy:
      "一个轻松的小钟，记录大家都关心的事：AGI / ASI 到底是不是快来了？",
    voteCta: "加入你的预测",
    signalsCta: "看看为什么变了",
    agiLabel: "AGI 时钟",
    expertLabel: "专家预测",
    publicLabelShort: "大众感受",
    agiNote: "一边看专家预测，一边看大众感受。",
    agiMove: "本季度拨快 7 个月",
    asiLabel: "ASI 时钟",
    asiNote: "超级智能更难判断，所以这里的不确定性更高。",
    asiMove: "不确定性仍然很高",
    definitionsEyebrow: "工作定义",
    definitionsTitle: "先说清楚：我们到底在等什么？",
    agiDefinitionTitle: "当前工作定义",
    agiDefinitionCopy: "高度自主，并能在大多数有经济价值工作上超过人类的 AI。",
    asiDefinitionTitle: "当前工作定义",
    asiDefinitionCopy: "在几乎所有重要认知领域都大幅超过人类表现的 AI。",
    definitionSource: "参考来源",
    fictionEyebrow: "科幻彩蛋",
    fictionTitle: "科幻作品早就给 AI 排过时间表。",
    fictionCopy: "一个不太严肃的时间轴：看看电影、游戏和小说里，AI 都是在哪一年开始不太听话的。",
    signalsEyebrow: "拨钟记录",
    signalsTitle: "最近为什么拨快或拨慢？",
    pulseEyebrow: "大众感受",
    pulseTitle: "选一个年份，也可以顺手写一句定义。",
    pulseCopy:
      "只猜时间还不够好玩。AGI、ASI 到底算什么，每个人心里的答案可能都不一样。",
    votesLabel: "票",
    fieldLabel: "本行业中位数",
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
      "原型说明：现在先把投票存在你的浏览器里，之后再接公开统计。",
    openEyebrow: "开源项目",
    openTitle: "开源做这件事：大家可以带着来源来吵时间线。",
    conceptsCta: "查看 UI 方案",
    readmeCta: "打开 README",
    clockEventHint: "点一个时间珠，看看这次为什么拨钟。",
    footer: "记录证据、猜想和一只会变的钟。",
    submitted: "已加入投票",
  },
};

let language = "en";
let events = [];
let starterVotes = [];
let starterDefinitions = { agi: [], asi: [] };
let fictionTimeline = [];

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
      en: "A frontier-lab leader frames AGI as something to prepare for soon, not someday.",
      zh: "前沿实验室负责人把 AGI 说成了需要尽快准备的事，而不是很遥远的概念。",
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

const fallbackFictionTimeline = [
  {
    year: 1997,
    work: "Terminator 2: Judgment Day",
    workZh: "终结者 2：审判日",
    ai: "Skynet",
    source: { name: "U.S. GAO", url: "https://www.gao.gov/blog/2019/08/29/artificial-intelligence-still-a-long-way-from-judgment-day" },
    title: { en: "Skynet wakes up", zh: "天网觉醒" },
    summary: {
      en: "Skynet becomes self-aware and turns a defense system into humanity's worst day at work.",
      zh: "天网获得自我意识，一个防御系统变成了人类最糟糕的上班日。",
    },
  },
];

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

function eventTimeValue(event) {
  if (!event?.date || event.date === "Always") return -Infinity;
  const parts = String(event.date).split("-").map(Number);
  const year = Number.isFinite(parts[0]) ? parts[0] : 0;
  const month = Number.isFinite(parts[1]) ? parts[1] : 12;
  return year * 100 + month;
}

function sortedEvents() {
  return events
    .slice()
    .sort((a, b) => eventTimeValue(b) - eventTimeValue(a) || Math.abs(b.deltaDays) - Math.abs(a.deltaDays));
}

async function allVotes() {
  return starterVotes.concat(await fetchPublicVotes());
}

async function fetchJson(path, fallback) {
  try {
    const separator = path.includes("?") ? "&" : "?";
    const response = await fetch(`${path}${separator}v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Could not load ${path}`);
    return await response.json();
  } catch {
    return fallback;
  }
}

async function loadData() {
  const [loadedEvents, loadedVotes, loadedDefinitions, loadedFictionTimeline] = await Promise.all([
    fetchJson("./data/events.json", fallbackEvents),
    fetchJson("./data/starter-votes.json", fallbackStarterVotes),
    fetchJson("./data/definitions.json", fallbackDefinitions),
    fetchJson("./data/fiction-timeline.json", fallbackFictionTimeline),
  ]);
  events = loadedEvents;
  starterVotes = loadedVotes;
  starterDefinitions = loadedDefinitions;
  fictionTimeline = loadedFictionTimeline;
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
  renderClockBeads();
  renderSignals();
  await renderDefinitions();
  renderFictionTimeline();
  await updateVotes();
}

function renderSignals() {
  const list = document.querySelector("#signal-list");
  list.innerHTML = sortedEvents()
    .map((item) => {
      const persona = item.persona || {};
      return `
        <article class="signal-card">
          <span class="signal-date">${item.date}</span>
          <div class="signal-avatar ${persona.image ? "has-image" : ""} ${persona.tone || ""} avatar-${persona.avatar || "default"}" aria-hidden="true">
            ${persona.image ? `<img src="${persona.image}" alt="" loading="lazy" />` : ""}
            <span>${persona.initials || item.target}</span>
          </div>
          <div>
            ${
              persona.name
                ? `<p class="signal-person">${persona.name}<span>${persona.nickname?.[language] || ""}</span></p>`
                : ""
            }
            <strong>${item.title[language]}</strong>
            <p>${item.body[language]}</p>
            <div class="signal-meta">
              <span class="pill">${item.target}</span>
              <span class="pill">${item.confidence[language]}</span>
            </div>
          </div>
          <span class="pill delta ${item.deltaDays > 0 ? "slow" : ""}">${formatDelta(item.deltaDays)}</span>
        </article>
      `;
    })
    .join("");
}

function clockEventMarkup(item) {
  const persona = item.persona || {};
  return `
    <p class="clock-event-kicker">${item.date} · ${persona.name || item.target}</p>
    <strong>${item.title[language]}</strong>
    <span class="pill delta ${item.deltaDays > 0 ? "slow" : ""}">${formatDelta(item.deltaDays)}</span>
  `;
}

function renderClockBeads() {
  ["AGI", "ASI"].forEach((target) => {
    const lowerTarget = target.toLowerCase();
    const beadList = document.querySelector(`#${lowerTarget}-beads`);
    const detail = document.querySelector(`#${lowerTarget}-clock-event`);
    if (!beadList || !detail) return;

    const targetEvents = sortedEvents()
      .filter((item) => item.target === target && item.date !== "Always")
      .slice(0, 5);

    if (!targetEvents.length) {
      beadList.innerHTML = "";
      detail.innerHTML = `<p>${copy[language].clockEventHint}</p>`;
      return;
    }

    const activeId = beadList.dataset.activeId || targetEvents[0].id;
    const active = targetEvents.find((item) => item.id === activeId) || targetEvents[0];
    beadList.dataset.activeId = active.id;
    beadList.innerHTML = targetEvents
      .map((item, index) => {
        const persona = item.persona || {};
        return `
          <button
            class="clock-bead ${item.id === active.id ? "active" : ""} ${item.deltaDays > 0 ? "slow" : "fast"}"
            type="button"
            data-target="${target}"
            data-event-id="${item.id}"
            style="--bead-index: ${index}"
            aria-label="${item.date} ${persona.name || item.title[language]}"
            title="${item.date} · ${persona.name || item.title[language]}"
          ></button>
        `;
      })
      .join("");
    detail.innerHTML = clockEventMarkup(active);
  });
}

function renderFictionTimeline() {
  const timeline = document.querySelector("#fiction-timeline");
  if (!timeline) return;
  timeline.innerHTML = fictionTimeline
    .map(
      (item) => `
        <article class="fiction-item" tabindex="0">
          <span class="fiction-symbol ${item.symbol || ""}" aria-hidden="true"></span>
          <span class="fiction-year">${item.year}</span>
          <strong>${language === "zh" ? item.workZh || item.work : item.work}</strong>
          <small>${item.ai}</small>
          <div class="fiction-detail">
            <p class="panel-label">${item.title[language]}</p>
            <p>${item.summary[language]}</p>
            <a href="${item.source.url}" target="_blank" rel="noreferrer">${item.source.name}</a>
          </div>
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

document.querySelector(".dashboard").addEventListener("click", (event) => {
  const bead = event.target.closest(".clock-bead");
  if (!bead) return;
  const target = bead.dataset.target;
  const eventId = bead.dataset.eventId;
  const lowerTarget = target.toLowerCase();
  const beadList = document.querySelector(`#${lowerTarget}-beads`);
  const detail = document.querySelector(`#${lowerTarget}-clock-event`);
  const active = events.find((item) => item.id === eventId);
  if (!beadList || !detail || !active) return;
  beadList.dataset.activeId = eventId;
  beadList.querySelectorAll(".clock-bead").forEach((node) => {
    node.classList.toggle("active", node === bead);
  });
  detail.innerHTML = clockEventMarkup(active);
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
