import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const STEPS = [
  {
    number: "01",
    title: "Análisis y Diagnóstico",
    description:
      "Evaluamos su consumo energético y analizamos las condiciones del sitio para identificar oportunidades de ahorro.",
  },
  {
    number: "02",
    title: "Diseño e Ingeniería",
    description:
      "Dimensionamos el sistema ideal y seleccionamos la tecnología que mejor se adapte a su presupuesto y requerimientos.",
  },
  {
    number: "03",
    title: "Instalación Certificada",
    description:
      "Ejecutamos el montaje profesional, pruebas de funcionamiento y puesta en marcha del sistema completo.",
  },
  {
    number: "04",
    title: "Monitoreo Continuo",
    description:
      "Seguimos el rendimiento en tiempo real y brindamos soporte continuo para maximizar su inversión.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function PricingSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section id="sec-010" ref={ref} className="bg-white px-6 py-24 relative overflow-hidden">
      {/* Light texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1200px] mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={-1}
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#F26522]" />
            <span className="text-[#F26522] text-xs font-semibold tracking-[0.3em] uppercase font-geometric">
              Proceso
            </span>
            <div className="w-12 h-px bg-[#F26522]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-gray-900 tracking-tight mb-6 font-art">
            Cómo desarrollamos<br />
            <span className="text-[#F26522] font-hero italic">su proyecto</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-geometric">
            Un solo aliado para todo el ciclo de su sistema solar, desde el análisis inicial hasta la operación y mantenimiento continuo.
          </p>
        </motion.div>

        {/* Alternating timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <motion.div
              className="w-full h-full bg-[#F26522]/20"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-8 md:space-y-16">
            {STEPS.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  className="relative flex items-center gap-6 md:gap-12"
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i}
                >
                  {/* Left side */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left hidden md:block'}`}>
                    {isEven && (
                      <motion.div
                        className="inline-block p-5 rounded-2xl border border-gray-200/60 bg-white hover:border-[#F26522]/30 hover:shadow-lg hover:shadow-[#F26522]/5 transition-all duration-500 text-left"
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2 font-geometric">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed font-geometric">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center number */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-[#F26522] flex items-center justify-center shadow-sm"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{
                        delay: i * 0.2 + 0.3,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      <span className="text-sm font-bold text-[#F26522] font-mono-tech">{step.number}</span>
                    </motion.div>
                  </div>

                  {/* Right side */}
                  <div className={`flex-1 ${!isEven ? 'md:text-left' : 'md:text-right hidden md:block'}`}>
                    {!isEven && (
                      <motion.div
                        className="inline-block p-5 rounded-2xl border border-gray-200/60 bg-white hover:border-[#F26522]/30 hover:shadow-lg hover:shadow-[#F26522]/5 transition-all duration-500 text-left"
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2 font-geometric">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed font-geometric">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Mobile content */}
                  <div className="md:hidden flex-1 pl-2">
                    <motion.div
                      className="p-5 rounded-2xl border border-gray-200/60 bg-white hover:border-[#F26522]/30 transition-all duration-500"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2 font-geometric">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-geometric">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
