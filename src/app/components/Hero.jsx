'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FastMarquee from './marquee';
import ScrollReveal from './ScrollrevealText';


const marqueeItems = [
    `your work ✦`,
    `your work ✦`,
    `your work ✦`,
    `your work ✦`,
  ];

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section ref={containerRef} className="relative flex items-center justify-center overflow-hidden pt-50 md:pt-60">
      {/* Floating 3D Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[2%] md:left-[8%] top-[25%] md:top-[20%] w-32 md:w-56 lg:w-72 floating z-0"
        >
        <motion.img
            src="/images/heart.webp"
            alt=""
            className="w-full h-auto drop-shadow-2xl"
            // entrance animation
            initial={{ opacity: 0, rotate: 10 }}
            animate={{
            scale: [0.8, 1, 0.8, 1, 0.8], // heartbeat thump
            y: [0, -5, 0, -5, 0],  
            opacity:1     // subtle bounce
            }}
            transition={{
            opacity: { duration: 2, delay: 0.5 },
            scale: {
                duration: 1,      // one beat duration
                repeat: Infinity, // infinite heartbeat
                repeatDelay: 0.2, // pause between beats
                ease: "easeInOut",
            },
            y: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0.2,
                ease: "easeInOut",
            },
            }}
        />
        </motion.div>


      <motion.div
        style={{ y: y2 }}
        className="absolute right-[2%] md:right-[8%] top-[12%] md:top-[10%] w-28 md:w-44 lg:w-46 z-11"
        >
        <motion.img
            src="/images/astronaut.webp"
            alt=""
            className="w-full h-auto drop-shadow-2xl"

            // entrance animation
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{
            opacity: 1,
            scale: 1,
            rotate: [0, 2, 0, -2, 0],
            y: [0, -12, 0, 12, 0],
            }}
            transition={{
            opacity: { duration: 1, delay: 0.7 },
            scale: { duration: 1, delay: 0.7 },
            rotate: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
            y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
            }}
        />
      </motion.div>


      {/* Main Content */}
      <motion.div
        style={{ scale }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        {/* Main Headline */}
        <div className="space-y-0">
          {/* Line 1: Make your work */}
          <motion.div 
            className="flex flex-wrap max-sm:flex-col items-center justify-center gap-x-3 md:gap-x-6 syne"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black syne leading-none">
              Make
            </h1>
            <FastMarquee items={marqueeItems} speed={250} direction="left" className='max-sm:rotate-[-3deg] overflow-hidden max-w-3xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white rounded-full leading-none syne px-4 md:px-8 py-2 text-background bg-[#9f8be7] ' />
          </motion.div>

          {/* Line 2: ✦ stand out */}
          <motion.div
            className="flex items-center justify-center gap-3 md:gap-6 mt-2 md:mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Star Icon */}
            <motion.svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-black"
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <path
                d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </motion.svg>
            
            <span className="text-[13.5vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black syne leading-none">
              stand out
            </span>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mt-12 md:mt-16 text-xl md:text-lg lg:text-4xl text-[#6d6d78] max-w-5xl mx-auto funnel leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Elevate your digital presence with me - dynamic and stylish template designed for creative agencies and personal brands.
        </motion.p>
        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.a
            href="#work"
            className="px-6 md:px-12 py-4 bg-black border-2 text-white rounded-full funnel text-base md:text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 md:px-12 py-4 border-2 border-black/20 rounded-full text-black hover:bg-black hover:text-white transition-all funnel text-base md:text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;