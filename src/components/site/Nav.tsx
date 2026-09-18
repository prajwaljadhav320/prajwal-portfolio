import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Nav() {
const [open, setOpen] = useState(false);
const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
  className={cn(
    "pointer-events-auto w-full max-w-md overflow-hidden rounded-3xl border backdrop-blur-xl",
    "border-accent/30 bg-background/85 shadow-float",
  )}
>
        {/* TOP BAR */}
        <div className="flex h-[44px] items-center justify-between gap-3 px-3">
          
          {/* LOGO */}
          <a
            href="#top"
            onClick={() => setOpen(false)}
            aria-label="Home"
            className="group relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full"
          >
            <img
              src={site.brand.logoMark}
              alt=""
              className="h-4 w-4 transition-transform duration-500 ease-out group-hover:scale-90"
            />

            {/* Small hover ring */}
            <span className="absolute inset-0 rounded-full border border-accent/0 transition-all duration-500 group-hover:border-accent/40 group-hover:scale-100 scale-75" />
          </a>

          {/* WORDMARK */}
<a
  href="#top"
  onClick={() => setOpen(false)}
  className="group absolute left-1/2 -translate-x-1/2 font-display text-sm tracking-[0.35em] bg-gradient-to-r from-primary via-violet-400 to-white bg-clip-text text-transparent"
>
  <span className="relative">
    {site.brand.wordmark}

    {/* Animated underline */}
    <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />
  </span>
</a>

          {/* MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 hover:bg-accent/10"
          >
            <span className="relative flex h-4 w-5 flex-col justify-center gap-[5px]">
              {/* Top line */}
              <span
                className={cn(
                  "block h-px w-5 bg-accent origin-center transition-all duration-500 ease-out",
                  open && "translate-y-[3px] rotate-45",
                )}
              />

              {/* Bottom line */}
              <span
                className={cn(
                  "block h-px w-5 bg-accent origin-center transition-all duration-500 ease-out",
                  open && "-translate-y-[3px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>

        {/* MENU PANEL */}
        <div
          id="main-navigation"
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
            open
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-t border-accent/10 px-5 pb-5 pt-4">
              
              {/* Small menu label */}
              <div
                className={cn(
                  "mb-3 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-muted-foreground",
                  "transition-all duration-500",
                  open
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0",
                )}
              >
                <span>Navigation</span>
                <span>— 00</span>
              </div>

              {/* NAV LINKS */}
              <ul className="space-y-1">
                {site.nav.map((item, index) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      style={{
                        transitionDelay: open
                          ? `${100 + index * 70}ms`
                          : "0ms",
                      }}
                      className={cn(
                        "group flex items-center justify-between rounded-xl px-2 py-2",
                        "transition-all duration-500 ease-out",
                        "hover:bg-accent/5",
                        open
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0",
                      )}
                    >
                      <span className="flex items-center gap-3">
                        {/* Number */}
                        <span className="w-5 text-[9px] tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Link */}
                        <span className="text-xl font-semibold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">
                          {item.label}
                        </span>
                      </span>

                      {/* Arrow */}
                      <span className="translate-x-2 text-sm text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Bottom detail */}
              <div
                className={cn(
                  "mt-3 flex items-center justify-between border-t border-accent/10 pt-3 text-[9px] uppercase tracking-[0.2em] text-muted-foreground",
                  "transition-all duration-700",
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0",
                )}
              >
                <span>Motion Designer</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}