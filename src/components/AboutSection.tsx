import { motion } from "framer-motion";
import { CtaButton } from "./Buttons";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function AboutSection() {
  return (
    <section id="sec-002" className="relative bg-white pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
      {/* Editorial paper texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative">
        {/* Editorial header with large drop-cap area */}
        <motion.div
          className="mb-16 sm:mb-20 lg:mb-24"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={0}
        >
          <div className="flex items-end gap-6 sm:gap-10">
            <div className="hidden sm:flex flex-col items-center gap-2 pb-2">
              <div className="w-px h-16 bg-[#F26522]/30" />
              <span className="text-[10px] tracking-[0.3em] text-[#F26522] font-geometric uppercase rotate-180 writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>
                Quiénes Somos
              </span>
              <div className="w-px h-16 bg-[#F26522]/30" />
            </div>
            <div className="flex-1">
              <h2 className="font-editorial font-medium leading-[1.08] tracking-[-0.02em] text-gray-900 text-[clamp(2rem,5vw,4rem)]">
                Energía solar <span className="italic text-[#F26522]">inteligente</span> para hogares, edificios e industria.
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Asymmetric editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left column - Text with drop cap */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={1}
          >
            <div className="relative">
              <span className="absolute -left-2 -top-4 text-7xl font-editorial text-[#F26522]/20 leading-none select-none">&ldquo;</span>
              <p className="text-[15px] leading-[1.8] text-gray-900 font-geometric pl-6 border-l-2 border-[#F26522]/30">
                Diseño, instalación y mantenimiento de sistemas de energía solar fotovoltaica, enfocada en brindar soluciones seguras, eficientes y personalizadas para hogares, edificios e industria.
              </p>
            </div>
            <p className="text-[15px] leading-[1.8] text-gray-900 font-geometric">
              Nuestro equipo combina experiencia técnica, materiales de primer nivel y un acompañamiento cercano para que cada proyecto funcione de verdad: desde la primera visita y el diseño personalizado hasta la puesta en marcha, el monitoreo continuo y el mantenimiento preventivo.
            </p>
            <p className="text-[15px] leading-[1.8] text-gray-900 font-geometric">
              Trabajamos con marcas líderes, inversores certificados y estructuras adaptadas a cada techo o superficie, garantizando cumplimiento normativo, seguridad eléctrica y retorno de inversión medible.
            </p>

            {/* Editorial metric */}
            <motion.div
              className="flex items-center gap-6 pt-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={2}
            >
              <div className="text-center">
                <div className="text-4xl font-display-impact text-[#F26522] leading-none">500+</div>
                <div className="text-[10px] tracking-[0.2em] text-gray-500 uppercase mt-1 font-geometric">Proyectos</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <div className="text-4xl font-display-impact text-[#F26522] leading-none">98%</div>
                <div className="text-[10px] tracking-[0.2em] text-gray-500 uppercase mt-1 font-geometric">Satisfacción</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <div className="text-4xl font-display-impact text-[#F26522] leading-none">25</div>
                <div className="text-[10px] tracking-[0.2em] text-gray-500 uppercase mt-1 font-geometric">Años garantía</div>
              </div>
            </motion.div>

            <div className="pt-2">
              <CtaButton text="Solicitar diagnóstico" variant="orange" />
            </div>
          </motion.div>

          {/* Right column - Asymmetric video panels */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={2}
          >
            {/* Main featured video */}
            <div className="relative group">
              <div className="absolute -inset-2 border border-[#F26522]/10 rounded-sm" />
              <div className="relative overflow-hidden rounded-sm">
                <video
                  src="/videos/2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "contrast(1.05) brightness(0.95) saturate(0.9)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase font-geometric">Nuestra historia</span>
                  <h3 className="text-white text-2xl font-editorial mt-1">Innovando desde 2018</h3>
                </div>
              </div>
            </div>

            {/* Two smaller panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 border border-gray-200 rounded-sm" />
                <div className="relative overflow-hidden rounded-sm">
                  <video
                    src="/videos/3.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "contrast(1.05) brightness(0.95) saturate(0.9)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-sm font-editorial">Instalación certificada</span>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 border border-gray-200 rounded-sm" />
                <div className="relative overflow-hidden rounded-sm">
                  <video
                    src="/videos/4.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "contrast(1.05) brightness(0.95) saturate(0.9)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-sm font-editorial">Monitoreo 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
