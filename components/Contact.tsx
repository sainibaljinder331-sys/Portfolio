import { personal } from "../data/resume";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 glass">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl" />

          <div className="relative text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">
              06 — Contact
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-50">
              Let's build something <span className="text-gradient">together</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Have a product idea, a role that needs a Flutter dev, or just want to chat about mobile
              & ML? My inbox is always open.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-shadow"
              >
                <Send size={18} /> Email me
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-slate-100 font-semibold"
              >
                <GithubIcon size={18} /> GitHub
              </a>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-3 text-left">
              <a
                href={`mailto:${personal.email}`}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors"
              >
                <Mail className="text-cyan-300" size={20} />
                <p className="mt-2 text-xs text-slate-400">Email</p>
                <p className="text-sm text-slate-100 break-all group-hover:text-cyan-200">
                  {personal.email}
                </p>
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s/g, "")}`}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors"
              >
                <Phone className="text-cyan-300" size={20} />
                <p className="mt-2 text-xs text-slate-400">Phone</p>
                <p className="text-sm text-slate-100 group-hover:text-cyan-200">{personal.phone}</p>
              </a>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="text-cyan-300" size={20} />
                <p className="mt-2 text-xs text-slate-400">Location</p>
                <p className="text-sm text-slate-100">{personal.location}</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {personal.name}. Flutter Developer |Email: {personal.email} | Phone: {personal.phone} .
          </p>
        </footer>
      </div>
    </section>
  );
}
