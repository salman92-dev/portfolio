"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const toastConfig = {
  success: {
    bg: "bg-[#ddf160]",
    bar: "bg-green-400",
    icon: "✅",
  },
  error: {
    bg: "bg-red-500/90",
  },
  info: {
    bg: "bg-blue-500/90",
  },
  warning: {
    bg: "bg-yellow-400/90 text-black",
  },
};

const Toast = ({ text, type = "success" }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed top-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`relative min-w-[280px] rounded-xl shadow-xl
              backdrop-blur-md border border-white/20
              ${toastConfig[type].bg}`}
          >
            {/* Accent Bar */}

            <div className="flex items-start gap-4 px-5 py-4">

              {/* Content */}
              <p className="text-lg text-black syne leading-relaxed flex-1">
                {text}
              </p>

              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="text-black/80 hover:text-black transition cursor-pointer"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
