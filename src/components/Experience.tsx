import { experience } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  const ordered = [...experience].sort((a, b) => b.start - a.start);

  return (
    <section aria-labelledby="pengalaman">
      <SectionHeader id="pengalaman" eyebrow="Pengalaman" title="Rekam jejak" />
      <ol className="border-l border-line">
        {ordered.map((job) => (
          <li key={`${job.start}-${job.org}`} className="relative pb-10 pl-6 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-bg"
            />
            <p className="font-mono text-xs text-ochre">
              {job.end === job.start ? job.start : `${job.start} — ${job.end ?? "Sekarang"}`}
            </p>
            <h3 className="mt-1 text-lg font-semibold">
              {job.role} <span className="font-normal text-muted">· {job.org}</span>
            </h3>
            <p className="mt-1 max-w-2xl text-muted">{job.achievement}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
