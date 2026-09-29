import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import Skills from "@/components/Skills";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl desk:grid desk:grid-cols-[320px_minmax(0,1fr)]">
      <Sidebar />
      <main className="space-y-24 px-6 py-16 sm:px-10 desk:px-14 desk:py-14">
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <footer className="border-t border-line pt-6 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </div>
  );
}
