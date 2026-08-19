import { skills } from "../data/resume";
import { SectionTitle } from "./About";
import { Smartphone, Layout, Server, Brain, Wrench } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone size={20} />,
  layout: <Layout size={20} />,
  server: <Server size={20} />,
  brain: <Brain size={20} />,
  wrench: <Wrench size={20} />,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle kicker="02 — Skills" title="Toolkit I reach for every day" />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-colors" />

              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  {iconMap[s.icon]}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-100">{s.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
