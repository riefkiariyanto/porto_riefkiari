import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-6 py-16">
      <p className="font-mono text-xs text-ochre">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 text-muted">Alamat yang Anda buka tidak ada atau sudah dipindahkan.</p>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-11 w-fit items-center rounded-lg bg-accent px-4 text-sm font-medium text-bg transition-opacity hover:opacity-90"
      >
        Kembali ke beranda
      </Link>
    </main>
  );
}
