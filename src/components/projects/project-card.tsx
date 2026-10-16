import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { FeaturedProject } from "@/data/projects";
import { cn } from "@/lib/cn";
import { ProjectDiagram } from "@/components/projects/project-diagram";

type ProjectCardProps = {
  project: FeaturedProject;
  featured?: boolean;
  className?: string;
};

export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-200 hover:border-accent/45 hover:bg-[#182338]",
        "motion-safe:hover:-translate-y-0.5",
        featured && "lg:grid lg:min-h-[280px] lg:grid-cols-2",
        className,
      )}
    >
      <div className={cn("relative min-h-52", featured && "lg:min-h-full")}>
        <span className={cn("absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r", project.accent)} />
        <ProjectDiagram slug={project.slug} />
      </div>
      <div className={cn("flex flex-1 flex-col p-5 sm:p-6", featured && "lg:justify-center lg:p-8")}>
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          {project.cardLabel}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/75">{project.summary}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{project.technologies.join(" · ")}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          Case study
          <ArrowUpRight
            className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
