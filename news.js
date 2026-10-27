/* Keep three complete updates visible; older entries remain in the native scroll region. */
(() => {
  "use strict";
  const viewport = document.querySelector("[data-news-window]");
  if (!viewport) return;
  const items = Array.from(viewport.querySelectorAll(".news-item"));
  if (!items.length) return;
  const controls = document.querySelector("[data-news-controls]");
  const up = document.querySelector("[data-news-up]");
  const down = document.querySelector("[data-news-down]");
  const visible = Math.min(items.length, Math.max(1, Number(viewport.getAttribute("data-visible-items")) || 3));
  const offset = item => item.offsetTop - items[0].offsetTop;
  let frame = 0;

  const updateControls = () => {
    const limit = Math.max(0, viewport.scrollHeight - viewport.clientHeight);
    if (controls) controls.hidden = limit <= 1;
    if (up) up.disabled = viewport.scrollTop <= 1;
    if (down) down.disabled = viewport.scrollTop >= limit - 1;
  };
  const fit = () => {
    const last = items[visible - 1];
    const height = offset(last) + last.offsetHeight;
    if (height > 0) {
      viewport.style.height = `${Math.ceil(height)}px`;
      viewport.classList.add("is-sized");
    }
    updateControls();
  };
  const queueFit = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => { frame = 0; fit(); });
  };
  const move = direction => {
    const limit = Math.max(0, viewport.scrollHeight - viewport.clientHeight);
    const top = viewport.scrollTop;
    const candidates = direction > 0 ? items : items.slice().reverse();
    const next = candidates.find(item => direction > 0 ? offset(item) > top + 1 : offset(item) < top - 1);
    const target = Math.min(limit, Math.max(0, next ? offset(next) : direction > 0 ? limit : 0));
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (viewport.scrollTo) viewport.scrollTo({ top: target, behavior: reduced ? "auto" : "smooth" });
    else viewport.scrollTop = target;
    updateControls();
  };

  if (up) up.addEventListener("click", () => move(-1));
  if (down) down.addEventListener("click", () => move(1));
  viewport.addEventListener("scroll", updateControls, { passive: true });
  window.addEventListener("resize", queueFit);
  document.addEventListener("site:languagechange", queueFit);
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(queueFit);
    items.forEach(item => observer.observe(item));
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(queueFit);
  fit();
})();
