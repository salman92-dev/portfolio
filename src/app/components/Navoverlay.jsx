"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const menuItems = [
  "Main home",
  "Software development company",
  "Freelancer portfolio",
  "Digital agency",
  "Creative design studio",
  "Personal portfolio",
  "Web agency",
  "Creative developer",
];

export default function NavOverlay({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        >
          {/* Panel */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative mx-auto mt-10 h-[90%] w-[95%] rounded-3xl bg-neutral-900 p-10 text-white"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6"
            >
              <X size={26} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Left */}
              <div>
                <p className="text-sm text-neutral-400 mb-6">
                  🚀 Innovative design <br /> and cutting-edge development
                </p>

                <h1 className="text-5xl font-bold mb-6">Home</h1>

                <ul className="space-y-3 text-lg">
                  {menuItems.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="cursor-pointer text-neutral-300 hover:text-white"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right */}
              <div className="hidden md:flex items-center justify-center">
                <div className="rounded-2xl bg-neutral-200 p-6">
                  <div className="h-56 w-56 bg-neutral-400 rounded-xl" />
                </div>
              </div>
            </div>

            <p className="absolute bottom-6 left-10 text-xs text-neutral-400">
              Made with 💛 by ib themes
            </p>

            <p className="absolute bottom-6 right-10 text-xs text-neutral-400">
              © 2025
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
