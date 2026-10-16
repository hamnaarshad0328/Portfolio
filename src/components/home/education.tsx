import { site } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <Section id="education" labelledBy="education-heading">
      <Reveal>
        <SectionHeading id="education-heading" index="04 — Education" title="Education" />
        <article className="mt-10 rounded-2xl border border-line bg-surface p-5 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">{site.degree}</h3>
              <p className="mt-2 text-base text-ink/85">{site.university}</p>
            </div>
            <p className="font-display text-sm font-semibold tracking-wide text-accent">
              {site.studyPeriod}
              <span className="ml-2 font-sans font-medium text-muted">{site.graduationNote}</span>
            </p>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
