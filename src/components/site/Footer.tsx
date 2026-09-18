import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-16 text-ink-foreground md:px-10 lg:px-14">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <img
            src={site.brand.logoWhite}
            alt={site.brand.wordmark}
            className="h-10 w-auto"
          />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold">Email</p>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-ink-foreground/70 transition-colors hover:text-accent"
            >
              {site.contact.email}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold">Contact No.</p>
            <a
              href={`tel:${site.contact.phone}`}
              className="text-ink-foreground/70 transition-colors hover:text-accent"
            >
              {site.contact.phone}
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Follow my work</p>
          <ul className="mt-3 space-y-2">
            {site.footer.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-foreground/70 transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-ink-foreground/15 pt-6 text-sm text-ink-foreground/60 md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-5">
          {site.footer.legal.map((l) => (
            <li key={l}>
              <a href="#top" className="transition-colors hover:text-accent">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <p>{site.footer.copyright}</p>
      </div>
    </footer>
  );
}