import { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Recent() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.min(el.clientWidth * 0.7, 900),
      behavior: "smooth",
    });
  };

  return (
    <section id="about" className="bg-ink py-20 text-ink-foreground md:py-28">
      <div className="px-4 md:px-10 lg:px-14">
        <Reveal>
          <h2 className="text-[clamp(1.8rem,8vw,2.9rem)] font-semibold tracking-tight">
            {site.recent.title}
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-[minmax(0,32%)_1fr] md:items-center">
        <Reveal className="px-4 md:px-10 lg:px-14">
          <img
            src={site.brand.logoWhite}
            alt=""
            className="h-12 w-auto md:h-16"
          />

          <p className="mt-5 text-[clamp(1.5rem,6.5vw,2.5rem)] font-light leading-[1.15] tracking-tight text-ink-foreground/80">
            {site.recent.note}
          </p>
        </Reveal>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 pl-4 pr-4 no-scrollbar md:pl-0"
        >
          {site.recent.items.map((item) => (
            <figure
              key={item.image + item.caption}
              className="group relative w-[74vw] shrink-0 snap-start overflow-hidden rounded-xl bg-ink-muted md:w-[27rem]"
            >
              <img
                src={item.image}
                alt={item.caption}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.05]"
              />

              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/90 to-transparent p-4 text-sm opacity-0 transition-all duration-500 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-3 px-5 md:px-10 lg:px-14">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollBy(-1)}
          className="rounded-full border border-ink-foreground/30 p-3 transition-colors hover:bg-ink-foreground/10"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollBy(1)}
          className="rounded-full border border-ink-foreground/30 p-3 transition-colors hover:bg-ink-foreground/10"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}