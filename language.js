/* English remains in the HTML as a no-JavaScript fallback and the source of truth.
   Translate text nodes, not innerHTML, so links and figure interactions survive.
   To update a sentence, update its English key and Chinese value together below. */
(() => {
  "use strict";

  const translations = {
    "Wenxuan Li": "李文轩",
    "Wenxuan Li.": "李文轩",
    "Wenxuan Li — Researcher": "李文轩 · 个人学术主页",
    "Experience — Wenxuan Li": "研究经历 · 李文轩",
    "Publications — Wenxuan Li": "论文与报告 · 李文轩",
    "Researcher in formation": "在探索中成长的研究者",
    "Home": "首页",
    "Experience": "研究经历",
    "Publications": "已发表论文",
    "Menu": "菜单",
    "Close": "关闭",
    "Language": "语言",
    "Primary navigation": "主导航",
    "Wenxuan Li, home": "李文轩，返回首页",
    "Child development × quantitative methods": "儿童发展 × 量化方法",
    "I work with long datasets and messy questions about how children learn, grow, and experience inequality. My research moves between two worlds that share the same problem: early childhood development — how nature connectedness, resilience, and family and classroom environments unfold over time — and responsible educational AI, where I test whether prediction models stay honest when time, place, or population changes. I care less about whether a model looks impressive and more about whether it tells us something true.": "我用纵向数据研究儿童如何学习、成长，以及不平等如何影响他们的生活。目前的研究主要围绕两条线展开：一条是儿童早期发展，关注亲自然、心理韧性以及家庭和课堂环境如何随时间共同变化；另一条是负责任的教育人工智能，考察预测模型换了时间、地区或人群之后，是否依然可靠。比起模型看上去有多厉害，我更在意它是否让我们更接近真实。",
    "Undergraduate researcher": "本科生研究者",
    "Henan University": "河南大学",
    "Beijing Forestry University": "北京林业大学",
    "Xi’an Jiaotong-Liverpool University": "西交利物浦大学",
    "Kaifeng, China": "中国 · 开封",
    "✉️ Email": "✉️ 邮箱",
    "🎓 Google Scholar": "🎓 谷歌学术",
    "📄 CV": "📄 简历",
    "Email": "邮箱",
    "Google Scholar": "谷歌学术",
    "CV": "简历",
    "publication ·": "篇已发表论文 ·",
    "manuscripts ·": "篇在研稿件 ·",
    "accepted conference presentations": "项已接收会议报告",
    "News": "近期动态",
    "📣 What’s new.": "📣 最近在做什么",
    "Recent milestones in my research, training, and graduate applications.": "关于研究、学习和研究生申请的一些近况。",
    "Sep 2026": "2026 年 9 月",
    "Aug 2026": "2026 年 8 月",
    "Jul 2026": "2026 年 7 月",
    "Nov 2026": "2026 年 11 月",
    "🎤 Upcoming presentation · Northeast Normal University": "🎤 即将赴东北师大作报告",
    "On November 6–8, I will present my six-country MICS study at the Fifth International Forum for Graduate Students in Early Childhood Education, focusing on prioritization and equity in family learning support for preschool children.": "11 月 6–8 日，将在第五届学前教育研究生国际论坛汇报六国 MICS 研究，关注学前儿童家庭学习支持的优先配置与公平性。",
    "🎉 Poster accepted at the AARE 2026 Annual Conference": "🎉 海报获 AARE 2026 年会接收",
    "Nature connectedness and creative personality · Brisbane, Australia.": "亲自然与创造性人格研究 · 澳大利亚布里斯班。",
    "📮 Submitted my master’s application": "📮 已提交硕士申请",
    "Applied to the University of Macau.": "申请院校：澳门大学。",
    "☀️ Summer school · Peking University": "☀️ 北京大学暑期学校",
    "Attended the 2026 “Frontiers in Educational Technology” Summer School.": "参加 2026 年“教育技术前沿”暑期学校。",
    "💼 Research experience": "💼 研究经历",
    "Research Assistant · Child Development and Nature-Based Education": "研究助理 · 儿童发展与自然教育",
    "Dec 2024 — Sep 2026 · Supervisors: Prof. Xiaomin Li & Prof. Beijia Tan": "2024 年 12 月—2026 年 9 月 · 导师：Xiaomin Li、Beijia Tan",
    "Research Assistant · Children’s Cognitive Learning and Nature Education": "研究助理 · 儿童认知学习与自然教育",
    "Jan 2026 — Sep 2026 · Supervisor: Prof. Xiao Yu": "2026 年 1 月—9 月 · 导师：Xiao Yu",
    "Research Assistant · Parent–Child Emotion Communication": "研究助理 · 亲子情绪沟通",
    "Jul 2026 — Present · Supervisor: Prof. Lixin Ren": "2026 年 7 月至今 · 导师：Lixin Ren",
    "Full experience & roles →": "查看完整研究经历 →",
    "About": "关于我",
    "🧑‍🔬 Researcher, still becoming.": "🧑‍🔬 还在慢慢成为研究者",
    "I did not begin university with a perfectly defined research plan.": "刚上大学时，我并没有一份清晰完整的研究计划。",
    "My interest in research grew gradually—from trying to understand how children develop, to learning what happens when real data refuses to behave like the examples in a textbook. Somewhere between cleaning questionnaires, comparing longitudinal models, and rewriting an argument for the fifth time, research became something I genuinely wanted to keep doing.": "我对研究的兴趣是慢慢长出来的。起初只是想理解儿童如何发展，后来开始面对那些不肯像教科书例题一样整齐的真实数据。在清理问卷、比较纵向模型，以及把同一段论证改到第五遍的过程中，我发现，研究成了一件自己真的想继续做下去的事。",
    "I now work across early childhood development and educational AI. To me, they share the same problem: a result can look convincing while missing the context around it—family relationships, classrooms, time, place, or inequality. I care less about whether a model looks impressive and more about whether it tells us something honest.": "现在，我的研究跨越儿童早期发展和教育人工智能。对我来说，它们有一个共同的问题：结果看起来很有说服力，却可能遗漏家庭关系、课堂、时间、地点或不平等这些背景。比起模型是否漂亮，我更想知道，它说的话是否经得起推敲。",
    "Representative work": "代表性研究",
    "🔬 Nature as a developmental resource.": "🔬 把自然看作一种发展资源",
    "A closer look at a longitudinal study of nature connectedness and early childhood development.": "一项关于亲自然与儿童早期发展的纵向研究。",
    "🌱 Child development · Longitudinal": "🌱 儿童发展 · 纵向研究",
    "How does nature connectedness develop alongside resilience and family relationships?": "亲自然如何与心理韧性、家庭关系共同发展？",
    "This project treats nature connectedness as a developmental environmental resource rather than a fixed preference. Using longitudinal growth models, it examines how children’s connection with nature changes alongside psychological resilience and parent–child conflict. The focus is not only on whether these factors are related at one moment, but on how their trajectories unfold together over time.": "这项研究把亲自然看作一种随发展变化的环境资源，而不只是固定的个人偏好。我用纵向增长模型，考察儿童的亲自然如何与心理韧性、亲子冲突共同变化。关心的不仅是它们在某个时间点有没有关联，更是这些发展轨迹如何随时间相互交织。",
    "View publication details →": "查看论文信息 →",
    "Latent growth model of nature connectedness, resilience, and parent–child conflict.": "亲自然、心理韧性与亲子冲突的潜变量增长模型。",
    "Methods": "研究方法",
    "Models I work with.": "我用过的模型",
    "One example per approach, drawn from my research. Scroll sideways; click a figure for a closer look.": "每种方法选一张自己研究中的例图。左右滑动浏览，点击图片可放大。",
    "Cross-lagged panel model": "交叉滞后面板模型（CLPM）",
    "I used a two-wave CLPM to examine prospective links between psychological resilience and nature connectedness.": "用两波 CLPM，考察心理韧性与亲自然之间的前瞻性关联。",
    "Random-intercept CLPM": "随机截距交叉滞后模型（RI-CLPM）",
    "I used RI-CLPM to separate stable differences between children from changes within each child over time.": "用 RI-CLPM，区分儿童之间的稳定差异与每个儿童自身随时间发生的变化。",
    "Latent growth curve model": "潜变量增长曲线模型（LGCM）",
    "I modelled initial levels and change in nature connectedness alongside children’s resilience and parent–child conflict.": "建模亲自然的初始水平和变化速率，考察其与心理韧性、亲子冲突的关联。",
    "Network analysis": "网络分析",
    "I used partial-correlation networks to compare connections among adolescents’ environmental actions across gender groups.": "用偏相关网络，比较不同性别组青少年环保行为之间的关联结构。",
    "Machine learning & SHAP": "机器学习与 SHAP 解释",
    "I combined cross-validated prediction with SHAP to inspect which features contribute to predictions and how their contributions vary.": "结合交叉验证与 SHAP，考察哪些特征影响预测，以及它们的贡献如何变化。",
    "Fairness-aware deep learning": "兼顾公平性的深度学习",
    "I evaluated a domain-adaptive prediction framework against temporal transfer, urban–rural error gaps, and worst-group performance.": "从跨时间迁移、城乡预测误差差距和最弱群体表现三个角度，评估域适应预测框架。",
    "🎧 Beyond research": "🎧 研究之外",
    "Olivia Rodrigo has been on repeat for years. Lately it has been": "这几年，我的歌单一直少不了 Olivia Rodrigo。最近常听的是",
    ", which I have played most days since it came out.": "，发行后几乎每天都在听。",
    "is the other one I keep coming back to — a reminder that perfect is not the point. I try to hold that in research too: not everything has to be flawless, and one small detail should not be allowed to take over a week.": "也是我常常循环的一首。它提醒我，完美并不是目的。我也试着把这句话带进研究里：不是每件事都得毫无瑕疵，也不能让一个小细节占掉整整一周。",
    "🎧 On repeat": "🎧 最近循环",
    "Research experience.": "研究经历",
    "Research teams and the work I contributed.": "我参与的研究团队，以及具体做过的工作。",
    "Research assistantships": "研究助理经历",
    "Dec 2024 — Sep 2026 · Henan University": "2024 年 12 月—2026 年 9 月 · 河南大学",
    "Child development & nature-based education": "儿童发展与自然教育",
    "Supervisors:": "导师：",
    "Supervisor:": "导师：",
    "&": "、",
    "Harmonized four-wave data from 1,100+ children and families; fitted CLPM, RI-CLPM, growth, mediation, and moderation models.": "整合 1,100 余名儿童及其家庭的四波数据，完成 CLPM、RI-CLPM、增长模型、中介与调节模型分析。",
    "Contributed analyses, figures, and manuscript preparation across six papers.": "参与六篇论文的数据分析、图表制作与文稿准备。",
    "Jan 2026 — Sep 2026 · Beijing Forestry University": "2026 年 1 月—9 月 · 北京林业大学",
    "Children’s learning & nature education": "儿童学习与自然教育",
    "Screened 600+ records and coded 97 studies, including effect sizes and neuroimaging coordinates.": "筛选 600 余条文献记录，对 97 项研究进行编码，包括效应量与神经影像坐标。",
    "Prepared meta-analysis supplements covering sensitivity checks, meta-regression, publication bias, and GRADE.": "整理元分析补充材料，涵盖敏感性分析、元回归、发表偏倚检验与 GRADE 证据分级。",
    "Jul 2026 — Present · Xi’an Jiaotong-Liverpool University": "2026 年 7 月至今 · 西交利物浦大学",
    "Parent–child emotion communication": "亲子情绪沟通",
    "Developed a Python tool for coding emotion-related vocabulary in parent–child conversation transcripts.": "开发 Python 工具，对亲子对话文本中的情绪相关词汇进行编码。",
    "Built": "开发了",
    ", an interactive parent-training prototype about children’s emotions and perspectives.": "，一个帮助家长理解儿童情绪与视角的互动培训原型。",
    "Research output": "研究成果",
    "Publications & presentations.": "论文与会议报告",
    "Published work": "已发表论文",
    "Selected work. My name is shown in bold.": "部分研究成果，我的名字以粗体标出。论文题名与署名保留正式英文。",
    "Parallel mediation model ·": "平行中介模型 ·",
    "Figure 2": "图 2",
    "· click to enlarge": "· 点击放大",
    "Manuscripts": "在研稿件",
    "Under revision": "修订中",
    "Under review": "审稿中",
    "Conference presentations": "会议报告",
    "· Singapore.": "· 新加坡。",
    "· Christchurch, New Zealand.": "· 新西兰基督城。",
    "· Brisbane, Australia.": "· 澳大利亚布里斯班。",
    "Oral presentation accepted": "口头报告已接收",
    "Short paper accepted": "短论文已接收",
    "Poster accepted": "海报已接收",
    "✦ © 2026 Wenxuan Li · Last updated October 2026": "✦ © 2026 李文轩 · 更新于 2026 年 10 月",
    "© 2026 Wenxuan Li · Last updated October 2026": "© 2026 李文轩 · 更新于 2026 年 10 月",

    // Page descriptions, figure descriptions, and interactive controls.
    "Wenxuan Li studies child development, educational inequality, and responsible educational AI.": "李文轩的个人学术主页，关注儿童发展、教育不平等与负责任的教育人工智能。",
    "Research assistant experience and contributions of Wenxuan Li.": "李文轩的研究助理经历与具体研究贡献。",
    "Selected publications, manuscripts, and conference presentations by Wenxuan Li.": "李文轩的已发表论文、在研稿件与会议报告。",
    "Portrait of Wenxuan Li in a snowy campus setting": "李文轩在雪中校园的照片",
    "Henan University logo": "河南大学校徽",
    "Beijing Forestry University logo": "北京林业大学校徽",
    "Xi’an Jiaotong-Liverpool University logo": "西交利物浦大学校徽",
    "Open the full-size nature connectedness latent growth model": "放大查看亲自然潜变量增长模型",
    "Latent growth model of nature connectedness, resilience, and parent-child conflict": "亲自然、心理韧性与亲子冲突的潜变量增长模型",
    "carousel": "轮播图集",
    "Previous method": "上一个方法",
    "Next method": "下一个方法",
    "Research methods gallery": "研究方法图集",
    "Enlarge the cross-lagged panel model": "放大查看交叉滞后面板模型",
    "Two-wave latent cross-lagged panel model of psychological resilience and nature connectedness, including their measurement indicators": "心理韧性与亲自然的两波潜变量交叉滞后模型，包含测量指标",
    "Enlarge the random-intercept cross-lagged panel model": "放大查看随机截距交叉滞后模型",
    "Three-wave RI-CLPM of nature connectedness and resilience, with separate between-person and within-person components": "亲自然与心理韧性的三波 RI-CLPM，分别展示个体间和个体内部分",
    "Enlarge the latent growth curve model": "放大查看潜变量增长曲线模型",
    "Conditional latent growth model linking the intercept and slope of nature connectedness with resilience and parent-child conflict": "亲自然截距与斜率关联心理韧性、亲子冲突的条件增长模型",
    "Enlarge the environmental action networks": "放大查看环保行为网络",
    "Two five-node environmental action networks comparing Female/Other and Male students, with a shared partial-correlation line-width scale": "比较女性／其他组与男性组的两张五节点环保行为网络，共用偏相关线宽图例",
    "Enlarge the machine learning and SHAP example": "放大查看机器学习与 SHAP 例图",
    "Three-panel figure showing cross-validated nature connectedness predictions, SHAP feature importance, and a SHAP dependence curve": "交叉验证预测表现、SHAP 特征重要性和 SHAP 依赖曲线三联图",
    "Enlarge the fairness-aware deep learning framework": "放大查看公平性深度学习框架",
    "FairTransEdu-GDRO architecture with feature encoding, academic prediction, temporal domain adaptation, fairness, and worst-group objectives": "FairTransEdu-GDRO 架构，包含特征编码、学业预测、时间域适应、公平性与最弱群体目标",
    "Enlarge the published parallel mediation model": "放大查看已发表论文的平行中介模型",
    "Parallel mediation model linking nature connectedness with creative personality through cognitive flexibility and psychological resilience, controlling for child age": "控制儿童年龄后，通过认知灵活性与心理韧性关联亲自然和创造性人格的平行中介模型",
    "Image preview": "图片预览",
    "Previous image": "上一张图片",
    "Next image": "下一张图片",
    "Play the cure on Spotify": "在 Spotify 播放 the cure",
    "Open the cure on Spotify": "在 Spotify 打开 the cure",
    "Play pretty isn’t pretty on Spotify": "在 Spotify 播放 pretty isn’t pretty",
    "Open pretty isn’t pretty on Spotify": "在 Spotify 打开 pretty isn’t pretty",
    "Cover art for the cure": "the cure 封面",
    "Cover art for pretty isn’t pretty": "pretty isn’t pretty 封面"
  };

  // A navigation label is shorter than the publications section heading.
  const navigationTranslations = { Home: "首页", Experience: "经历", Publications: "论文" };
  const storageKey = "wenxuan-site-language";
  const originals = new WeakMap();
  const originalAttributes = new WeakMap();
  const originalLinks = new WeakMap();
  const normalize = (value) => value.replace(/\s+/g, " ").trim();
  const validLanguage = (value) => /^(zh|zh-cn|zh-hans)$/i.test(value || "") ? "zh" : /^en$/i.test(value || "") ? "en" : null;
  const queryLanguage = () => validLanguage(new URL(window.location.href).searchParams.get("lang"));
  const storedLanguage = () => {
    try { return validLanguage(window.localStorage.getItem(storageKey)); }
    catch { return null; }
  };
  let current = "en";

  const t = (value) => current === "zh" ? (translations[normalize(value)] ?? value) : value;

  const localizeText = () => {
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, noscript, code, pre, .language-switcher, .language-announcement, .menu-toggle, .methods-position, .lightbox, .pub-authors, .pub-main h3, .pub-citation em, .track-title, .track-meta")) continue;
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      const original = originals.get(node);
      const key = normalize(original);
      const translated = parent.closest(".site-nav") ? (navigationTranslations[key] ?? translations[key]) : translations[key];
      node.nodeValue = current === "zh" && translated !== undefined
        ? original.replace(/\S[\s\S]*\S|\S/, translated)
        : original;
    }
  };

  const localizeAttributes = () => {
    document.querySelectorAll("[alt], [aria-label], [aria-roledescription], meta[name='description']").forEach((element) => {
      if (!originalAttributes.has(element)) originalAttributes.set(element, new Map());
      const values = originalAttributes.get(element);
      ["alt", "aria-label", "aria-roledescription", "content"].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        if (attribute === "content" && element.getAttribute("name") !== "description") return;
        if (!values.has(attribute)) values.set(attribute, element.getAttribute(attribute));
        element.setAttribute(attribute, t(values.get(attribute)));
      });
    });
  };

  const localizeLinks = () => {
    document.querySelectorAll("a[href]").forEach((link) => {
      if (!originalLinks.has(link)) originalLinks.set(link, link.getAttribute("href"));
      const source = originalLinks.get(link);
      // Explicitly carry the language between local files as well as GitHub Pages.
      if (!/^(?:\.\/)?(?:index|experience|publications)\.html(?:[?#]|$)/.test(source)) return;
      const url = new URL(source, window.location.href);
      url.searchParams.set("lang", current);
      link.setAttribute("href", source.split(/[?#]/)[0] + url.search + url.hash);
    });
  };

  const announcement = document.createElement("span");
  announcement.className = "language-announcement";
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", "polite");
  document.body.appendChild(announcement);

  const setLanguage = (language, { remember = true, updateURL = false, announce = false } = {}) => {
    const next = validLanguage(language);
    if (!next) return;
    current = next;
    document.documentElement.lang = current === "zh" ? "zh-CN" : "en";
    localizeText();
    localizeAttributes();
    localizeLinks();
    document.querySelectorAll("[data-language]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.language === current)));
    document.querySelectorAll(".language-switcher").forEach((switcher) => { switcher.hidden = false; });
    const menu = document.querySelector(".menu-toggle");
    if (menu) menu.textContent = t(menu.getAttribute("aria-expanded") === "true" ? "Close" : "Menu");
    if (remember) {
      try { window.localStorage.setItem(storageKey, current); } catch { /* Links remain a storage-free fallback. */ }
    }
    if (updateURL) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", current);
      try { window.history.replaceState(window.history.state, "", url); } catch { /* Some file previews restrict History. */ }
    }
    if (announce) announcement.textContent = current === "zh" ? "已切换为中文" : "Switched to English";
    document.dispatchEvent(new CustomEvent("site:languagechange", { detail: { language: current } }));
  };

  window.siteLanguage = { t, set: setLanguage, get current() { return current; } };
  // Read English titles and author names in their original language, including on the Chinese page.
  document.querySelectorAll(".pub-main h3, .pub-authors, .pub-citation em, .track-title, .track-meta").forEach((element) => element.setAttribute("lang", "en"));
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language, { updateURL: true, announce: true }));
  });
  window.addEventListener("popstate", () => setLanguage(queryLanguage() || storedLanguage() || "en", { announce: true }));
  setLanguage(queryLanguage() || storedLanguage() || "en");
})();
