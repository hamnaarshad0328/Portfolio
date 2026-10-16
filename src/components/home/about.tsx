import { aboutFacts, aboutParagraphs } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <SectionHeading id="about-heading" index="01 — About" title="About me" />
          <div className="space-y-4 text-base leading-7 text-ink/85">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <dl className="mt-12 grid gap-3 sm:grid-cols-3">
          {aboutFacts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-line bg-surface px-4 py-4">
              <dt className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
