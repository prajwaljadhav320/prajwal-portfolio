import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="px-5 pt-24 md:px-10 lg:px-14">
      <Reveal>
        <h1 className="sr-only">{site.hero.headline}</h1>
        <div
          aria-hidden
          className="font-display select-none bg-gradient-to-r from-primary via-violet-400 to-white bg-clip-text text-transparent leading-[0.8] font-bold tracking-[0.02em] text-[clamp(3.5rem,15.5vw,17rem)] flex justify-between"
        >
          {site.brand.wordmark.split("").map((c, i) => (
            <span
              key={i}
              className="animate-letter-in"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {c}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-16">
        <Reveal delay={120}>
          <div className="flex items-start gap-5">
            <img src={site.brand.logoMark} alt="" className="mt-1 h-14 w-14 shrink-0" />
            <p className="max-w-md text-[clamp(1.75rem,3.4vw,3rem)] font-semibold leading-[1.08] tracking-tight">
              {site.hero.headline}
            </p>
          </div>
        </Reveal>
        <Reveal delay={220}>
          <p className="max-w-md text-lg leading-snug text-foreground/85 md:text-xl">
            {site.hero.intro}
          </p>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-12 md:mt-16">
  <div className="overflow-hidden rounded-2xl bg-muted">
    <iframe
      id="hero-video"
      className="aspect-video h-full w-full"
      src="https://player.vimeo.com/video/1226720341?autoplay=1&loop=1&muted=1&autopause=0&controls=0"
      title="Prajwal Jadhav Showreel"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
  </div>
</Reveal>
    </section>
  );
}
