import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

type Entry = {
  type: "work" | "education";
  title: string;
  org: string;
  period: string;
  description: string;
  tags?: string[];
};

const timeline: Entry[] = [
  {
    type: "work",
    title: "Desarrollador Freelance",
    org: "Autoempleo",
    period: "2026 – Presente",
    description:
      "Desarrollo de aplicaciones web a medida para clientes de distintos sectores. Gestión completa desde el diseño hasta el despliegue en producción.",
    tags: ["React", "Vite", "Node.js", "Tailwind", "Despliegue", "Laravel", "Hostinger", "SQL Server", "PHP"],
  },
  {
    type: "work",
    title: "Practica Profesional Supervisada",
    org: "Proyecto Universitario",
    period: "2026 – 2026",
    description:
      "Realice mi practica profesional supervisada en Sistemas de Honduras, una empresa enfocado en el desarrollo de software y POS a medida para la gestión empresarial. Durante mi tiempo allí, contribuí al desarrollo de un sistema de gestión de inventarios utilizando tecnologías como Laraver PHP, SQL Server, Apache, etc. para el frontend, asi como tambien el mantenimiento y reparacion de equipos. Esta experiencia me permitió aplicar mis conocimientos en un entorno real y mejorar mis habilidades técnicas y de trabajo en equipo.",
    tags: ["Laravel", "SQL Server", "C#", "Mantenimiento"],
  },
  {
    type: "education",
    title: "Ingeniería en Sistemas / Computación",
    org: "Universidad Cátolica de Honduras",
    period: "2022 – 2026",
    description:
      "Formación en ciencias de la computación, algoritmos, estructuras de datos, bases de datos y desarrollo de software.",
    tags: ["Algoritmos", "Bases de datos", "Redes", "POO", "Software"],
  },
  
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#0a0d1f]/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Trayectoria
          </p>
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="font-bold text-4xl sm:text-5xl text-white"
          >
            Experiencia y Educación
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-white/10 to-transparent" />

          <div className="space-y-8">
            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16"
              >
                <div
                  className={`absolute left-0 top-1 flex items-center justify-center w-12 h-12 rounded-xl border ${
                    entry.type === "work"
                      ? "bg-violet-600/20 border-violet-500/30"
                      : "bg-cyan-600/20 border-cyan-500/30"
                  }`}
                >
                  {entry.type === "work" ? (
                    <Briefcase size={18} className="text-violet-400" />
                  ) : (
                    <GraduationCap size={18} className="text-cyan-400" />
                  )}
                </div>

                <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 hover:border-white/15 transition-colors duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        className="font-semibold text-white text-lg group-hover:text-violet-200 transition-colors duration-200"
                      >
                        {entry.title}
                      </h3>
                      <p className="text-slate-400 text-sm">{entry.org}</p>
                    </div>
                    <span
                      className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border ${
                        entry.type === "work"
                          ? "bg-violet-500/10 text-violet-300 border-violet-500/20"
                          : "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
                      }`}
                    >
                      {entry.period}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{entry.description}</p>

                  {entry.tags && (
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/8 text-slate-400 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
