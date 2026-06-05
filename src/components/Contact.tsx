import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const socials = [
  { icon: IconBrandGithub, label: "GitHub", href: "https://github.com/Luiscef", handle: "@Luiscef" },
  { icon: IconBrandLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/luis-enrique-franco-cartagena-7b3323342", handle: "Luis Enrique Franco Cartagena" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Contacto
          </p>
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="font-bold text-4xl sm:text-5xl text-white"
          >
            Información de contacto
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? Estoy disponible.
            Escríbeme y te respondo en menos de 24 horas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 flex flex-col gap-6"
        >
          <a
            href="mailto:enriquefranco2003@gmail.com"
            className="flex items-center gap-3 p-4 rounded-xl bg-violet-600/10 border border-violet-500/20 hover:bg-violet-600/20 hover:border-violet-500/40 transition-all duration-200 group"
          >
            <div className="p-2 rounded-lg bg-violet-600/20">
              <Mail size={18} className="text-violet-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-0.5">Email</p>
              <p className="text-slate-200 text-sm font-medium group-hover:text-violet-300 transition-colors">
                enriquefranco2003@gmail.com
              </p>
            </div>
          </a>

          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Redes sociales</p>
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, href, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-white/6 hover:border-white/15 hover:bg-white/5 transition-all duration-200 group"
                >
                  <Icon size={18} className="text-slate-500 group-hover:text-slate-200 transition-colors" />
                  <div>
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="text-sm text-slate-300 group-hover:text-white transition-colors">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
