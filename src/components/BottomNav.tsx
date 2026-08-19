import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export function BottomNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="sec-016" className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute bottom-20 left-0 mb-3"
          >
            <div className="relative bg-gray-900 rounded-2xl p-5 min-w-[220px] border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white font-geometric">WhatsApp</p>
                  <p className="text-xs text-white/60 font-geometric">350-8336293</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-auto w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
              <a
                href="https://wa.me/573508336293"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-xl transition-colors duration-200 font-geometric"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir chat</span>
              </a>
            </div>
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-gray-900 border-r border-b border-white/10 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-gray-900 hover:bg-gray-800 text-white flex items-center justify-center transition-colors duration-300 cursor-pointer border border-white/10"
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-gray-900">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </span>
      </motion.button>
    </div>
  );
}
