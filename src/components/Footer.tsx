import { LogoIcon } from "./HeroParts";
import { CtaButton } from "./Buttons";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { Mail, Phone } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function Footer() {
  const { ref } = useInViewAnimation();

  return (
    <footer id="sec-014" ref={ref} className="relative bg-black pt-32 pb-12 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-black to-black" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(242,101,34,0.12) 0%, transparent 60%)",
            filter: "blur(120px)",
          }}
          animate={{ x: [0, 200, 0], y: [0, -100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232,112,78,0.08) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
          animate={{ x: [0, -150, 0], y: [0, 120, 0], scale: [1, 1.4, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cpattern id='panel' patternUnits='userSpaceOnUse' width='40' height='40'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(242,101,34,0.5)' stroke-width='0.5'/%3E%3Cpath d='M40 0v40M0 40h40' stroke='rgba(242,101,34,0.3)' stroke-width='0.4'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23panel)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div
        className="relative max-w-[1200px] mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Top CTA Banner */}
        <motion.div
          className="relative mb-24 p-8 md:p-12 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
          variants={fadeInUp}
          custom={0}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/10 via-transparent to-[#E8704E]/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26522]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-art"
                variants={fadeInUp}
                custom={1}
              >
                ¿Listo para transformar su <span className="text-[#F26522] font-hero italic">energía</span>?
              </motion.h2>
              <motion.p 
                className="text-white/60 text-lg max-w-xl font-geometric"
                variants={fadeInUp}
                custom={2}
              >
                Solicite un diagnóstico gratuito y descubra cómo la energía solar puede transformar su hogar o empresa.
              </motion.p>
            </div>
            <motion.div variants={fadeInUp} custom={3}>
              <CtaButton text="Solicitar diagnóstico" variant="orange" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main footer grid - Editorial asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo and description - large editorial block */}
          <motion.div
            className="lg:col-span-5"
            variants={fadeInUp}
            custom={4}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F26522] to-[#E8704E] flex items-center justify-center shadow-lg shadow-[#F26522]/30">
                <LogoIcon className="w-7 h-7" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-art">
                INTELION
              </span>
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-sm mb-8 font-geometric">
              Diseño, instalación y mantenimiento de sistemas solares fotovoltaicos. Transformando el consumo energético de hogares, edificios e industria.
            </p>
            
            {/* Contact cards */}
            <div className="space-y-3">
              <a href="mailto:intelionsolar@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-[#F26522] transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#F26522]/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-geometric">intelionsolar@gmail.com</span>
              </a>
              <a href="https://wa.me/573508336293" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-[#F26522] transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#F26522]/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-geometric">350-8336293</span>
              </a>
            </div>
          </motion.div>

          {/* Navigation links */}
          <motion.div
            className="lg:col-span-3 lg:col-start-7"
            variants={fadeInUp}
            custom={5}
          >
            <h4 className="text-white font-bold mb-6 text-sm tracking-[0.2em] uppercase font-geometric">Navegación</h4>
            <div className="grid grid-cols-2 gap-3">
              {["Nosotros", "Soluciones", "Proceso", "Tecnología", "Contacto"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/60 hover:text-[#F26522] transition-colors duration-300 text-sm group font-geometric flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#F26522] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeInUp}
            custom={6}
          >
            <h4 className="text-white font-bold mb-6 text-sm tracking-[0.2em] uppercase font-geometric">Servicios</h4>
            <div className="grid grid-cols-2 gap-3">
              {["Diseño", "Instalación", "Monitoreo", "Mantenimiento", "Sostenibilidad", "Cobertura"].map((service) => (
                <span key={service} className="text-white/60 text-sm font-geometric">
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-white/10 pt-8"
          variants={fadeInUp}
          custom={7}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-white/40 text-sm font-geometric">© 2026 INTELION Solar. Todos los derechos reservados.</span>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-[#F26522] transition-colors duration-300 text-sm font-geometric">Privacidad</a>
              <a href="#" className="text-white/40 hover:text-[#F26522] transition-colors duration-300 text-sm font-geometric">Términos</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
