import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const ordered = [...projects].sort(
    (a, b) => Number(!!b.featured) - Number(!!a.featured) || b.year - a.year,
  );

  return (
    <section aria-labelledby="proyek">
      <SectionHeader id="proyek" eyebrow="Proyek" title="Karya terpilih" />
      <div className="grid gap-5 sm:grid-cols-2">
        {ordered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
