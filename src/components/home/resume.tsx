import { Download } from "lucide-react";
import { resumes } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Resume() {
  return (
    <Section id="resume" labelledBy="resume-heading">
      <Reveal>
        <SectionHeading
          id="resume-heading"
          index="05 — Resume"
          title="Resume"
          lede="Two versions of the same background, aimed at different applications. Both files are the PDFs supplied for this site."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {resumes.map((resume) => (
            <a
              key={resume.href}
              href={resume.href}
              download={resume.downloadName}
              className="group flex flex-col rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/45 hover:bg-[#182338] sm:p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-accent">
                <Download className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">{resume.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{resume.description}</p>
              <p className="mt-5 text-sm font-semibold text-accent">Download PDF</p>
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
