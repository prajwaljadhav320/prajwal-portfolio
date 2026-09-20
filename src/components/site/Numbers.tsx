import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Numbers() {
  return (
    <section className="px-4 py-16 md:px-10 md:py-36 lg:px-14">
      <div className="grid gap-8 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="text-[clamp(1.8rem,8vw,2.9rem)] font-semibold tracking-tight md:sticky md:top-28">
            {site.numbers.title}
          </h2>
        </Reveal>

        <dl className="space-y-10 md:space-y-14">
          {site.numbers.stats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 90}>
              <dt className="text-outline font-display text-[clamp(3rem,15vw,5.5rem)] font-bold leading-none">
                {stat.value}
              </dt>

              <dd className="mt-2 max-w-sm text-lg font-semibold leading-tight tracking-tight md:mt-3 md:text-xl">
                {stat.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}