import { motion, useScroll, useTransform } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { Sparkles } from "lucide-react";
import { CtaButton } from "./Buttons";

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/intelion-logo.png"
      alt="INTELION"
      className={className}
    />
  );
}

const heroHeadlineSegments = [
  { text: "Energía Solar", className: "font-editorial" },
  { text: "Inteligente", className: "font-editorial italic text-[#F26522]" },
];

export function HeroSection() {
  const { ref, inView } = useInViewAnimation();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, -120]);
  const shapeY = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section ref={ref} className="relative h-screen bg-black overflow-hidden">
      {/* Parallax video background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/2.mp4"
        />
      </motion.div>

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Geometric parallax shapes */}
      <motion.div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ y: shapeY }}>
        <motion.div
          className="absolute top-[15%] left-[8%] w-32 h-32 border border-[#F26522]/20 rotate-45"
          animate={{ rotate: [45, 405], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[25%] right-[12%] w-24 h-24 rounded-full border-2 border-[#F26522]/15"
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[15%] w-40 h-40 border border-[#E8704E]/10 rotate-12"
          animate={{ rotate: [12, 372], y: [0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[20%] w-20 h-20 bg-[#F26522]/5 rounded-full"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[60%] right-[8%] w-16 h-16 border border-white/10 rotate-45"
          animate={{ rotate: [45, 405], y: [0, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Gradient overlay - darker on right for text readability */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 px-6 lg:px-10 flex items-center justify-end">
        <div className="max-w-[88rem] mx-auto w-full flex justify-end">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1 ]}}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
              <span className="text-[#F26522] text-xs font-semibold tracking-[0.2em] uppercase font-geometric">
                Intelion Solar
              </span>
              <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
            </div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-[-0.03em] mb-8"
              style={{ color: "#E1E0CC" }}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {heroHeadlineSegments.map((seg, i) => (
                <span key={i} className={seg.className}>
                  {seg.text}
                  {i === 0 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.p
                className="text-white/80 text-sm sm:text-base md:text-lg leading-[1.5] max-w-lg font-geometric"
              >
                Diseño, instalación y mantenimiento de sistemas de energía solar fotovoltaica.
                Soluciones seguras, eficientes y personalizadas para hogares, edificios e industria.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CtaButton text="Solicitar diagnóstico" variant="orange" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom geometric accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F26522]/40 to-transparent"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  );
}

export function QuoteSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section ref={ref} className="py-24 px-6 max-w-5xl mx-auto relative overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-[#F26522]/5 rounded-full blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 -right-20 w-80 h-80 bg-[#E8704E]/5 rounded-full blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="relative">
        <motion.div
          className={`${inView ? "opacity-100" : "opacity-0"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Sparkles className="w-8 h-8 text-[#F26522] mb-6" />
        </motion.div>
        <motion.h2
          className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight mb-8 font-editorial"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ color: "#E1E0CC" }}
        >
          Nuestra misión es transformar el consumo energético de hogares, edificios e industria mediante{" "}
          <span className="text-[#F26522] font-hero italic">soluciones solares inteligentes</span>, confiables y sostenibles.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl font-geometric"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Combinamos ingeniería, tecnología y un enfoque cercano al cliente para convertir el recurso solar en ahorro energético, eficiencia operativa y sostenibilidad a largo plazo. Un solo aliado para todo el ciclo de su sistema solar.
        </motion.p>
      </div>
    </section>
  );
}
