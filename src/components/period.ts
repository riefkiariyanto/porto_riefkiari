const monthYear = new Intl.DateTimeFormat("id-ID", { month: "short", year: "numeric", timeZone: "UTC" });
const monthOnly = new Intl.DateTimeFormat("id-ID", { month: "short", timeZone: "UTC" });

// Formats "YYYY-MM" ranges as "Sep 2026 – sekarang", "Apr – Mei 2025", or "Des 2021".
export function formatPeriod(start: string, end?: string) {
  const startDate = new Date(`${start}-01T00:00:00Z`);
  if (!end) return `${monthYear.format(startDate)} – sekarang`;
  if (end === start) return monthYear.format(startDate);

  const endDate = new Date(`${end}-01T00:00:00Z`);
  const sameYear = start.slice(0, 4) === end.slice(0, 4);
  return `${(sameYear ? monthOnly : monthYear).format(startDate)} – ${monthYear.format(endDate)}`;
}
