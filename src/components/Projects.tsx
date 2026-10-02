import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const byYear = [...projects].sort((a, b) => b.year - a.year);
  const featured = byYear.filter((project) => project.featured);
  const rest = byYear.filter((project) => !project.featured);

  return (
    <section aria-labelledby="proyek">
      <SectionHeader id="proyek" title="Karya terpilih" />
      <div className="space-y-5">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="mt-4 divide-y divide-line">
        {rest.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
