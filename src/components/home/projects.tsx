import { additionalProjects } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  const [lead, ...rest] = featuredProjects;

  return (
    <Section id="projects" labelledBy="projects-heading">
      <Reveal>
        <SectionHeading
          id="projects-heading"
          index="02 — Projects"
          title="Featured projects"
          lede="Retrieval, computer vision, and applied AI. Each card opens a case study."
        />
        {lead ? (
          <div className="mt-10 flex flex-col gap-4">
            <ProjectCard project={lead} featured />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {rest.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  className={index === rest.length - 1 ? "md:col-span-2 xl:col-span-1" : undefined}
                />
              ))}
            </div>
          </div>
        ) : null}
      </Reveal>

      <Reveal>
        <div className="mt-16">
          <h3 className="font-display text-lg font-semibold tracking-tight text-ink">Other work</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Smaller systems projects. They sit behind the four case studies on purpose.
          </p>
          <div className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line">
            {additionalProjects.map((project) => (
              <article key={project.title} className="bg-surface px-5 py-5 sm:px-6">
                <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-10">
                  <div>
                    <h4 className="font-display text-base font-semibold text-ink">{project.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{project.technologies.join(" · ")}</p>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-ink/85">{project.summary}</p>
                    <ul className="mt-3 space-y-1.5">
                      {project.details.map((detail) => (
                        <li key={detail} className="text-sm leading-relaxed text-muted">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
