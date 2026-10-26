/* Native horizontal scrolling also works when JavaScript is unavailable. */
document.querySelectorAll(".methods-section").forEach((gallery) => {
  const track = gallery.querySelector(".methods-track");
  const cards = Array.from(gallery.querySelectorAll(".method-card"));
  const controls = gallery.querySelector(".methods-controls");
  const previous = gallery.querySelector("[data-methods-prev]");
  const next = gallery.querySelector("[data-methods-next]");
  const position = gallery.querySelector("[data-methods-position]");
  if (!track || !cards.length || !controls || !previous || !next || !position) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let scheduled = false;

  const metrics = () => {
    const bounds = track.getBoundingClientRect();
    const first = cards.findIndex((card) => card.getBoundingClientRect().right > bounds.left + 8);
    let last = first;
    cards.forEach((card, index) => {
      if (card.getBoundingClientRect().left < bounds.right - 8) last = index;
    });
    return { first: Math.max(0, first), last };
  };

  const update = () => {
    scheduled = false;
    const { first, last } = metrics();
    const range = first === last ? `${first + 1}` : `${first + 1}–${last + 1}`;
    const text = `${range} / ${cards.length}`;
    if (position.textContent !== text) position.textContent = text;
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
  };

  const queueUpdate = () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(update);
    }
  };

  const goTo = (index) => {
    const card = cards[Math.max(0, Math.min(cards.length - 1, index))];
    const left = card.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    track.scrollTo({ left, behavior: reducedMotion.matches ? "auto" : "smooth" });
  };

  previous.addEventListener("click", () => goTo(metrics().first - 1));
  next.addEventListener("click", () => goTo(metrics().first + 1));

  track.addEventListener("keydown", (event) => {
    if (document.querySelector(".lightbox.is-open")) return;
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(metrics().first - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(metrics().first + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(cards.length - 1);
    }
  });

  track.addEventListener("scroll", queueUpdate, { passive: true });
  if ("ResizeObserver" in window) new ResizeObserver(queueUpdate).observe(track);
  else window.addEventListener("resize", queueUpdate);

  controls.hidden = false;
  update();
});
