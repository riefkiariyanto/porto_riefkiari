import { profile } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section aria-labelledby="tentang">
      <SectionHeader id="tentang" eyebrow="Tentang" title={profile.tagline} />
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <figure className="mt-10 overflow-hidden rounded-xl border border-line bg-surface">
        <figcaption className="flex items-center gap-2 border-b border-line px-4 py-2.5 font-mono text-xs text-muted">
          <span aria-hidden className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-line" />
          </span>
          <span className="ml-2">
            <span className="text-accent">$</span> git log --oneline
          </span>
        </figcaption>
        <ol className="space-y-2 overflow-x-auto p-4 font-mono text-sm">
          {profile.commits.map((commit) => (
            <li key={commit.hash} className="flex gap-3 whitespace-nowrap">
              <span className="text-ochre">{commit.hash}</span>
              <span>{commit.message}</span>
              <span className="text-muted">({commit.time})</span>
            </li>
          ))}
        </ol>
      </figure>
    </section>
  );
}
