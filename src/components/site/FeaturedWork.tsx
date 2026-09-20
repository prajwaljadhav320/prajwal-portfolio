import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  align,
}: {
  project: (typeof site.work.projects)[number];
  align: "left" | "right";
}) {
  return (
    <article
      className={cn(
        "md:w-[46%]",
        align === "right" ? "md:ml-auto md:mt-[-14vh]" : "",
      )}
    >
      <Reveal>
        <h3 className="mb-3 text-[clamp(1.1rem,5vw,1.65rem)] leading-tight tracking-tight">
          <span className="font-semibold">{project.client}</span>{" "}
          <em className="font-normal">{project.title}</em>
        </h3>

        {/* Project Media */}
        <div className="group overflow-hidden rounded-xl bg-muted">
          {project.vimeo ? (
            <div
              className="
                relative
                aspect-video
                w-full
                overflow-hidden
                md:h-[360px]
                md:aspect-auto
              "
            >
              <iframe
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  scale-[1.08]
                  border-0
                  transition-transform
                  duration-[900ms]
                  ease-smooth
                  group-hover:scale-[1.14]
                "
                src={project.vimeo}
                title={`${project.client} - ${project.title}`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div
              className="
                relative
                aspect-video
                w-full
                overflow-hidden
                md:h-[360px]
                md:aspect-auto
              "
            >
              <video
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[900ms]
                  ease-smooth
                  group-hover:scale-[1.04]
                "
                src={project.video}
                poster={project.poster}
                muted
                loop
                playsInline
                preload="none"
              />
            </div>
          )}
        </div>
      </Reveal>
    </article>
  );
}

export function FeaturedWork() {
  return (
    <section
      id="work"
      className="px-4 py-20 md:px-10 md:py-36 lg:px-14"
    >
      <div className="grid gap-6 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="text-[clamp(1.8rem,8vw,2.9rem)] font-semibold tracking-tight">
            {site.work.title}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="max-w-lg leading-snug text-foreground/85 md:text-lg">
            {site.work.intro}
          </p>
        </Reveal>
      </div>

      <div className="mt-12 space-y-14 md:mt-28 md:space-y-28">
        {site.work.projects.map((project, i) => (
          <ProjectCard
            key={project.client}
            project={project}
            align={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>

      <Reveal className="mt-16 md:mt-24 md:pl-[54%]">
        <a href={site.work.cta.href} className="btn-outline">
          {site.work.cta.label}
        </a>
      </Reveal>
    </section>
  );
}