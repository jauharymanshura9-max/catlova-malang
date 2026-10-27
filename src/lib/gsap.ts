// gsap not required after perf refactor

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function registerGsap() {
  if (typeof window === "undefined") return;
  if (reduced()) return;
  // ScrollTrigger not required for perf; keep registration for compatibility
}

export function initHero() {
  if (typeof window === "undefined" || reduced()) return;
  const hero = document.querySelector<HTMLElement>(".hero-enter");
  if (!hero) return;
  hero.style.transition = "opacity 0.75s ease, transform 0.75s ease";
  hero.style.opacity = "0";
  hero.style.transform = "translateY(20px)";
  requestAnimationFrame(() => {
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  });
}

export function initReveal() {
  if (typeof window === "undefined" || reduced()) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.15 },
  );
  document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    io.observe(el);
  });
}

export function initParallax() {
  if (typeof window === "undefined" || reduced()) return;
  const bg = document.querySelector<HTMLElement>(".hero-bg");
  const fg = document.querySelector<HTMLElement>(".hero-fg");
  if (!bg && !fg) return;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    if (bg) bg.style.transform = `translateY(${y * 0.3}px)`;
    if (fg) fg.style.transform = `translateY(${y * 0.7}px)`;
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  update();
}

export function initStagger() {
  if (typeof window === "undefined" || reduced()) return;
  document.querySelectorAll<HTMLElement>(".stagger").forEach((container) => {
    const items = Array.from(container.querySelectorAll<HTMLElement>(".stagger-item"));
    items.forEach((it) => {
      it.style.opacity = "0";
      it.style.transform = "translateY(20px)";
      it.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            items.forEach((it, i) => {
              setTimeout(() => {
                it.style.opacity = "1";
                it.style.transform = "translateY(0)";
              }, i * 80);
            });
            io.unobserve(container);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(container);
  });
}

export function initCounters() {
  if (typeof window === "undefined" || reduced()) return;
  document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
    const target = parseFloat(el.dataset.counter || "0");
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const duration = 1200;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.textContent = (0).toFixed(decimals).replace(".", ",");
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 2);
              const val = target * eased;
              el.textContent = val.toFixed(decimals).replace(".", ",");
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
  });
  // keep final value until in view
}

export function initSvgDraw() {
  if (typeof window === "undefined" || reduced()) return;
  document.querySelectorAll<HTMLElement>(".hero-draw").forEach((container) => {
    const paths = Array.from(container.querySelectorAll<SVGPathElement>("path"));
    paths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
      p.style.transition = "stroke-dashoffset 1.2s ease";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            paths.forEach((p) => {
              p.style.strokeDashoffset = "0";
            });
            io.unobserve(container);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(container);
  });
}
