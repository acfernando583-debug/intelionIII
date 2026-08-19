import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const fadeInUp = {
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

export function PartnerSection() {
  const { ref } = useInViewAnimation();

  return (
    <section id="sec-013" ref={ref} className="relative bg-[#F5F5F5] py-24 lg:py-32 overflow-hidden">
      {/* Animated moving pattern background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='rgba(0,0,0,0.25)' opacity='0.9'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
          animate={{
            x: [0, -60, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative max-w-[88rem] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - Contact cards */}
          <motion.div
            className="relative order-2 lg:order-1"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            custom={0}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <motion.div
                className="relative p-6 lg:p-8 overflow-hidden group cursor-pointer border border-gray-200/60 hover:border-[#F26522]/30 transition-all duration-500 bg-white"
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full border border-[#F26522]/30 flex items-center justify-center mb-4 group-hover:border-[#F26522] group-hover:bg-[#F26522]/10 transition-all duration-300">
                    <Mail className="w-6 h-6 text-[#F26522]" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2 tracking-tight font-art">Email</h3>
                  <p className="text-gray-600 text-sm font-geometric">intelionsolar@gmail.com</p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="relative p-6 lg:p-8 overflow-hidden group cursor-pointer border border-gray-200/60 hover:border-[#E8704E]/30 transition-all duration-500 bg-white"
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8704E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full border border-[#E8704E]/30 flex items-center justify-center mb-4 group-hover:border-[#E8704E] group-hover:bg-[#E8704E]/10 transition-all duration-300">
                    <Phone className="w-6 h-6 text-[#E8704E]" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2 tracking-tight font-art">WhatsApp</h3>
                  <p className="text-gray-600 text-sm font-geometric">350-8336293</p>
                </div>
              </motion.div>

              {/* Card 3 - spans 2 columns */}
              <motion.div
                className="relative p-6 lg:p-8 overflow-hidden group cursor-pointer col-span-2 border border-gray-200/60 hover:border-[#F26522]/30 transition-all duration-500 bg-white"
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-[#F26522]/30 flex items-center justify-center group-hover:border-[#F26522] group-hover:bg-[#F26522]/10 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-[#F26522]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg mb-1 tracking-tight font-art">Cobertura Nacional</h3>
                    <p className="text-gray-600 text-sm font-geometric">Presencia en las principales ciudades de Colombia</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating metric */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-[#F26522]/20 flex items-center justify-center bg-white/80 backdrop-blur-md"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F26522] font-mono-tech">24/7</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-geometric">Soporte</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Large text */}
          <motion.div
            className="order-1 lg:order-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            custom={1}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
              <span className="text-[#F26522] text-xs font-semibold tracking-[0.3em] uppercase font-geometric">Disponible</span>
              <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] text-gray-900 tracking-tight mb-6 font-art">
              Transforme su <br />
              consumo <span className="text-[#F26522] font-hero italic">energético</span>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg mb-8 font-geometric">
              Analizamos su necesidad energética y diseñamos la solución que mejor se adapte a su proyecto. Energía solar inteligente para hogares, edificios e industria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F26522] hover:bg-[#e05a1a] text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-[#F26522]/30 font-geometric"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Solicitar diagnóstico gratuito</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-200 hover:border-[#F26522] text-gray-900 font-semibold rounded-full transition-all duration-300 font-geometric"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Llamar ahora</span>
                <Phone className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
