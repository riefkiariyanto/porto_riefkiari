"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type Theme = "light" | "dark" | "system";

const options = [
  { value: "light", label: "Terang", Icon: Sun },
  { value: "dark", label: "Gelap", Icon: Moon },
  { value: "system", label: "Ikuti sistem", Icon: Monitor },
] as const;

const darkQuery = "(prefers-color-scheme: dark)";
const listeners = new Set<() => void>();

function readTheme(): Theme {
  try {
    const stored = localStorage.getItem("theme");
    return stored === "light" || stored === "dark" ? stored : "system";
  } catch {
    return "system";
  }
}

function applyTheme(theme: Theme) {
  const dark = theme === "dark" || (theme === "system" && matchMedia(darkQuery).matches);
  document.documentElement.classList.toggle("dark", dark);
}

function setTheme(theme: Theme) {
  try {
    if (theme === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  } catch {}
  applyTheme(theme);
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "system" as Theme);

  useEffect(() => {
    if (theme !== "system") return;
    const media = matchMedia(darkQuery);
    const onChange = () => applyTheme("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  return (
    <div
      role="radiogroup"
      aria-label="Tema tampilan"
      className="inline-flex rounded-full border border-line bg-surface p-1"
    >
      {options.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={theme === value}
          aria-label={label}
          title={label}
          onClick={() => setTheme(value)}
          className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:text-fg aria-checked:bg-accent-soft aria-checked:text-accent"
        >
          <Icon aria-hidden className="size-4" />
        </button>
      ))}
    </div>
  );
}
