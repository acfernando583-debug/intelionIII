import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const PRODUCTS = [
  {
    title: "Paneles Solares",
    description:
      "Alta eficiencia y durabilidad con tecnología de punta para máxima generación de energía.",
    image: "/images/products/product-panels.jpg",
  },
  {
    title: "Inversores",
    description:
      "Conversión inteligente de energía DC a AC con marcas líderes en el mercado.",
    image: "/images/products/product-inverter.jpg",
  },
  {
    title: "Baterías",
    description:
      "Almacenamiento de energía para respaldo y autonomía en sistemas híbridos y aislados.",
    image: "/images/products/product-battery.jpg",
  },
];

export function TestimonialCarousel() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section id="sec-011" ref={ref} className="bg-white px-0 py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Header */}
        <motion.div
          className="px-6 mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
            <span className="text-[#F26522] text-xs font-semibold tracking-[0.3em] uppercase font-geometric">
              Tecnología
            </span>
            <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight font-art">
            Nuestra <span className="text-[#F26522] font-hero italic">tecnología</span>
          </h2>
        </motion.div>

        {/* Three equal columns - full width, no gap */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200/60"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={i}
              className="relative h-full min-h-[480px] group cursor-pointer"
              whileHover={{ 
                scale: 1.02,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
              style={{ 
                transformOrigin: "center center",
              }}
            >
              {/* Image - full bleed within column */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content - bottom aligned */}
              <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
                <div>
                  <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase font-geometric mb-3 block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl font-bold text-white tracking-tight leading-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Minimal CTA */}
                <motion.div
                  className="inline-flex items-center gap-2 text-sm font-medium text-white mt-6"
                  whileHover={{ x: 8 }}
                >
                  <span className="relative">
                    <span className="relative z-10">Explorar</span>
                    <motion.span
                      className="absolute bottom-0 left-0 h-[1px] bg-[#F26522]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-4 h-4 text-[#F26522]" />
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
