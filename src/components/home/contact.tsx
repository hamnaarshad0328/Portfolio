import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/brand-icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-heading">
      <Reveal>
        <div className="rounded-2xl border border-line bg-surface px-5 py-8 sm:px-8 sm:py-10">
          <SectionHeading
            id="contact-heading"
            index="06 — Contact"
            title="Contact"
            lede="If you are hiring for a software engineering, full-stack, or AI/ML internship, email is the direct way to reach me."
          />
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex max-w-full items-center gap-3 font-display text-xl font-semibold tracking-tight text-ink underline decoration-accent/40 decoration-2 underline-offset-4 transition-colors hover:decoration-accent sm:text-2xl"
          >
            <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <span className="break-all">{site.email}</span>
          </a>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-3 text-sm text-ink transition-colors hover:border-accent/50"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-3 text-sm text-ink transition-colors hover:border-accent/50"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
