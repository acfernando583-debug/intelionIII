import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { ArrowRight } from "lucide-react";

const features = [
  {
    id: "video-4",
    type: "video",
    title: "Tu proyecto, en marcha.",
    subtitle: "Energía que impulsa",
    video: "/videos/4.mp4"
  },
  {
    id: "almacenamiento",
    type: "card",
    number: "01",
    title: "Sistemas con Almacenamiento",
    items: [
      "Integración de baterías de respaldo",
      "Soluciones para continuidad energética",
      "Optimización del autoconsumo"
    ]
  },
  {
    id: "instalacion",
    type: "card",
    number: "02",
    title: "Instalación y Puesta en Marcha",
    items: [
      "Integración de inversores y estructuras",
      "Pruebas, configuración y arranque",
      "Sistemas conectados a red, híbridos y aislados"
    ]
  },
  {
    id: "mantenimiento",
    type: "card",
    number: "03",
    title: "Operación y Mantenimiento",
    items: [
      "Monitoreo del rendimiento del sistema",
      "Diagnóstico y optimización",
      "Soporte técnico especializado"
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  })
};

export function FeaturesSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section id="sec-005" ref={ref} className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Hexagonal grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3Cpattern id='hex' width='60' height='52' patternUnits='userSpaceOnUse'%3E%3Cpath d='M30 0l26 15v30L30 60 4 45V15z' fill='none' stroke='rgba(242,101,34,0.5)' stroke-width='0.8'/%3E%3Cpath d='M30 30l15 8.7v17.3L30 45 15 36.3V18.7z' fill='none' stroke='rgba(242,101,34,0.35)' stroke-width='0.6'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23hex)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Floating technical shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full border border-[#F26522]/10"
          animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-48 h-48 rounded-full border border-[#E8704E]/10"
          animate={{ y: [0, 50, 0], x: [0, -20, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[#F26522]/5"
          animate={{ rotate: [0, 180, 360], scale: [1, 1.05, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="w-8 h-px bg-[#F26522]" />
            <span className="text-[#F26522] text-xs font-semibold tracking-[0.3em] uppercase font-mono-tech">
              03 / Soluciones
            </span>
            <span className="w-8 h-px bg-[#F26522]" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] text-white tracking-tight mb-6 font-geometric"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Tecnología confiable para<br />
            <span className="text-[#F26522] font-mono-tech">soluciones eficientes.</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-geometric"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Diseño, instalación y operación de sistemas fotovoltaicos para hogares, edificios e industria.
          </motion.p>
        </div>

        {/* Blueprint-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 sm:gap-5 auto-rows-[280px]">
          {features.slice(0, 2).map((feature, idx) => (
            <motion.div
              key={feature.id}
              className="md:col-span-6 lg:col-span-6 relative overflow-hidden group cursor-pointer border border-white/5"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={idx}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <video
                src={feature.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "contrast(1.1) brightness(0.85) saturate(1.2)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Technical overlay */}
              <div className="absolute top-4 right-4 font-mono-tech text-[10px] text-[#F26522]/60 tracking-wider">
                SYS.{idx === 0 ? '05' : '06'}
              </div>

              <div className="relative z-10 flex flex-col justify-end p-8 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
                  <span className="text-white/60 text-xs tracking-[0.2em] uppercase font-mono-tech">Proyectos en marcha</span>
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] font-geometric">
                  {feature.title}
                </h3>
                <p className="text-[#F26522] text-lg font-mono-tech mt-1">{feature.subtitle}</p>
              </div>
            </motion.div>
          ))}

          {features.slice(2).map((feature, idx) => (
            <motion.div
              key={feature.id}
              className="md:col-span-3 lg:col-span-4 relative p-6 lg:p-8 overflow-hidden group cursor-pointer border border-white/5 bg-white/5"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={idx + 2}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Technical marker */}
              <div className="absolute top-4 right-4 font-mono-tech text-[10px] text-[#F26522]/60 tracking-wider">
                MOD.{feature.number}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-full border border-[#F26522]/30 flex items-center justify-center group-hover:border-[#F26522] group-hover:bg-[#F26522]/10 transition-all duration-300">
                    <div className="w-3 h-3 rounded-full bg-[#F26522]" />
                  </div>
                  <span className="text-[#F26522] text-3xl font-mono-tech font-bold tracking-tighter opacity-80">
                    {feature.number}
                  </span>
                </div>
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-4 font-geometric">
                  {feature.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {(feature.items || []).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed font-geometric">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F26522] mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:text-[#F26522] transition-colors duration-300 font-geometric">
                    Conocer más
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
