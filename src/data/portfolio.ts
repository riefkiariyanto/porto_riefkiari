type Link = { label: string; href: string };

type Commit = { hash: string; message: string; time: string };

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

type Job = {
  start: number;
  end?: number;
  role: string;
  org: string;
  achievement: string;
};

type SkillGroup = {
  group: "Backend" | "Frontend & Mobile" | "Otomasi & Ops";
  skills: { name: string; years: number }[];
};

export const site = {
  url: "https://riefkiariyanto.github.io",
  locale: "id_ID",
};

export const profile = {
  name: "Riefki Ariyanto",
  role: "Full-stack Developer",
  tagline:
    "Merancang aplikasi mobile dan web yang andal, dari antarmuka hingga basis data.",
  status: "Menerima proyek freelance",
  location: "Indonesia",
  email: "riefkiari@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/riefkiariyanto" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/riefkiariyanto" },
  ] satisfies Link[],
  about: [
    "Saya adalah full-stack developer yang menekuni pengembangan perangkat lunak sejak 2021. Kompetensi saya berawal dari aplikasi Android native, kemudian berkembang ke Flutter untuk platform mobile serta Laravel untuk aplikasi web dan layanan API.",
    "Saya memandang kode sebagai aset jangka panjang yang harus andal dan mudah dipelihara. Karena itu, arsitektur saya susun secara modular, keputusan teknis saya dokumentasikan, dan setiap solusi saya pilih berdasarkan kebutuhan nyata pengguna, bukan sekadar mengikuti tren teknologi.",
  ],
  commits: [
    { hash: "3624d1a", message: "update pin cetak struk buat pegawai", time: "11 hari lalu" },
    { hash: "50f0c69", message: "UI claymorphism, cetak struk bluetooth, dan dashboard admin", time: "12 hari lalu" },
    { hash: "a76e775", message: "integrasi backend ke api", time: "18 hari lalu" },
    { hash: "1ec2150", message: "add socialite", time: "1 tahun lalu" },
  ] satisfies Commit[],
};

export const projects: Project[] = [
  {
    title: "Sistem Kasir Salon Kuku",
    year: 2026,
    description:
      "Aplikasi point-of-sale berbasis Android untuk usaha nail art dengan pemisahan hak akses admin dan pegawai. Admin mengelola katalog, data pegawai, dan laporan penjualan per periode, sedangkan pegawai mencatat transaksi dan mencetak struk secara langsung.",
    stack: ["Flutter", "Dart", "Express", "PostgreSQL", "Railway"],
    repo: "https://github.com/riefkiariyanto/kasir_project2026",
    featured: true,
    metrics: [
      { value: "8", label: "modul REST API, meliputi autentikasi, produk, pesanan, dan laporan" },
      { value: "2", label: "metode pembayaran (QRIS dan tunai) dengan cetak struk Bluetooth" },
      { value: "4", label: "periode laporan: keseluruhan, harian, mingguan, dan bulanan" },
    ],
  },
  {
    title: "Laravel Multi-Auth Dashboard",
    year: 2025,
    description:
      "Aplikasi web berbasis peran dengan autentikasi berlapis: masuk melalui akun sosial, verifikasi email, serta panel super admin untuk mengatur metode masuk yang diizinkan.",
    stack: ["Laravel 11", "Inertia.js", "React", "Tailwind CSS", "Socialite"],
    repo: "https://github.com/riefkiariyanto/porto-laravel",
  },
  {
    title: "Petsecom",
    year: 2023,
    description:
      "Aplikasi e-commerce produk hewan peliharaan yang mengintegrasikan peta lokasi toko, didukung REST API Laravel untuk pengelolaan data pengguna, toko, dan produk.",
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
    start: 2026,
    role: "Full-stack Developer",
    org: "Freelance",
    achievement:
      "Mengembangkan sistem kasir secara end-to-end, mencakup aplikasi Flutter, REST API Express, dan basis data PostgreSQL, hingga tahap deployment di Railway.",
  },
  {
    start: 2025,
    end: 2025,
    role: "Web Developer",
    org: "Proyek pribadi",
    achievement:
      "Merancang dashboard multi-peran dengan Laravel 11, Inertia.js, dan React, dilengkapi autentikasi akun sosial dan verifikasi email.",
  },
  {
    start: 2023,
    end: 2023,
    role: "Mobile & Backend Developer",
    org: "Tugas akhir",
    achievement:
      "Membangun aplikasi mobile Petsecom beserta REST API Laravel sebagai layanan data pengguna, toko, dan produk.",
  },
  {
    start: 2021,
    end: 2021,
    role: "Android Developer",
    org: "Proyek pribadi",
    achievement: "Mengembangkan empat aplikasi Android native berbasis Java sebagai landasan pemahaman siklus hidup aplikasi mobile.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    group: "Backend",
    skills: [
      { name: "Laravel (PHP)", years: 3 },
      { name: "MySQL", years: 3 },
      { name: "Node.js + Express", years: 1 },
      { name: "PostgreSQL", years: 1 },
    ],
  },
  {
    group: "Frontend & Mobile",
    skills: [
      { name: "Flutter (Dart)", years: 3 },
      { name: "Android (Java)", years: 5 },
      { name: "Tailwind CSS", years: 3 },
      { name: "React", years: 1 },
    ],
  },
  {
    group: "Otomasi & Ops",
    skills: [
      { name: "Git & GitHub", years: 5 },
      { name: "REST API", years: 3 },
      { name: "Deployment (Railway)", years: 1 },
      { name: "Integrasi printer thermal", years: 1 },
    ],
  },
];

export const initials = profile.name
  .split(" ")
  .map((word) => word[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();
