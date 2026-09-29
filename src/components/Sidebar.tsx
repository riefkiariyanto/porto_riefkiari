import { ArrowUpRight } from "lucide-react";
import { initials, profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "#tentang", label: "Tentang" },
  { href: "#proyek", label: "Proyek" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#kontak", label: "Kontak" },
];

export default function Sidebar() {
  return (
    <header className="border-b border-line px-6 py-10 desk:sticky desk:top-0 desk:flex desk:h-dvh desk:flex-col desk:border-b-0 desk:border-r desk:px-10 desk:py-14">
      <div
        aria-hidden
        className="grid size-14 place-items-center rounded-2xl bg-accent font-display text-xl font-semibold text-bg"
      >
        {initials}
      </div>
      <p className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight">
        {profile.name}
      </p>
      <p className="mt-1 text-muted">{profile.role}</p>
      <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs">
        <span aria-hidden className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
        {profile.status}
      </p>

      <nav aria-label="Navigasi utama" className="mt-10">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 desk:flex-col desk:gap-1">
          {nav.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex items-baseline gap-3 py-1 text-muted transition-colors hover:text-fg"
              >
                <span aria-hidden className="hidden font-mono text-xs text-ochre desk:inline">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 desk:mt-auto">
        <ul className="flex gap-4 text-sm">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-muted transition-colors hover:text-accent"
              >
                {social.label}
                <ArrowUpRight aria-hidden className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </header>
  );
}
