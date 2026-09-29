import { skillGroups } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section aria-labelledby="keahlian">
      <SectionHeader id="keahlian" eyebrow="Keahlian" title="Kompetensi teknis" />
      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map(({ group, skills }) => (
          <div key={group} className="rounded-xl border border-line bg-surface p-5">
            <h3 className="font-display text-lg font-semibold">{group}</h3>
            <ul className="mt-4 divide-y divide-line">
              {skills.map((skill) => (
                <li key={skill.name} className="flex items-baseline justify-between gap-3 py-2">
                  <span>{skill.name}</span>
                  <span className="shrink-0 font-mono text-xs text-muted">{skill.years} th</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
