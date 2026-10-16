"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/brand-icons";

const focus = [
  { index: "01", title: "Full-stack", detail: "Next.js, Flask, REST APIs" },
  { index: "02", title: "Retrieval", detail: "Chunking, embeddings, pgvector" },
  { index: "03", title: "Vision", detail: "OpenCV, U-Net, YOLOv8" },
] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="hero-atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-[1120px] gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Final-year BS Computer Science · UET Lahore
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-xl font-display text-2xl font-medium tracking-[-0.03em] text-ink sm:text-3xl">
            {site.headline}
          </p>
          <p className="mt-4 text-sm font-medium text-accent">{site.positioning}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80">{site.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#projects">View Projects</ButtonLink>
            <ButtonLink href="#resume" variant="secondary">
              Download Resume
            </ButtonLink>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <motion.aside
          aria-label="Current focus"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-line bg-surface p-5 sm:p-6"
        >
          <div className="flex items-center justify-between">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Current focus
            </p>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          </div>
          <ol className="mt-6">
            {focus.map((item, index) => (
              <li key={item.index} className="relative flex gap-4 pb-5 last:pb-0">
                {index < focus.length - 1 ? (
                  <span className="absolute top-8 left-[15px] h-[calc(100%-1.25rem)] w-px bg-line" aria-hidden="true" />
                ) : null}
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-bg font-display text-[11px] text-accent">
                  {item.index}
                </span>
                <div className="pt-0.5">
                  <p className="font-display text-base font-semibold text-ink">{item.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-2 border-t border-line pt-4">
            <p className="text-sm text-muted">
              {site.degree}
              <span className="px-2 text-muted">/</span>
              {site.studyPeriod} {site.graduationNote}
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
