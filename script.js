document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "Close" : "Menu";
  });

  navigation.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
  });
}

/* ---------- scroll reveal ---------- */
const revealCandidates = () => [
  ...document.querySelectorAll(
    ".reveal, .pub-list .pub-item, .timeline .role, .news-list .news-item, .research-list .research-item, .skills-grid .skill-group"
  ),
].filter((el) => !el.classList.contains("is-visible"));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );

  const observeAll = () => revealCandidates().forEach((el) => revealObserver.observe(el));
  observeAll();
} else {
  document.querySelectorAll(".reveal, .pub-item, .role, .news-item, .research-item, .skill-group").forEach((el) =>
    el.classList.add("is-visible")
  );
}

/* ---------- publications filter ---------- */
const filterArea = document.querySelector(".pub-filter-anchor");

if (filterArea && document.querySelector(".pub-section")) {
  const sections = Array.from(document.querySelectorAll(".pub-section"));
  const counts = {
    all: 0,
    published: 0,
    review: 0,
    submitted: 0,
    conference: 0,
  };

  sections.forEach((section) => {
    const heading = (section.querySelector("h2") || {}).textContent || "";
    const items = section.querySelectorAll(".pub-item");
    counts.all += items.length;
    if (/published/i.test(heading)) counts.published += items.length;
    else if (/under review/i.test(heading)) counts.review += items.length;
    else if (/submitted/i.test(heading)) counts.submitted += items.length;
    else if (/conference/i.test(heading)) counts.conference += items.length;
  });

  const btn = (key, label) =>
    `<button class="pub-filter-btn${key === "all" ? " is-active" : ""}" data-filter="${key}" type="button" aria-pressed="${key === "all"}">${label}<span class="count">${counts[key]}</span></button>`;

  filterArea.insertAdjacentHTML(
    "beforeend",
    `<nav class="pub-filter" aria-label="Filter publications">${btn("all", "All")}${btn("published", "Published")}${btn("review", "Under review")}${btn("submitted", "Submitted")}${btn("conference", "Conference")}</nav>`
  );

  const buttons = Array.from(filterArea.querySelectorAll(".pub-filter-btn"));
  let emptyNote = document.createElement("p");
  emptyNote.className = "pub-empty";
  emptyNote.textContent = "No entries match this filter yet.";
  filterArea.appendChild(emptyNote);

  const applyFilter = (key) => {
    let visible = 0;
    sections.forEach((section) => {
      const heading = (section.querySelector("h2") || {}).textContent || "";
      let match = key === "all";
      if (!match) {
        if (key === "published") match = /published/i.test(heading);
        else if (key === "review") match = /under review/i.test(heading);
        else if (key === "submitted") match = /^submitted/i.test(heading);
        else if (key === "conference") match = /conference/i.test(heading);
      }
      section.classList.toggle("is-filtered-out", !match);
      if (match) visible += section.querySelectorAll(".pub-item").length;
    });
    emptyNote.classList.toggle("is-shown", visible === 0);
  };

  buttons.forEach((b) => {
    b.addEventListener("click", () => {
      buttons.forEach((x) => {
        x.classList.toggle("is-active", x === b);
        x.setAttribute("aria-pressed", x === b ? "true" : "false");
      });
      applyFilter(b.dataset.filter);
    });
  });
}

/* ---------- lightbox for research figures ---------- */
const figures = Array.from(document.querySelectorAll(".research-figure a[href$='.png'], .research-figure a[href$='.jpg']"));

if (figures.length > 0) {
  const box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Image preview");
  box.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close">×</button>
    <button class="lightbox-nav lightbox-prev" type="button" aria-label="Previous image">‹</button>
    <button class="lightbox-nav lightbox-next" type="button" aria-label="Next image">›</button>
    <figure><img src="" alt=""><figcaption></figcaption></figure>`;
  document.body.appendChild(box);

  const imgEl = box.querySelector("img");
  const capEl = box.querySelector("figcaption");
  let index = 0;

  const open = (i) => {
    index = (i + figures.length) % figures.length;
    const link = figures[index];
    const figure = link.closest(".research-figure");
    const caption = figure ? (figure.querySelector("figcaption") || {}).textContent : "";
    imgEl.src = link.href;
    imgEl.alt = (link.querySelector("img") || {}).alt || "";
    capEl.textContent = caption || "";
    box.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    box.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  figures.forEach((link, i) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      open(i);
    });
  });

  box.querySelector(".lightbox-close").addEventListener("click", close);
  box.querySelector(".lightbox-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    open(index - 1);
  });
  box.querySelector(".lightbox-next").addEventListener("click", (e) => {
    e.stopPropagation();
    open(index + 1);
  });
  box.addEventListener("click", (e) => {
    if (e.target === box) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") open(index - 1);
    if (e.key === "ArrowRight") open(index + 1);
  });
}
