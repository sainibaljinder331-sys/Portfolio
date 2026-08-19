import { personal, summary } from "../data/resume";
import { Mail, MapPin, Phone, ArrowDown, Download, Sparkles } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[480px] h-[480px] bg-cyan-500/25 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-20 w-[420px] h-[420px] bg-blue-500/25 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-[380px] h-[380px] bg-violet-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl w-full grid md:grid-cols-[auto_1fr] gap-10 items-center">
        {/* Avatar */}
        <div className="relative mx-auto md:mx-0">
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl shimmer-border overflow-hidden">
            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 flex items-center justify-center text-slate-950 text-7xl sm:text-8xl font-black">
              {personal.initials}
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center pulse-ring">
            <Sparkles className="text-cyan-300" size={22} />
          </div>
        </div>

        {/* Copy */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-cyan-300 mb-5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for freelance & full-time opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient">{personal.name}</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 font-medium">
            {personal.role} · <span className="text-cyan-300">{personal.subtitle}</span>
          </p>
          <p className="mt-5 text-slate-400 max-w-2xl leading-relaxed">
            {summary}
          </p>

          <div className="mt-7 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-shadow"
            >
              <Mail size={18} /> Get in touch
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass glass-hover text-slate-100 font-semibold"
            >
              <GithubIcon size={18} /> GitHub
            </a>
            {/* <a
              href={personal.portfolio}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass glass-hover text-slate-100 font-semibold"
            >
              <Download size={18} /> Portfolio
            </a> */}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400 justify-center md:justify-start">
            <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-cyan-400" /> {personal.location}</span>
            <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-2 hover:text-cyan-300"><Mail size={16} className="text-cyan-400" /> {personal.email}</a>
            <a href={`tel:${personal.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-cyan-300"><Phone size={16} className="text-cyan-400" /> {personal.phone}</a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-cyan-300 transition-colors"
        aria-label="Scroll"
      >
        <ArrowDown className="animate-bounce" size={24} />
      </a>
    </section>
  );
}
