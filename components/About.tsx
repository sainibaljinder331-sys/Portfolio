import { Rocket, Code2, Cpu, Target } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <Code2 size={20} />, label: "Tech Stack", value: "Flutter • Dart • Python" },
    { icon: <Cpu size={20} />, label: "Focus", value: "AI & Machine Learning" },
    { icon: <Target size={20} />, label: "SGPA", value: "9.0 / 10.0" },
    { icon: <Rocket size={20} />, label: "Status", value: "Open to work" },
  ];

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle kicker="01 — About" title="Building delightful mobile experiences" />

        <div className="grid md:grid-cols-5 gap-8 mt-10">
          <div className="md:col-span-3 glass rounded-2xl p-7">
            <p className="text-slate-300 leading-relaxed">
              I'm a <span className="text-cyan-300 font-medium">Flutter Developer</span> who loves turning
              ideas into smooth, pixel-perfect mobile apps. My work blends clean architecture, thoughtful
              UI/UX, and a pinch of data-science intuition — so the apps I build feel fast and look right
              on every screen.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Outside of Dart, I've been exploring machine learning (NumPy, Pandas, Scikit-learn), which
              shows up in side-projects like my realtime speech translator. I'm a lifelong learner, a
              careful code-reviewer, and a firm believer that great products come from empathy — for users
              and for the next engineer reading the code.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  {s.icon}
                </div>
                <p className="mt-3 text-xs uppercase tracking-wider text-slate-400">{s.label}</p>
                <p className="text-sm font-semibold text-slate-100 mt-1 leading-snug">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">{kicker}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-50">{title}</h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent" />
    </div>
  );
}
