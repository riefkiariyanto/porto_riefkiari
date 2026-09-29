import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  const links = [
    { label: "Demo", href: project.demo },
    { label: "Repo", href: project.repo },
  ].filter((link) => link.href);

  return (
    <article
      className={`flex flex-col rounded-xl border border-line bg-surface p-6 transition-[translate,border-color] duration-200 hover:border-accent/40 motion-safe:hover:-translate-y-0.5 ${
        project.featured ? "sm:col-span-2 sm:p-8" : ""
      }`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ochre">
          {project.featured ? "Proyek unggulan" : "Proyek"}
        </p>
        <p className="font-mono text-xs text-muted">{project.year}</p>
      </div>
      <h3
        className={`mt-3 font-display font-semibold tracking-tight ${
          project.featured ? "text-2xl sm:text-3xl" : "text-xl"
        }`}
      >
        {project.title}
      </h3>
      <p className="mt-2 max-w-2xl leading-relaxed text-muted">{project.description}</p>

      {project.metrics && (
        <dl className="mt-6 grid gap-4 border-y border-line py-5 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-1 text-sm text-muted">{metric.label}</dt>
              <dd className="font-display text-3xl font-semibold text-accent">{metric.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <ul aria-label="Tech stack" className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-md bg-accent-soft px-2 py-1 font-mono text-xs text-accent">
            {tech}
          </li>
        ))}
      </ul>

      {links.length > 0 && (
        <div className="mt-auto flex gap-5 pt-6 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline"
            >
              {link.label}
              <span className="sr-only"> {project.title}</span>
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
