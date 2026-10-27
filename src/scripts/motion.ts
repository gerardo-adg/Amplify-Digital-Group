/**
 * Scroll-triggered motion. Elements opt in with data-reveal:
 *   data-reveal          fade and rise
 *   data-reveal="lines"  headline lines (.l > .l__in) slide up from behind a mask
 * Children of [data-stagger] get an increasing delay automatically.
 * [data-count] numbers count up once they're on screen.
 * All of it is skipped for visitors who prefer reduced motion (see global.css).
 */
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count ?? 0);
  if (reduced || !target) return;
  const start = performance.now();
  const dur = 1600;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 4))).toLocaleString("en-US");
    if (t < 1) requestAnimationFrame(tick);
  };
  el.textContent = "0";
  requestAnimationFrame(tick);
}

export function initMotion() {
  document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
    Array.from(group.children).forEach((child, i) => (child as HTMLElement).style.setProperty("--i", String(i)));
  });

  const els = document.querySelectorAll<HTMLElement>("[data-reveal], [data-count]");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        el.classList.add("is-in");
        if (el.dataset.count !== undefined) countUp(el);
        io.unobserve(el);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
  );
  els.forEach((el) => io.observe(el));

  // Fast scrolls or anchor jumps can skip past an element between frames.
  let ticking = false;
  const sweep = () => {
    ticking = false;
    document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("is-in");
        io.unobserve(el);
      }
    });
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(sweep);
    }
  }, { passive: true });
}
