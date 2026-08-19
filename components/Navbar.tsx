import { useEffect, useState } from "react";
import { personal } from "../data/resume";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`nav-pill w-full max-w-5xl rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all ${
          scrolled ? "shadow-xl shadow-black/40" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 font-bold flex items-center justify-center group-hover:scale-105 transition-transform">
            {personal.initials}
          </span>
          <span className="hidden sm:inline text-sm font-semibold tracking-wide text-slate-100">
            {personal.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${personal.email}`}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow"
        >
          Hire me
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-200"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="absolute top-full mt-2 w-[calc(100%-2rem)] max-w-5xl md:hidden nav-pill rounded-2xl p-4 shadow-2xl shadow-black/60">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 hover:text-cyan-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${personal.email}`}
                onClick={() => setOpen(false)}
                className="block mt-2 text-center px-3 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
