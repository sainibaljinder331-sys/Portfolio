import { education, certifications, achievements, languages } from "../data/resume";
import { SectionTitle } from "./About";
import { GraduationCap, Award, Trophy, Languages as LangIcon, BookOpen } from "lucide-react";

export default function EducationEtc() {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle kicker="05 — Background" title="Education, certs & wins" />

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {/* Education */}
          <div className="lg:col-span-2 glass rounded-2xl p-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-100">Education</h3>
            </div>

            <div className="mt-5 space-y-6">
              {education.map((e, i) => (
                <div key={i} className="border-l-2 border-cyan-400/40 pl-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-slate-50">{e.degree}</h4>
                      <p className="text-sm text-cyan-300">{e.focus}</p>
                      <p className="text-sm text-slate-400 mt-1">{e.school}</p>
                    </div>
                    <div className="text-right text-xs text-slate-400">
                      <p>{e.period}</p>
                      <p className="mt-1 text-cyan-300 font-semibold">{e.score}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.coursework.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                      >
                        <BookOpen size={11} /> {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass rounded-2xl p-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-400/20 to-fuchsia-500/20 border border-violet-400/30 flex items-center justify-center text-violet-300">
                <Award size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-100">Certifications</h3>
            </div>

            <ul className="mt-5 space-y-4">
              {certifications.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-8 h-8 rounded-lg bg-violet-400/10 border border-violet-400/30 flex items-center justify-center text-violet-300 shrink-0 text-xs font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">{c.title}</p>
                    <p className="text-xs text-slate-400">{c.issuer} · {c.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-2 glass rounded-2xl p-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
                <Trophy size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-100">Achievements</h3>
            </div>

            <ul className="mt-5 grid sm:grid-cols-1 gap-3">
              {achievements.map((a, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-colors"
                >
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-300 text-xs">
                    ★
                  </span>
                  <span className="text-sm text-slate-200">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="glass rounded-2xl p-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                <LangIcon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-100">Languages</h3>
            </div>

            <ul className="mt-5 space-y-4">
              {languages.map((l, i) => (
                <li key={i}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-100">{l.name}</span>
                    <span className="text-xs text-slate-400">{l.level.split("/")[0].trim()}</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                      style={{ width: l.level.toLowerCase().includes("native") ? "100%" : "90%" }}
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-slate-400">{l.level}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
