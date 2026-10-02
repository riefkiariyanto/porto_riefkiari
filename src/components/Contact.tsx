import { Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import CopyEmail from "./CopyEmail";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section aria-labelledby="kontak" className="border-t border-line pt-16">
      <SectionHeader id="kontak" title="Mari diskusikan kebutuhan proyek Anda." />
      <p className="mb-6 max-w-xl text-lg text-muted">
        Silakan uraikan kebutuhan, lingkup, dan target waktu proyek Anda melalui email. Setiap pesan akan saya tanggapi dalam 1–2 hari kerja.
      </p>
      <CopyEmail email={profile.email} />
      <p className="mt-6 text-muted">
        Untuk rekrutmen, CV lengkap tersedia dalam format PDF.{" "}
        <a
          href={profile.cv}
          download
          className="inline-flex min-h-11 items-center gap-1.5 font-medium text-accent hover:underline"
        >
          <Download aria-hidden className="size-4" />
          Unduh CV
          <span className="sr-only"> (PDF)</span>
        </a>
      </p>
    </section>
  );
}
