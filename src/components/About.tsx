import { motion, type Variants } from "framer-motion";
import { MapPin, Mail, Calendar, Download } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Ubicación", value: "Honduras" },
  { icon: Mail, label: "Email", value: "enriquefranco2003@gmail.com" },
  { icon: Calendar, label: "Disponibilidad", value: "Abierto a ofertas" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Sobre mí
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="font-bold text-4xl sm:text-5xl text-white"
          >
            Quién soy
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-600/40 to-cyan-600/40 border-2 border-violet-500/30 mx-auto mb-4 flex items-center justify-center">
                    <span
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      className="font-bold text-5xl bg-gradient-to-br from-violet-300 to-cyan-300 bg-clip-text text-transparent"
                    >
                      LF
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-violet-500/60 rounded-tl" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-500/60 rounded-br" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 bg-[#0d1023] border border-white/10 rounded-xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-xs text-slate-400 mb-0.5">Experiencia</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-bold text-white text-lg">2+ años</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -top-5 -right-5 bg-[#0d1023] border border-white/10 rounded-xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-xs text-slate-400 mb-0.5">Proyectos</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-bold text-white text-lg">10+</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h3
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="font-bold text-2xl text-white mb-4"
            >
              Desarrollador apasionado por crear experiencias digitales
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Soy un desarrollador con pasión por construir aplicaciones
              web modernas y funcionales. Me especializo en desarrollo web PHP, React, Vite y Node.js,
              siempre buscando las mejores soluciones técnicas con un ojo puesto en
              el diseño y la experiencia del usuario. Asimismo tengo experiencia en el desarrollo de sistemas de gestion de inventario y facturacion, utilizando tecnologias como C#, .NET y SQL Server.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Cuando no estoy codificando, me encuentro explorando nuevas tecnologías,
              contribuyendo a proyectos open source o aprendiendo sobre diseño UI/UX.
              Busco constantemente mejorar mis habilidades y colaborar en proyectos desafiantes.
            </p>

            <div className="space-y-3 mb-8">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <div className="p-1.5 rounded-md bg-violet-500/10 border border-violet-500/20">
                    <Icon size={14} className="text-violet-400" />
                  </div>
                  <span className="text-slate-500">{label}:</span>
                  <span className="text-slate-200 font-medium">{value}</span>
                </div>
              ))}
            </div>
            
 
            <a
              href="/cv/cv_luis.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-violet-500/40 text-violet-300 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/70 transition-all duration-200 text-sm font-semibold"
            >
              <Download size={16} />
              Descargar CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
