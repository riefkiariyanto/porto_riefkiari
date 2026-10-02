// 2:3 crop of profilePicture.jpg resized to 240x360 WebP for the sidebar photo (shown at 96x144).
// If you replace the photo, re-crop it to 2:3 at that size and save it over avatar.webp.
import avatar from "./avatar.webp";

type Link = { label: string; href: string };

// `date` is the commit's ISO timestamp; the page shows it as relative time ("11 hari lalu") in the browser.
type Commit = { hash: string; repo: string; message: string; date: string };

type Metric = { value: string; label: string };

export type Project = {
  title: string;
  year: number;
  description: string;
  stack: string[];
  demo?: string;
  repo?: string;
  featured?: boolean;
  metrics?: Metric[];
};

// Months as "YYYY-MM"; leave out `end` for ongoing work.
type YearMonth = `${number}-${string}`;

type Job = {
  start: YearMonth;
  end?: YearMonth;
  role: string;
  org: string;
  points: string[];
};

type Education = {
  start: YearMonth;
  end: YearMonth;
  school: string;
  degree: string;
  gpa: string;
  thesis: { title: string; href: string };
};

// `since` is the first year the skill shows up in a project (GitHub or CV).
type SkillGroup = {
  group: "Backend" | "Frontend & Mobile" | "Alat & Deployment";
  skills: { name: string; since: number }[];
};

// Page sections in order. Their numbers (01, 02, ...) label both the sidebar nav and the section headings.
export const sections = [
  { id: "tentang", label: "Tentang" },
  { id: "proyek", label: "Proyek" },
  { id: "pengalaman", label: "Pengalaman" },
  { id: "pendidikan", label: "Pendidikan" },
  { id: "keahlian", label: "Keahlian" },
  { id: "kontak", label: "Kontak" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export function sectionNumber(id: SectionId) {
  return String(sections.findIndex((section) => section.id === id) + 1).padStart(2, "0");
}

// On Vercel the production domain comes from VERCEL_PROJECT_PRODUCTION_URL (set automatically at
// build time). Set NEXT_PUBLIC_SITE_URL to override it, e.g. after adding a custom domain.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"),
  locale: "id_ID",
};

const github = "https://github.com/riefkiariyanto";

export const profile = {
  name: "Muhammad Riefki Ariyanto",
  photo: avatar,
  role: "Full-stack Developer",
  tagline:
    "Merancang aplikasi mobile dan web yang andal, dari antarmuka hingga basis data.",
  status: "Menerima proyek freelance",
  location: "Sampang, Jawa Timur",
  email: "riefkiari@gmail.com",
  // Served from public/; replace that file to update the CV.
  cv: "/Muhammad_Riefki_Ariyanto_CV.pdf",
  github,
  socials: [
    { label: "GitHub", href: github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/riefkiari" },
  ] satisfies Link[],
  about: [
    "Saya adalah full-stack developer yang menekuni pengembangan perangkat lunak sejak 2021. Kompetensi saya berawal dari aplikasi Android native, kemudian berkembang ke Flutter untuk platform mobile serta Laravel untuk aplikasi web dan layanan API.",
    "Saya memandang kode sebagai aset jangka panjang yang harus mudah dipelihara. Karena itu, arsitektur saya susun secara modular, keputusan teknis saya dokumentasikan, dan setiap solusi saya pilih berdasarkan kebutuhan nyata pengguna, bukan sekadar mengikuti tren teknologi.",
  ],
  commits: [
    {
      hash: "3624d1a",
      repo: "kasir_project2026",
      message: "update pin cetak struk buat pegawai",
      date: "2026-09-18T03:05:44Z",
    },
    {
      hash: "50f0c69",
      repo: "kasir_project2026",
      message: "UI claymorphism Nails by Ara, cetak struk bluetooth, dan dashboard admin",
      date: "2026-09-17T05:51:57Z",
    },
    {
      hash: "a76e775",
      repo: "kasir_project2026",
      message: "integrasi backend ke api",
      date: "2026-09-11T18:16:28Z",
    },
    {
      hash: "1ec2150",
      repo: "porto-laravel",
      message: "add socialite",
      date: "2025-04-26T06:39:14Z",
    },
  ] satisfies Commit[],
};

export const projects: Project[] = [
  {
    title: "Sistem Kasir",
    year: 2026,
    description:
      "Aplikasi point-of-sale berbasis Android untuk usaha nail art dengan pemisahan hak akses admin dan pegawai. Admin mengelola katalog, data pegawai, dan laporan penjualan per periode, sedangkan pegawai mencatat transaksi dan mencetak struk secara langsung.",
    stack: ["Flutter", "Dart", "Express", "PostgreSQL", "Railway"],
    repo: "https://github.com/riefkiariyanto/kasir_project2026",
    featured: true,
    metrics: [
      { value: "8", label: "modul REST API, antara lain autentikasi, produk, pesanan, dan laporan" },
      { value: "2", label: "metode pembayaran (QRIS dan tunai) dengan cetak struk Bluetooth" },
      { value: "4", label: "periode laporan: keseluruhan, harian, mingguan, dan bulanan" },
    ],
  },
  {
    title: "Landing Page Secreat Digital Studio",
    year: 2026,
    description:
      "Landing page perusahaan dengan halaman Tentang, Layanan, Karya, dan Kontak. Bagian hero berupa slider gambar silinder 3D dengan Three.js, dilengkapi animasi gulir dan transisi halaman dengan GSAP serta smooth scroll Lenis.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "GSAP", "Lenis"],
    // The repo is private, so only the live site is linked.
    demo: "https://porto-recomp.vercel.app",
  },
  {
    title: "Laravel Multi-Auth Dashboard",
    year: 2025,
    description:
      "Aplikasi web berbasis peran dengan beberapa metode masuk (akun sosial dan email terverifikasi), serta panel super admin untuk mengatur metode masuk yang diizinkan.",
    stack: ["Laravel 11", "Inertia.js", "React", "Tailwind CSS", "Socialite"],
    repo: "https://github.com/riefkiariyanto/porto-laravel",
  },
  {
    title: "Petsecom",
    year: 2023,
    description:
      "Tugas akhir D4: aplikasi e-commerce produk hewan peliharaan yang mengintegrasikan peta lokasi toko, didukung REST API Laravel untuk pengelolaan data pengguna, toko, dan produk.",
    stack: ["Flutter", "GetX", "Google Maps", "Laravel", "MySQL"],
    repo: "https://github.com/riefkiariyanto/petsecom",
  },
  {
    title: "Kumpulan Aplikasi Android",
    year: 2021,
    description:
      "Empat aplikasi Android native yang menjadi fondasi awal saya, antara lain katalog wisata satwa, jadwal pertandingan sepak bola, dan permainan tebak warna.",
    stack: ["Java", "Android SDK", "Gradle"],
    repo: "https://github.com/riefkiariyanto?tab=repositories&language=java",
  },
];

export const experience: Job[] = [
  {
    start: "2025-07",
    role: "Full-stack Programmer Web & Mobile",
    org: "Pekerja lepas (freelance)",
    points: [
      "Mengembangkan aplikasi ERP berbasis web dengan Laravel untuk mendigitalkan operasional bisnis klien, terdiri dari tiga modul: kasir (POS), arus kas (pemasukan dan pengeluaran), dan manajemen stok.",
      "Membangun aplikasi POS Android dengan hak akses terpisah untuk admin dan pegawai, laporan penjualan per periode, dan cetak struk langsung.",
      "Merancang dashboard multi-peran dengan Laravel 11, Inertia.js, dan React, dilengkapi autentikasi akun dan verifikasi email.",
    ],
  },
  {
    start: "2022-09",
    end: "2022-12",
    role: "Programmer Intern",
    org: "The Mastej Studio",
    points: [
      "Mengerjakan tugas pengembangan sistem dan perancangan situs web sesuai panduan teknis.",
      "Menguji sistem dengan metode black box testing untuk memastikan aplikasi berjalan sesuai fungsinya.",
      "Menyusun laporan progres harian dan mingguan.",
    ],
  },
  {
    start: "2022-08",
    end: "2022-09",
    role: "Programmer Trainee",
    org: "Talent Scouting Academy",
    points: [
      "Mengembangkan aplikasi mobile dengan Flutter, mulai dari desain antarmuka yang berpusat pada pengguna.",
      "Menyusun dokumen proyek: Project Charter dan Functional Specification Document (FSD).",
      "Meraih sertifikasi BNSP Mobile Programmer.",
    ],
  },
];

export const education: Education = {
  start: "2019-08",
  end: "2024-01",
  school: "Politeknik Negeri Malang",
  degree: "Sarjana Terapan (D4) Teknologi Informasi",
  gpa: "3,26 / 4,00",
  thesis: {
    title: "Rancang Bangun Sistem E-Marketplace Petshop Berbasis Android",
    href: "https://github.com/riefkiariyanto/petsecom",
  },
};

export const certifications = [{ name: "BNSP Mobile Programmer", year: 2022 }];

export const skillGroups: SkillGroup[] = [
  {
    group: "Backend",
    skills: [
      { name: "Laravel (PHP)", since: 2023 },
      { name: "MySQL", since: 2023 },
      { name: "REST API", since: 2023 },
      { name: "Node.js + Express", since: 2026 },
      { name: "PostgreSQL", since: 2026 },
    ],
  },
  {
    group: "Frontend & Mobile",
    skills: [
      { name: "Android (Java)", since: 2021 },
      { name: "Flutter (Dart)", since: 2022 },
      { name: "Tailwind CSS", since: 2023 },
      { name: "React", since: 2025 },
      { name: "Next.js", since: 2026 },
    ],
  },
  {
    group: "Alat & Deployment",
    skills: [
      { name: "Git & GitHub", since: 2021 },
      { name: "Vercel", since: 2026 },
      { name: "Railway", since: 2026 },
      { name: "Printer termal Bluetooth", since: 2026 },
    ],
  },
];

export const initials = profile.name
  .split(" ")
  .map((word) => word[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();
