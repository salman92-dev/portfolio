"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
        <Navbar/>
        <div className="flex items-center justify-center min-h-screen">
      <motion.h2
        className="text-black text-[10vw] font-bold syne"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Coming Soon!
      </motion.h2>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
