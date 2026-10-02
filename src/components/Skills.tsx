import { skillGroups } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section aria-labelledby="keahlian">
      <SectionHeader id="keahlian" title="Kompetensi teknis" />
      <div className="divide-y divide-line border-y border-line">
        {skillGroups.map(({ group, skills }) => (
          <div key={group} className="grid gap-3 py-6 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-8">
            <h3 className="font-display text-lg font-semibold">{group}</h3>
            <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {skills.map((skill) => (
                <li key={skill.name} className="flex items-baseline justify-between gap-3">
                  <span>{skill.name}</span>
                  <span className="shrink-0 font-mono text-xs text-muted">sejak {skill.since}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
