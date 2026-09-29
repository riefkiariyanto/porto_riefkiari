export default function SectionHeader({
  id,
  eyebrow,
  title,
}: {
  id: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <header className="mb-8">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-ochre">{eyebrow}</p>
      <h2 id={id} className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </header>
  );
}
