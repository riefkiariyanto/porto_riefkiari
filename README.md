# Portofolio Muhammad Riefki Ariyanto

Website portofolio pribadi: profil, proyek, rekam jejak, pendidikan, keahlian, dan kontak, dalam Bahasa Indonesia.

## Teknologi

- Next.js 16 (App Router) dan React 19
- TypeScript
- Tailwind CSS v4
- Font lewat `next/font`: Bricolage Grotesque, IBM Plex Sans, JetBrains Mono
- Ikon: lucide-react

## Menjalankan secara lokal

Butuh Node.js 20 atau lebih baru.

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

Perintah lain:

```bash
npm run lint    # ESLint
npm run build   # build produksi
npm run start   # jalankan hasil build
```

## Mengubah konten

Semua konten ada di [`src/data/portfolio.ts`](src/data/portfolio.ts); komponen hanya membaca data dari sana.

- **Proyek baru:** tambahkan objek ke `projects`. Isi `demo` dan/atau `repo` bila ada. Tandai satu proyek dengan `featured: true` beserta 3 `metrics` untuk menampilkannya sebagai kartu unggulan.
- **Pengalaman:** tambahkan ke `experience` dengan `start`/`end` berformat `"YYYY-MM"`; hapus `end` bila masih berjalan.
- **Commit di blok git log:** isi `hash`, `repo`, `message`, dan `date` (waktu commit dalam format ISO). Waktu relatif ("3 hari yang lalu") dihitung otomatis di browser.
- **CV:** ganti file [`public/Muhammad_Riefki_Ariyanto_CV.pdf`](public) dengan nama yang sama.
- **Foto:** `src/data/avatar.webp` adalah potongan 2:3 berukuran 240×360 dari `profilePicture.jpg`.

## Deploy ke Vercel

1. Di [vercel.com/new](https://vercel.com/new), impor repo ini. Framework Next.js terdeteksi otomatis; tidak perlu mengubah pengaturan build.
2. URL produksi untuk metadata, sitemap, dan Open Graph diambil otomatis dari `VERCEL_PROJECT_PRODUCTION_URL`.
3. Bila memakai domain sendiri, tambahkan environment variable `NEXT_PUBLIC_SITE_URL` (contoh: `https://namadomain.com`) lalu deploy ulang.

Setiap push ke branch `main` akan dideploy ulang otomatis oleh Vercel.
