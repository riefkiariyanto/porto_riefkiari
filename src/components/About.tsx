import { profile } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

const absoluteDate = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Jakarta",
});

// The page is static, so relative times computed at build would go stale. This replaces the
// server-rendered absolute date with "x hari lalu" before first paint (see Next's
// "preventing flash before hydration" guide).
const relativeTimeScript = `(function(){var f=new Intl.RelativeTimeFormat("id",{numeric:"always"}),u=[["year",31536e6],["month",2592e6],["day",864e5],["hour",36e5],["minute",6e4]];document.querySelectorAll("time[data-relative]").forEach(function(t){var d=new Date(t.dateTime)-Date.now();for(var i=0;i<u.length;i++){if(Math.abs(d)>=u[i][1]||i===u.length-1){t.textContent=f.format(Math.trunc(d/u[i][1]),u[i][0]);break}}})})()`;

export default function About() {
  const commits = [...profile.commits].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section aria-labelledby="tentang">
      <SectionHeader id="tentang" title={profile.tagline} lead />
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
        <ol className="divide-y divide-line font-mono text-sm">
          {commits.map((commit) => (
            <li key={commit.hash}>
              <a
                href={`${profile.github}/${commit.repo}/commit/${commit.hash}`}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 px-4 py-3 transition-colors hover:bg-accent-soft"
              >
                <span className="text-ochre group-hover:underline">{commit.hash}</span>
                <span>
                  <span className="block wrap-break-word">{commit.message}</span>
                  <span className="mt-1 block text-xs text-muted">
                    {commit.repo} ·{" "}
                    <time dateTime={commit.date} data-relative suppressHydrationWarning>
                      {absoluteDate.format(new Date(commit.date))}
                    </time>
                  </span>
                </span>
                <span className="sr-only"> (buka commit di GitHub, tab baru)</span>
              </a>
            </li>
          ))}
        </ol>
        <script dangerouslySetInnerHTML={{ __html: relativeTimeScript }} />
      </figure>
    </section>
  );
}
