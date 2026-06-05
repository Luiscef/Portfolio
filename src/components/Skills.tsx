import { motion } from "framer-motion";

const categories = [
  {
    title: "Desarrollo Web & Mobile",
    color: "violet",
    skills: [
      { name: "Laravel / PHP", level: 90 },
      { name: "HTML / CSS / JS", level: 90 },
      { name: "React + Vite", level: 70 },
      { name: "Bootstrap", level: 75 },
      { name: "C# .NET", level: 65 },
      { name: "Flutter", level: 60 },
    ],
  },
  {
    title: "Bases de Datos & Backend",
    color: "cyan",
    skills: [
      { name: "SQL Server", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "Python", level: 70 },
      { name: "Firebase", level: 65 },
      { name: "MongoDB", level: 55 },
      { name: "REST APIs", level: 50 },
    ],
  },
  {
    title: "Herramientas & QA",
    color: "purple",
    skills: [
      { name: "QA / Testing", level: 75 },
      { name: "GitHub", level: 85 },
      { name: "Apache", level: 70 },
      { name: "Docker", level: 60 },
      { name: "Power BI", level: 60 },
      { name: "Kali Linux", level: 55 },
    ],
  },
];

const bars: Record<string, string> = {
  violet: "bg-gradient-to-r from-violet-600 to-violet-400",
  cyan: "bg-gradient-to-r from-cyan-600 to-cyan-400",
  purple: "bg-gradient-to-r from-purple-600 to-purple-400",
};

const dots: Record<string, string> = {
  violet: "bg-violet-400",
  cyan: "bg-cyan-400",
  purple: "bg-purple-400",
};

const badges = [
  "Laravel", "PHP", "React", "Vite", "TypeScript", "HTML/CSS",
  "Bootstrap", "C# .NET", "Flutter", "Python", "SQL Server",
  "MySQL", "Firebase", "Docker", "GitHub", "Apache", "QA Testing", "Power BI",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#0a0d1f]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Habilidades
          </p>
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="font-bold text-4xl sm:text-5xl text-white"
          >
            Stack tecnológico
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Tecnologías con las que trabajo para construir productos de calidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2.5 h-2.5 rounded-full ${dots[cat.color]}`} />
                <h3
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  className="font-semibold text-lg text-white"
                >
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: catIdx * 0.1 + i * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: catIdx * 0.1 + i * 0.05 + 0.2, ease: "easeOut" }}
                        className={`h-full rounded-full ${bars[cat.color]}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {badges.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full text-sm font-medium border border-white/8 bg-white/3 text-slate-300 hover:border-violet-500/40 hover:text-violet-300 hover:bg-violet-500/5 transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
