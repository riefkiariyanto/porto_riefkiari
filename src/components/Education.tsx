import { certifications, education } from "@/data/portfolio";
import { formatPeriod } from "./period";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section aria-labelledby="pendidikan">
      <SectionHeader id="pendidikan" title={education.school} />
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[minmax(0,1fr)_14rem]">
        <div>
          <p className="font-mono text-xs text-ochre">{formatPeriod(education.start, education.end)}</p>
          <p className="mt-1 text-lg font-semibold">{education.degree}</p>
          <p className="mt-1 text-muted">IPK {education.gpa}</p>
          <p className="mt-4 max-w-2xl text-muted">
            Tugas akhir:{" "}
            <a
              href={education.thesis.href}
              target="_blank"
              rel="noreferrer"
              className="text-fg underline decoration-line underline-offset-4 hover:decoration-accent"
            >
              {education.thesis.title}
              <span className="sr-only"> (kode sumber di GitHub, tab baru)</span>
            </a>
          </p>
        </div>
        <div className="border-t border-line pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <h3 className="text-sm text-muted">Sertifikasi</h3>
          <ul className="mt-2 space-y-1">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex items-baseline justify-between gap-3">
                <span className="font-medium">{cert.name}</span>
                <span className="font-mono text-xs text-muted">{cert.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
