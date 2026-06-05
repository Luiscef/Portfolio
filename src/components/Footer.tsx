import { Mail } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

const socials = [
  { icon: IconBrandGithub, href: "https://github.com/Luiscef", label: "GitHub" },
  { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/luis-enrique-franco-cartagena-7b3323342", label: "LinkedIn" },
  { icon: Mail, href: "mailto:enriquefranco2003@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <a
            href="#hero"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="font-bold text-xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
          >
            LF<span className="text-white">.</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Luis Enrique Franco.
          </p>
        </div>
      </div>
    </footer>
  );
}
