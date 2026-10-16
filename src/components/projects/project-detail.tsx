import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getOtherProjects, type FeaturedProject } from "@/data/projects";
import { MissingNote } from "@/components/ui/missing-note";
import { ProjectDiagram } from "@/components/projects/project-diagram";

type ProjectDetailProps = {
  project: FeaturedProject;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const others = getOtherProjects(project.slug);
  const hasGithub = Boolean(project.links.github);
  const hasDemo = Boolean(project.links.demo);

  return (
    <article className="mx-auto w-full max-w-[1120px] px-5 py-12 sm:px-8 sm:py-16">
      <Link
        href="/#projects"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Projects
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          {project.cardLabel}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink/85">{project.summary}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{project.context}</p>
      </header>

      <div className="relative mt-10 overflow-hidden rounded-2xl border border-line">
        <span className={`absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r ${project.accent}`} />
        {project.screenshot ? (
          <div className="relative aspect-[16/9] bg-[#101828]">
            <Image
              src={project.screenshot}
              alt={project.screenshotAlt ?? `${project.title} screenshot`}
              fill
              className="object-cover"
              sizes="(min-width: 1120px) 1120px, 100vw"
              priority
            />
          </div>
        ) : (
          <ProjectDiagram slug={project.slug} />
        )}
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
        <div className="space-y-12">
          <section aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="font-display text-2xl font-semibold tracking-tight text-ink">
              Problem
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink/85">{project.problem}</p>
          </section>

          <section aria-labelledby="approach-heading">
            <h2 id="approach-heading" className="font-display text-2xl font-semibold tracking-tight text-ink">
              Solution and workflow
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink/85">{project.approach}</p>
            <ol className="mt-6 max-w-2xl space-y-5">
              {project.steps.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line font-display text-[11px] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="contributions-heading">
            <h2 id="contributions-heading" className="font-display text-2xl font-semibold tracking-tight text-ink">
              {project.collaborative ? "What I worked on" : "What I did"}
            </h2>
            <ul className="mt-5 max-w-2xl space-y-3">
              {project.contributions.map((item) => (
                <li key={item} className="border-l border-accent/40 pl-4 text-sm leading-relaxed text-ink/90">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="results-heading">
            <h2 id="results-heading" className="font-display text-2xl font-semibold tracking-tight text-ink">
              Results
            </h2>
            {project.metrics.length > 0 ? (
              <dl className="mt-5 grid gap-3 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-line bg-surface px-4 py-4">
                    <dt className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                      {metric.label}
                    </dt>
                    <dd className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {project.resultsNote ? (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{project.resultsNote}</p>
            ) : null}
            {project.screenshot ? null : (
              <div className="mt-4 max-w-2xl">
                <MissingNote title="Screenshot">
                  No approved screenshot yet. The figure above is a diagram of the work, not a capture of the product.
                </MissingNote>
              </div>
            )}
          </section>

          <section aria-labelledby="challenges-heading">
            <h2 id="challenges-heading" className="font-display text-2xl font-semibold tracking-tight text-ink">
              Challenges and decisions
            </h2>
            {project.challenges && project.challenges.length > 0 ? (
              <ul className="mt-5 max-w-2xl space-y-3">
                {project.challenges.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-ink/85">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-4 max-w-2xl">
                <MissingNote title="Not written yet">
                  Engineering challenges and decisions stay blank until verified notes are added. Nothing here is guessed.
                </MissingNote>
              </div>
            )}
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-line bg-surface p-5">
            <h2 className="font-display text-sm font-semibold tracking-tight text-ink">Technology</h2>
            <ul className="mt-3 space-y-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="text-sm text-muted">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-5">
            <h2 className="font-display text-sm font-semibold tracking-tight text-ink">Links</h2>
            <ul className="mt-3 space-y-2">
              {project.links.github ? (
                <li>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-ink"
                  >
                    GitHub
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              ) : null}
              {project.links.demo ? (
                <li>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-ink"
                  >
                    Live demo
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              ) : null}
            </ul>
            {!hasGithub || !hasDemo ? (
              <div className="mt-3">
                <MissingNote title="Public links">
                  {!hasGithub && !hasDemo
                    ? "Repository and live demo URLs have not been added."
                    : !hasGithub
                      ? "A repository URL has not been added."
                      : "A live demo URL has not been added."}
                </MissingNote>
              </div>
            ) : null}
          </div>
        </aside>
      </div>

      <nav className="mt-16 border-t border-line pt-8" aria-label="Other projects">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          More projects
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/projects/${other.slug}`}
                className="block rounded-xl border border-line px-4 py-4 text-sm font-medium text-ink transition-colors hover:border-accent/40"
              >
                {other.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#projects"
          className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Projects
        </Link>
      </nav>
    </article>
  );
}
