import { profile } from "@/data/portfolio";
import CopyEmail from "./CopyEmail";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section aria-labelledby="kontak">
      <SectionHeader id="kontak" eyebrow="Kontak" title="Mari diskusikan kebutuhan proyek Anda." />
      <p className="mb-6 max-w-xl text-lg text-muted">
        Silakan uraikan kebutuhan, lingkup, dan target waktu proyek Anda melalui email. Setiap pesan akan saya tanggapi dalam 1–2 hari kerja.
      </p>
      <CopyEmail email={profile.email} />
    </section>
  );
}
