import { motion, useInView } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Wand2 } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const GALLERY_IMAGES = [
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85",
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85",
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

export function InfoSection() {
  const { ref } = useInViewAnimation();
  const [selectedImage, setSelectedImage] = useState(0);
  const sectionInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="sec-004" ref={ref} className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0f] to-black" />
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(242,101,34,0.15) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
          animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(232,112,78,0.12) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
          animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full">
        {/* Luxury header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          custom={0}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#F26522]/40" />
            <span className="text-[10px] tracking-[0.4em] text-[#F26522] uppercase font-geometric">
              Quiénes Somos
            </span>
            <div className="w-12 h-px bg-[#F26522]/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] tracking-tight text-white font-art">
            Innovando el <br className="hidden sm:block" />
            <span className="text-[#F26522] font-hero italic">espíritu</span> de la energía solar
          </h2>
        </motion.div>

        {/* Circular gallery */}
        <motion.div
          className="mt-16"
          variants={fadeInUp}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          custom={1}
        >
          <div className="relative rounded-[32px] overflow-hidden bg-white/5 border border-white/10 p-8 lg:p-12">
            {/* Main circular image display */}
            <div className="relative w-full max-w-2xl mx-auto aspect-square rounded-full overflow-hidden mb-8 group">
              {GALLERY_IMAGES.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`Galería imagen ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{
                    opacity: selectedImage === idx ? 1 : 0,
                    scale: selectedImage === idx ? 1 : 1.1
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  loading={idx === selectedImage ? "eager" : "lazy"}
                />
              ))}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Circular navigation */}
              <motion.button
                onClick={() => setSelectedImage((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#F26522] hover:scale-110 transition-all duration-300 border border-white/10 opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => setSelectedImage((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#F26522] hover:scale-110 transition-all duration-300 border border-white/10 opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              {/* Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-xs font-medium tracking-[0.3em] font-geometric">
                {String(selectedImage + 1).padStart(2, '0')} / {String(GALLERY_IMAGES.length).padStart(2, '0')}
              </div>
            </div>

            {/* Diamond indicators */}
            <div className="flex items-center justify-center gap-3">
              {GALLERY_IMAGES.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className="relative w-3 h-3 rotate-45"
                  whileHover={{ scale: 1.5 }}
                >
                  <div className={`absolute inset-0 rotate-45 transition-all duration-300 ${
                    selectedImage === idx
                      ? "bg-[#F26522] scale-100"
                      : "bg-white/30 scale-75 hover:bg-white/50"
                  }`} />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Luxury feature cards - circular accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <motion.div
            className="relative p-8 lg:p-10 border border-white/10 hover:border-[#F26522]/30 transition-all duration-500 group overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            custom={2}
            whileHover={{ y: -8 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F26522]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#F26522]/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full border border-[#F26522]/30 flex items-center justify-center mb-6 group-hover:border-[#F26522] group-hover:bg-[#F26522]/10 transition-all duration-300">
                <Sparkles className="w-6 h-6 text-[#F26522]" />
              </div>
              <h4 className="text-white font-bold text-xl mb-3 tracking-tight font-art">Nuestro ecosistema</h4>
              <p className="text-white/50 text-sm leading-relaxed font-geometric">
                Diseño, instalación y mantenimiento integral de sistemas solares fotovoltaicos para todo tipo de proyectos.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative p-8 lg:p-10 border border-white/10 hover:border-[#E8704E]/30 transition-all duration-500 group overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            custom={3}
            whileHover={{ y: -8 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8704E]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#E8704E]/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full border border-[#E8704E]/30 flex items-center justify-center mb-6 group-hover:border-[#E8704E] group-hover:bg-[#E8704E]/10 transition-all duration-300">
                <Wand2 className="w-6 h-6 text-[#E8704E]" />
              </div>
              <h4 className="text-white font-bold text-xl mb-3 tracking-tight font-art">Compromiso</h4>
              <p className="text-white/50 text-sm leading-relaxed font-geometric">
                Resultados medibles, sostenibilidad a largo plazo y acompañamiento continuo en cada etapa del proyecto.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
