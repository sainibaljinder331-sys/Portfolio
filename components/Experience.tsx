import { experience } from "../data/resume";
import { SectionTitle } from "./About";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle kicker="03 — Experience" title="Where I've been building" />

        <div className="mt-12 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-blue-500/30 to-transparent" />

          <div className="space-y-10">
            {experience.map((e, i) => (
              <div key={i} className="relative pl-14 md:pl-20">
                <div className="absolute left-0 md:left-2 top-1 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center glow-cyan">
                  <Briefcase size={16} className="text-cyan-300" />
                </div>

                <div className="glass glass-hover rounded-2xl p-6 md:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-50">{e.title}</h3>
                      <p className="mt-1 text-cyan-300 font-medium">{e.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1.5"><CalendarDays size={13} /> {e.period}</span>
                      {e.location && (
                        <span className="inline-flex items-center gap-1.5"><MapPin size={13} /> {e.location}</span>
                      )}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-slate-300 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
