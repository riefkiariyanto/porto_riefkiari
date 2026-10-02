import { experience } from "@/data/portfolio";
import { formatPeriod } from "./period";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  const ordered = [...experience].sort((a, b) => b.start.localeCompare(a.start));

  return (
    <section aria-labelledby="pengalaman">
      <SectionHeader id="pengalaman" title="Rekam jejak" />
      <ol className="border-l border-line">
        {ordered.map((job) => (
          <li key={`${job.start}-${job.org}`} className="relative pb-10 pl-6 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-1.25 top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-bg"
            />
            <p className="font-mono text-xs text-ochre">{formatPeriod(job.start, job.end)}</p>
            <h3 className="mt-1 text-lg font-semibold">
              {job.role} <span className="font-normal text-muted">· {job.org}</span>
            </h3>
            <ul className="mt-2 max-w-2xl list-disc space-y-1.5 pl-5 text-muted marker:text-line">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
