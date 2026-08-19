import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    name: "Clínicas y Hospitales",
    description:
      "Energía ininterrumpida para equipos electromédicos y sistemas críticos de salud.",
    image: "/images/project-clinicas.jpg",
  },
  {
    name: "Laboratorios Farmacéuticos",
    description:
      "Continuidad operativa y calidad de onda para protección de cadenas de frío.",
    image: "/images/project-laboratorios.jpg",
  },
  {
    name: "Plantas de Producción",
    description:
      "Reducción de costos energéticos y ventaja competitiva con energía solar de gran escala.",
    image: "/images/project-plantas.jpg",
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
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function ProjectsSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section id="sec-012" ref={ref} className="relative bg-white px-0 py-24 overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1440px] mx-auto relative">
        {/* Header */}
        <motion.div
          className="px-6 mb-20"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={-1}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-gray-900 mb-6 font-art">
            Sectores que <span className="text-[#F26522] font-hero italic">transformamos</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed font-geometric">
            Cada proyecto combina ingeniería, tecnología y acompañamiento continuo.
          </p>
        </motion.div>

        {/* Full-width project showcase */}
        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              className="relative group cursor-pointer"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
            >
              {/* Full-width image container */}
              <div className="relative overflow-hidden">
                <div className="relative h-[50vh] md:h-[70vh] lg:h-[80vh] min-h-[400px] md:min-h-[500px]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{ filter: "brightness(0.85) contrast(1.05)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex items-end p-8 md:p-12 lg:p-16">
                  <div className="max-w-2xl">
                    <motion.div
                      className="inline-flex items-center gap-3 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <div className="w-8 h-px bg-[#F26522]" />
                      <span className="text-[#F26522] text-xs font-semibold tracking-[0.3em] uppercase font-geometric">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </motion.div>
                    <motion.h3
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4 font-art"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                    >
                      {project.name}
                    </motion.h3>
                    <motion.p
                      className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl font-geometric"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div
                      className="mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <motion.button
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-medium rounded-full transition-all duration-300 font-geometric"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Ver caso de estudio</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>

                {/* Side number - vertical */}
                <div className="absolute top-8 right-8 md:right-12 hidden md:block">
                  <motion.span
                    className="text-8xl lg:text-9xl font-display-impact text-white/5 leading-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-24 px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-art">
              ¿Listo para comenzar su proyecto?
            </h3>
            <p className="text-gray-600 text-base mb-8 max-w-xl mx-auto font-geometric">
              Solicite un diagnóstico gratuito y descubra cómo la energía solar puede transformar su hogar o empresa.
            </p>
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F26522] hover:bg-[#e05a1a] text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-[#F26522]/30 font-geometric"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Solicitar diagnóstico</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
