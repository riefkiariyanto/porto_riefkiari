import { sectionNumber, sections, type SectionId } from "@/data/portfolio";

export default function SectionHeader({
  id,
  title,
  lead = false,
}: {
  id: SectionId;
  title: string;
  lead?: boolean;
}) {
  const label = sections.find((section) => section.id === id)?.label;

  return (
    <header className={lead ? "mb-10" : "mb-8"}>
      <p className="flex items-baseline gap-3 text-sm text-muted">
        <span className="font-mono text-xs text-ochre">{sectionNumber(id)}</span>
        {label}
      </p>
      <h2
        id={id}
        className={`mt-3 font-display font-semibold tracking-tight text-balance ${
          lead ? "text-4xl leading-[1.08] sm:text-5xl" : "text-2xl sm:text-3xl"
        }`}
      >
        {title}
      </h2>
    </header>
  );
}
