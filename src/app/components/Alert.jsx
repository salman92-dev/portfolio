"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AUTO_CLOSE_TIME = 6000; // 6 seconds
const STORAGE_KEY = "dev_modal_seen";

export default function ProjectMarquee() {
  const modalRef = useRef(null);

  // ✅ Show only once per visitor (NO useEffect)
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;

    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      localStorage.setItem(STORAGE_KEY, "true");
      return true;
    }
    return false;
  });

  // ✅ Auto close
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      setOpen(false);
    }, AUTO_CLOSE_TIME);

    return () => clearTimeout(timer);
  }, [open]);

  // ✅ ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ✅ Outside click
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={handleOutsideClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[99] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-full max-w-md rounded-3xl bg-neutral-900 p-8 text-center shadow-2xl"
          >
            {/* Close */}
            <button
              aria-label="Close modal"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 text-gray-400 hover:text-white transition"
            >
              ✕
            </button>

            {/* Content */}
            <h3 className="text-3xl font-semibold text-white syne">
              🚧 Under Development
            </h3>

            <p className="mt-4 text-gray-300 funnel leading-relaxed">
              This website is currently in development.
              Some features may not work as expected.
            </p>

            {/* Progress Bar */}
            <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-gray-700">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{
                  duration: AUTO_CLOSE_TIME / 1000,
                  ease: "linear",
                }}
                className="h-full bg-white"
              />
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(false)}
              className="mt-6 rounded-xl bg-white px-6 py-3 text-sm font-medium text-black"
            >
              Got it
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
