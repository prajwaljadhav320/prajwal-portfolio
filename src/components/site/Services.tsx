import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="px-4 pb-16 md:px-10 md:pb-36 lg:px-14">
      {/* Section Heading */}
      <Reveal>
        <h2 className="text-[clamp(1.8rem,8vw,2.9rem)] font-semibold tracking-tight">
          {site.services.title}
        </h2>
      </Reveal>

      {/* Image + Text */}
      <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <Reveal delay={120}>
          <div className="group overflow-hidden rounded-xl bg-muted">
            <img
              src={site.services.image}
              alt="The team in a creative development session"
              loading="lazy"
              className="block aspect-video w-full max-w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>

        {/* Right-side Content */}
        <div className="flex flex-col justify-center">
          <Reveal delay={100}>
            <p className="max-w-lg leading-snug text-foreground/85 md:text-lg">
              {site.services.body}
            </p>
          </Reveal>

          <Reveal delay={200} className="mt-10">
            <a href={site.services.cta.href} className="btn-outline">
              {site.services.cta.label}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}