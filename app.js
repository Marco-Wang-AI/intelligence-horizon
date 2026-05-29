const copy = {
  en: {
    navSignals: "Signals",
    navPulse: "Public Pulse",
    navMethod: "Method",
    navOpen: "Open",
    eyebrow: "A playful, evidence-based AGI / ASI clock",
    heroTitle: "Intelligence Horizon",
    heroCopy:
      "Track how the frontier AI timeline moves when experts speak, products ship, benchmarks fall, and ordinary people vote.",
    voteCta: "Add your forecast",
    signalsCta: "View latest moves",
    agiLabel: "AGI horizon",
    agiNote: "Expert-weighted median estimate from the sample signal log.",
    agiMove: "Moved 7 months closer this quarter",
    asiLabel: "ASI horizon",
    asiNote: "A wider, more uncertain band for early superintelligence.",
    asiMove: "Still high uncertainty",
    publicLabel: "Public pulse",
    publicNote: "Median AGI answer from starter votes plus local submissions.",
    namesEyebrow: "Naming playground",
    namesTitle: "A clock should have a little wink.",
    signalsEyebrow: "Signal log",
    signalsTitle: "What moved the horizon?",
    pulseEyebrow: "Public Pulse",
    pulseTitle: "Experts get one clock. Everyone else gets a pulse.",
    pulseCopy:
      "The fun part is comparing frontier-lab confidence with what builders, teachers, designers, founders, students, and skeptics feel in their own fields.",
    votesLabel: "votes",
    fieldLabel: "field automation median",
    formAgi: "When do you think AGI arrives?",
    formAsi: "When do you think ASI arrives?",
    formField: "Your field",
    formWork: "When can AI do 90% of your field's work?",
    submitVote: "Submit local vote",
    formNote:
      "MVP note: this prototype stores votes in your browser. Public collection can be added after the question set feels right.",
    methodEyebrow: "Method",
    methodTitle: "Small rules, visible judgment.",
    methodOneTitle: "Signals move clocks",
    methodOneCopy: "Each event has a direction, target, confidence, source, and day delta.",
    methodTwoTitle: "Votes move distributions",
    methodTwoCopy:
      "Public answers are shown separately so expert signals and crowd instincts can disagree.",
    methodThreeTitle: "Disagreement is content",
    methodThreeCopy:
      "Every questionable adjustment can become an issue, pull request, or weekly debate.",
    openEyebrow: "Open project",
    openTitle: "Built for issues, pull requests, and timeline arguments.",
    readmeCta: "Open README draft",
    footer: "A friendly clock for an uncertain future.",
    submitted: "Vote added",
  },
  zh: {
    navSignals: "信号",
    navPulse: "公众脉搏",
    navMethod: "方法",
    navOpen: "开源",
    eyebrow: "一个轻松、有证据的 AGI / ASI 小钟",
    heroTitle: "智能地平线",
    heroCopy:
      "当专家表态、产品发布、基准被刷新、普通人投票时，一起看看智能时代的地平线怎么移动。",
    voteCta: "加入你的预测",
    signalsCta: "查看最近拨动",
    agiLabel: "AGI 地平线",
    agiNote: "基于样例信号日志的专家加权中位预测。",
    agiMove: "本季度向前拨快 7 个月",
    asiLabel: "ASI 地平线",
    asiNote: "早期超级智能的不确定性更高，区间更宽。",
    asiMove: "仍处于高不确定区间",
    publicLabel: "公众脉搏",
    publicNote: "来自初始样例票和本地提交的 AGI 中位数。",
    namesEyebrow: "起名游乐场",
    namesTitle: "一个钟，也可以有点梗。",
    signalsEyebrow: "信号日志",
    signalsTitle: "什么让地平线移动了？",
    pulseEyebrow: "公众脉搏",
    pulseTitle: "专家有专家钟，大家有大家的脉搏。",
    pulseCopy:
      "有意思的地方是，把前沿实验室的判断，和开发者、老师、设计师、创业者、学生、怀疑者在自己领域里的体感放在一起看。",
    votesLabel: "票",
    fieldLabel: "领域自动化中位数",
    formAgi: "你认为 AGI 什么时候到来？",
    formAsi: "你认为 ASI 什么时候到来？",
    formField: "你的行业",
    formWork: "AI 什么时候能完成你所在领域 90% 的工作？",
    submitVote: "提交本地投票",
    formNote:
      "MVP 说明：这个原型先把投票存在你的浏览器里。等问题设计稳定后，再接公开收集。",
    methodEyebrow: "方法",
    methodTitle: "规则小一点，判断透明一点。",
    methodOneTitle: "信号拨动时钟",
    methodOneCopy: "每个事件都有方向、目标、置信度、来源和天数调整。",
    methodTwoTitle: "投票形成分布",
    methodTwoCopy: "公众答案单独展示，这样专家信号和群众直觉可以互相不服。",
    methodThreeTitle: "分歧也是内容",
    methodThreeCopy: "每个有争议的调整，都可以变成 issue、PR 或每周讨论。",
    openEyebrow: "开源项目",
    openTitle: "为 issue、pull request 和时间线争论而生。",
    readmeCta: "打开 README 草稿",
    footer: "给不确定未来的一只友好小钟。",
    submitted: "已加入投票",
  },
};

const names = {
  en: [
    ["Intelligence Horizon", "calm, global, flexible"],
    ["Horizon Pulse", "keeps the public-vote idea in the name"],
    ["Maybe Soon", "a softer meme name for AGI timing"],
    ["The Maybe Clock", "funny without sounding unserious"],
    ["Almost O'Clock", "playful and very shareable"],
    ["T-minus Maybe", "countdown energy, but with humility"],
    ["The Generality Gauge", "nerdy but memorable"],
    ["Frontier Pulse", "works well with voting"],
    ["When AGI?", "blunt, search-friendly, a little cheeky"],
    ["Soonish", "tiny, memeable, easy to remember"],
    ["Future's Loading Bar", "visual, playful, product-friendly"],
    ["The Tomorrow Meter", "soft and optimistic"],
  ],
  zh: [
    ["智能地平线", "稳、漂亮，适合国际项目"],
    ["地平线报时", "中文感更强，也保留时钟意象"],
    ["快了钟", "短、好记、带一点互联网梗"],
    ["快乐钟", "和“快了钟”谐音，更轻松"],
    ["差不多钟", "松弛、有梗，适合做副栏目"],
    ["差不多两年钟", "直接玩大佬采访的梗"],
    ["通用智能还有多久", "中文搜索友好"],
    ["智能几更天", "轻松，有一点中文韵味"],
    ["快到 AGI 了吗", "适合社交传播和投票"],
    ["还有几步", "短，适合中文社交传播"],
    ["未来进度条", "比倒计时更不焦虑"],
    ["智能风向标", "适合专家信号和公众投票并存"],
  ],
};

let language = "en";
let events = [];
let starterVotes = [];

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

function localVotes() {
  try {
    return JSON.parse(localStorage.getItem("ih_votes") || "[]");
  } catch {
    return [];
  }
}

async function fetchPublicVotes() {
  return localVotes();
}

async function savePublicVote(vote) {
  const votes = localVotes().concat(vote);
  localStorage.setItem("ih_votes", JSON.stringify(votes));
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
  const [loadedEvents, loadedVotes] = await Promise.all([
    fetchJson("./data/events.json", fallbackEvents),
    fetchJson("./data/starter-votes.json", fallbackStarterVotes),
  ]);
  events = loadedEvents;
  starterVotes = loadedVotes;
}

async function renderLanguage() {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[language][key] || node.textContent;
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });
  renderNames();
  renderSignals();
  await updateVotes();
}

function renderNames() {
  const grid = document.querySelector("#name-grid");
  grid.innerHTML = names[language]
    .map(
      ([name, note]) => `
        <article class="name-card">
          <strong>${name}</strong>
          <p>${note}</p>
        </article>
      `,
    )
    .join("");
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

function renderBars(votes) {
  const years = [2026, 2027, 2028, 2029, 2030, 2033, 2038];
  const counts = years.map((year) => votes.filter((vote) => Number(vote.agi) === year).length);
  const max = Math.max(...counts, 1);
  document.querySelector("#spark-bars").innerHTML = counts
    .map((count) => `<span style="height:${Math.max(10, (count / max) * 74)}px"></span>`)
    .join("");
}

async function updateVotes() {
  const votes = await allVotes();
  const agiMedian = median(votes.map((vote) => Number(vote.agi)));
  const workMedian = median(votes.map((vote) => Number(vote.work)));
  document.querySelector("#public-median").textContent = formatYear(agiMedian);
  document.querySelector("#vote-count").textContent = votes.length + 34;
  document.querySelector("#field-median").textContent = formatYear(workMedian);
  renderBars(votes);
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
  };
  await savePublicVote(nextVote);
  event.currentTarget.querySelector(".form-button").textContent = copy[language].submitted;
  setTimeout(() => {
    event.currentTarget.querySelector(".form-button").textContent = copy[language].submitVote;
  }, 1400);
  await updateVotes();
});

loadData().then(renderLanguage);
