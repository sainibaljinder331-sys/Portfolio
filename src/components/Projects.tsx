import { projects } from "../data/resume";
import { SectionTitle } from "./About";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle kicker="04 — Projects" title="Things I've shipped" />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="glass glass-hover rounded-2xl p-7 flex flex-col relative overflow-hidden"
            >
              {/* Accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.accent}`} />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-50">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{p.tagline}</p>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/60 hover:text-cyan-300 flex items-center justify-center text-slate-300 transition-colors shrink-0"
                  aria-label="Open project"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <p className="mt-4 text-slate-300 leading-relaxed">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-cyan-400/10 text-cyan-200 border border-cyan-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-xs text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-center"
                  >
                    ✓ {h}
                  </li>
                ))}
              </ul>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 group"
              >
                {p.linkLabel.includes("GitHub") ? <GithubIcon size={16} /> : <ExternalLink size={16} />}
                {p.linkLabel}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://drive.google.com/drive/folders/1qWWU6oS52xwqhK79i47bNYBjG7BXDAXz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-300 underline-offset-4 hover:underline"
          >
            See the full project portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}
