import { skillGroups } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading">
      <Reveal>
        <SectionHeading
          id="skills-heading"
          index="03 — Skills"
          title="Technical skills"
          lede="The tools I have actually used on projects, grouped by the kind of work."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{group.title}</h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-6 text-ink/90">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
