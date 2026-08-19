import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { useParallax } from "../hooks/useParallax";

const BACKERS = [
  { name: "Risen", phrase: "Alta eficiencia en paneles" },
  { name: "Canadian Solar", phrase: "Tecnología canadiense premium" },
  { name: "ZNShine Solar", phrase: "Innovación en módulos solares" },
  { name: "Victron Energy", phrase: "Energía confiable 24/7" },
  { name: "Dyness", phrase: "Baterías de última generación" },
  { name: "Pylontech", phrase: "Almacenamiento inteligente" },
  { name: "Must", phrase: "Inversores de alta potencia" },
];

export function BackedBySection() {
  const { ref, inView } = useInViewAnimation();
  const parallaxStyle = useParallax(0.1);

  return (
    <section id="sec-008" ref={ref} className="bg-[#F5F5F5] px-0 py-20 relative overflow-hidden">
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          transform: `translateY(${parallaxStyle}px)`,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='rgba(0,0,0,0.25)' opacity='0.9'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.4,
        }}
      />

      <div className="max-w-[88rem] mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gray-900 text-xs font-semibold tracking-[0.3em] uppercase font-geometric block mb-4">
            Marcas certificadas
          </span>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-geometric">
            Que nos respaldan y garantizan la más alta calidad en cada componente.
          </p>
        </motion.div>

        {/* Infinite marquee */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-12 md:gap-16 lg:gap-20 whitespace-nowrap"
              animate={{
                x: [0, -920],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...BACKERS, ...BACKERS].map((backer, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-4"
                >
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900/80 tracking-tight font-art hover:text-[#F26522] transition-colors duration-300">
                    {backer.name}
                  </span>
                  <span className="text-gray-300 text-lg">/</span>
                  <span className="text-xs md:text-sm text-gray-400 font-medium tracking-[0.2em] uppercase font-geometric hidden md:inline">
                    {backer.phrase}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Second row - reversed */}
        <div className="relative w-full overflow-hidden mt-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-12 md:gap-16 lg:gap-20 whitespace-nowrap"
              animate={{
                x: [-920, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...BACKERS].reverse().map((backer, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-4"
                >
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900/80 tracking-tight font-art hover:text-[#F26522] transition-colors duration-300">
                    {backer.name}
                  </span>
                  <span className="text-gray-300 text-lg">/</span>
                  <span className="text-xs md:text-sm text-gray-400 font-medium tracking-[0.2em] uppercase font-geometric hidden md:inline">
                    {backer.phrase}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
