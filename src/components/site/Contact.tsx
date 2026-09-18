import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="px-5 pb-24 md:px-10 md:pb-36 lg:px-14">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="text-[clamp(2rem,4vw,2.9rem)] font-semibold tracking-tight">
            {site.contact.title}
          </h2>
        </Reveal>

        <div>
          <Reveal delay={100}>
            <p className="max-w-lg leading-snug text-foreground/85 md:text-lg">
              {site.contact.body}
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            <Reveal delay={160}>
              <p className="text-sm font-semibold">Email</p>
              <a
                href={`mailto:${site.contact.email}`}
                className="story-link text-lg text-foreground/85 hover:text-accent"
              >
                {site.contact.email}
              </a>
            </Reveal>

            <Reveal delay={240}>
              <p className="text-sm font-semibold">Contact No.</p>
              <a
                href={`tel:${site.contact.phone}`}
                className="story-link text-lg text-foreground/85 hover:text-accent"
              >
                {site.contact.phone}
              </a>
            </Reveal>
          </div>

          <Reveal delay={320} className="mt-10">
            <a
              href={`mailto:${site.contact.email}`}
              className="btn-solid"
            >
              {site.contact.cta.label}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}