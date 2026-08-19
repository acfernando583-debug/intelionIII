import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "proyecto-5",
    title: "Energía que impulsa",
    subtitle: "tu hogar.",
    description:
      "Diseño e instalación de sistemas fotovoltaicos residenciales con monitoreo inteligente y respaldo en baterías.",
    video: "/videos/5.mp4",
    poster: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85",
  },
  {
    id: "proyecto-6",
    title: "Eficiencia",
    subtitle: "comprobada.",
    description:
      "Operación y mantenimiento de plantas solares con reporting continuo, soporte especializado y cumplimiento normativo.",
    video: "/videos/6.mp4",
    poster: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  })
};

export function CaseStudiesSection() {
  const { ref } = useInViewAnimation();

  return (
    <section id="sec-003" ref={ref} className="relative bg-white pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-28 overflow-hidden">
      {/* Brutalist grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='black' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative">
        {/* Header - no kicker, bold geometric numbers */}
        <div className="flex items-end justify-between mb-12 sm:mb-16">
          <motion.div
            className="flex items-baseline gap-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            custom={0}
          >
            <span className="text-6xl sm:text-7xl lg:text-8xl font-display-impact text-[#F26522] leading-none tracking-tight">02</span>
            <div className="pb-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-gray-900 font-geometric">
                Proyectos<br />destacados
              </h2>
            </div>
          </motion.div>
          <motion.div
            className="hidden sm:block pb-2"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            custom={1}
          >
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-geometric">Casos de Estudio</span>
          </motion.div>
        </div>

        {/* Projects grid - hard edges, diagonal accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group relative border-r-0 md:border-r border-b md:border-b-0 border-gray-200 last:border-r-0 last:border-b-0"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              custom={idx + 2}
            >
              <div className="relative overflow-hidden">
                <video
                  src={project.video}
                  poster={project.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "contrast(1.1) brightness(0.9) saturate(1.1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Diagonal accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#F26522]/10 -translate-y-1/2 translate-x-1/2 rotate-45 group-hover:bg-[#F26522]/20 transition-colors duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[10px] tracking-[0.3em] text-[#F26522] uppercase font-geometric mb-2 block">
                        {String(idx + 1).padStart(2, '0')} / Proyecto
                      </span>
                      <h3 className="text-white text-2xl sm:text-3xl font-geometric font-bold tracking-tight leading-[1.1]">
                        {project.title} {project.subtitle && <span className="text-[#F26522]">{project.subtitle}</span>}
                      </h3>
                      <p className="text-white/70 text-sm mt-3 leading-relaxed max-w-md font-geometric">
                        {project.description}
                      </p>
                    </div>
                    <motion.div
                      className="hidden sm:flex w-12 h-12 items-center justify-center border border-white/30 group-hover:border-[#F26522] group-hover:bg-[#F26522] transition-all duration-300"
                      whileHover={{ rotate: 45 }}
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom geometric line */}
        <motion.div
          className="mt-0 h-px bg-gradient-to-r from-[#F26522]/40 via-[#F26522]/10 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
  );
}
