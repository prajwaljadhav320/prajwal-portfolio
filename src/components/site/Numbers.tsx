import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Numbers() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-36 lg:px-14">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="text-[clamp(2rem,4vw,2.9rem)] font-semibold tracking-tight md:sticky md:top-28">
            {site.numbers.title}
          </h2>
        </Reveal>

        <dl className="space-y-14">
          {site.numbers.stats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 90}>
              <dt className="text-outline font-display text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-none">
                {stat.value}
              </dt>
              <dd className="mt-3 max-w-sm text-xl font-semibold leading-tight tracking-tight">
                {stat.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
