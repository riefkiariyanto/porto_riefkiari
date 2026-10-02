import { ArrowUpRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import { profile, sectionNumber, sections } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  return (
    <header className="border-b border-line px-6 py-10 desk:sticky desk:top-0 desk:flex desk:h-dvh desk:flex-col desk:overflow-y-auto desk:border-b-0 desk:border-r desk:px-8">
      <div className="flex items-center gap-4">
        <Image
          src={profile.photo}
          alt={`Foto ${profile.name}`}
          width={96}
          height={144}
          loading="eager"
          className="h-36 w-24 shrink-0 rounded-lg object-cover"
        />
        <div className="min-w-0">
          <p className="font-display text-2xl font-semibold leading-tight tracking-tight">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
          <p className="mt-2 flex items-center gap-1 text-sm text-muted">
            <MapPin aria-hidden className="size-3.5 shrink-0" />
            {profile.location}
          </p>
        </div>
      </div>
      <p className="mt-5 flex items-center gap-2 text-sm">
        <span aria-hidden className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
        {profile.status}
      </p>

      <nav aria-label="Navigasi utama" className="mt-8">
        <ul className="flex flex-wrap gap-x-5 desk:flex-col">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="inline-flex min-h-11 items-center gap-3 text-muted transition-colors hover:text-fg"
              >
                <span aria-hidden className="font-mono text-xs text-ochre">
                  {sectionNumber(section.id)}
                </span>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 desk:mt-auto">
        <ul className="flex flex-wrap gap-x-4 text-sm">
          <li>
            <a
              href={profile.cv}
              download
              className="inline-flex min-h-11 items-center gap-1 font-medium text-accent hover:underline"
            >
              <Download aria-hidden className="size-3.5" />
              Unduh CV
              <span className="sr-only"> (PDF)</span>
            </a>
          </li>
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-muted transition-colors hover:text-accent"
              >
                {social.label}
                <ArrowUpRight aria-hidden className="size-3.5" />
                <span className="sr-only"> (tab baru)</span>
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </header>
  );
}
