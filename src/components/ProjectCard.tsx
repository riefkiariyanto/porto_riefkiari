import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

function Stack({ items }: { items: string[] }) {
  return (
    <ul aria-label="Tech stack" className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <li key={tech} className="rounded-md bg-accent-soft px-2 py-1 font-mono text-xs text-accent">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function Links({ project }: { project: Project }) {
  const links = [
    { label: "Demo", href: project.demo },
    { label: "Repo", href: project.repo },
  ].filter((link) => link.href);

  if (links.length === 0) return null;

  return (
    <div className="flex gap-5 text-sm font-medium">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-1 text-accent hover:underline"
        >
          {link.label}
          <span className="sr-only"> {project.title} (tab baru)</span>
          <ArrowUpRight aria-hidden className="size-4" />
        </a>
      ))}
    </div>
  );
}

// The featured project gets a full card with impact metrics; the rest are compact rows,
// so the page shows which project matters most instead of a grid of identical cards.
export default function ProjectCard({ project }: { project: Project }) {
  if (!project.featured) {
    return (
      <article className="grid gap-x-8 gap-y-3 py-7 md:grid-cols-[4rem_minmax(0,1fr)_auto]">
        <p className="font-mono text-xs text-muted md:pt-1.5">{project.year}</p>
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-2 max-w-2xl leading-relaxed text-muted">{project.description}</p>
          <div className="mt-4">
            <Stack items={project.stack} />
          </div>
        </div>
        <div className="md:-mt-2.5">
          <Links project={project} />
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-xl border border-line bg-surface p-6 transition-[translate,border-color] duration-200 hover:border-accent/40 motion-safe:hover:-translate-y-0.5 sm:p-8">
      <p className="flex items-baseline justify-between gap-4 font-mono text-xs">
        <span className="text-ochre">Proyek unggulan</span>
        <span className="text-muted">{project.year}</span>
      </p>
      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
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

      <div className="mt-5">
        <Stack items={project.stack} />
      </div>
      <div className="mt-4">
        <Links project={project} />
      </div>
    </article>
  );
}
