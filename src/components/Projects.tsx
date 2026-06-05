import { motion } from "framer-motion";
import { ExternalLink, Star, ImageOff } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";

const projects = [
  {
    title: "ALEIQ",
    description:
      "Plataforma web institucional desarrollada con Laravel y PHP. Incluye gestión de contenido, blog, actividades y panel de administración.",
    tags: ["Laravel", "PHP", "MySQL", "Hostinger", "Panel Administrativo"],
    demo: "https://pruebas.aleiqlatam.org/",
    featured: true,
    gradient: "from-violet-500/20 to-purple-500/10",
    image: "/images/projects/aleiq.png",
  },
  {
    title: "Licencias SHN",
    description:
      "Sistema de gestión de licencias para los clientes de Sistemas de Honduras, desarrollado con Laravel PHP. Permite a los administradores gestionar sus licencias de software, generando reportes, renovaciones y centralizando la informacion",
    tags: ["Laravel", "Apache", "SQL Server", "Sistemas de Honduras", "Practica Profesional Supervisada"],
    github: "https://github.com/Luiscef",
    demo: null,
    featured: true,
    gradient: "from-cyan-500/20 to-blue-500/10",
    image: "/images/projects/licencias_shn.png",
  },
  {
    title: "Proyecto: Pagina de la cruz roja",
    description:
      "Pagina web institucional para la Cruz Roja Hondureña, desarrollada como proyecto universitario. Incluye secciones de información, galeria, eventos y contacto.",
    tags: ["HTML5", "CSS", "JavaScript", "Bootstrap", "Proyecto Universitario"],
    github: "https://josselinpineda.github.io/proyectopw1/inicio.html",
    demo: null,
    featured: false,
    gradient: "from-emerald-500/15 to-teal-500/10",
    image: "/images/projects/cruz_roja.png",
  },
  {
    title: "Proyecto: Aplicacion de control de habitos con notificaciones push",
    description:
      "Aplicación móvil para el seguimiento de hábitos diarios, con recordatorios y estadísticas de progreso. Desarrollada con Flutter y Firebase.",
    tags: ["Flutter", "SQLite", "Firebase", "Proyecto Universitarios"],
    github: "https://github.com/Luiscef/proyectoMovil2",
    demo: null,
    featured: false,
    gradient: "from-orange-500/15 to-amber-500/10",
    image: "/images/projects/habitos.jpeg",
  },
  {
    title: "Proyecto: Gestion de compras en linea de una panaderia",
    description:
      "Sistema de comercio electrónico para una panadería local, desarrollado como proyecto universitario. Permite a los clientes realizar pedidos en línea y a los administradores gestionar el inventario y los pedidos.",
    tags: ["PHP", "MySQL", "Paypal", "Docker", "Proyecto Universitario"],
    github: "https://github.com/FioreEnojona/proyectoNW",
    demo: null,
    featured: false,
    gradient: "from-rose-500/15 to-pink-500/10",
    image: "/images/projects/cafeteria.png",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Proyectos
          </p>
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="font-bold text-4xl sm:text-5xl text-white"
          >
            Lo que he construido
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Una selección de proyectos personales y profesionales que demuestran mis habilidades y enfoque.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden flex flex-col hover:border-white/15 transition-all duration-300"
            >
              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              {/* Project image */}
              <div className="relative w-full h-44 overflow-hidden bg-[#0d1023] shrink-0">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Captura de ${project.title}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                ) : null}
                {/* Fallback placeholder (shown when no image or load error) */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center gap-2 ${project.image ? "hidden" : "flex"}`}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-40`} />
                  <div className="absolute flex flex-col items-center gap-2 text-slate-600">
                    <ImageOff size={24} />
                    <span className="text-xs">Sin imagen</span>
                  </div>
                </div>
                {/* Gradient fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0d1023] to-transparent" />
              </div>

              {/* Card content */}
              <div className="relative flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-violet-500/15 border border-violet-500/25 text-violet-300 text-xs font-medium">
                        <Star size={10} />
                        Destacado
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/8 transition-colors duration-200"
                    >
                      <IconBrandGithub size={16} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Demo"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/8 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <h3
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    className="font-bold text-lg text-white mb-2 group-hover:text-violet-200 transition-colors duration-200"
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-slate-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Luiscef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200 text-sm font-medium"
          >
            <IconBrandGithub size={16} />
            Ver más en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
