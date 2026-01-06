"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-4 mx-4 md:mx-16 rounded-full bg-white/90 backdrop-blur-xl shadow-lg py-3"
            : "top-0 py-6"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-8">
          {/* LOGO */}
          <motion.a
            href="/"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <span className="text-white font-bold text-xl syne">S</span>
            </div>
            <span className="font-bold text-xl text-black syne">salman</span>
          </motion.a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-14">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative text-lg text-black/80 hover:text-black transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
            <motion.a
            href="https://wa.me/923241161920?text=Hello%20Salman%2C%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-10 py-2.5 rounded-full border-2 border-black 
                        text-black text-lg hover:bg-black hover:text-white transition-all"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            >
            Let’s Talk
            </motion.a>


          {/* MOBILE BUTTON */}
          <motion.button
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            className="md:hidden w-11 text-black h-11 rounded-full border border-black/20 flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white"
          >
            <motion.nav
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center h-full gap-10"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-4xl syne font-bold text-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
