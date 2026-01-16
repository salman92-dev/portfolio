"use client";
import ProjectMarquee from "./ProjectMarquee";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="work"
      className="2xl:container mx-auto px-6 md:px-10 relative overflow-hidden bg-white py-12 md:py-16 mb-16 md:mb-24 lg:mb-36"
    >
         <motion.div
      className="absolute w-40 md:w-58 right-0 md:right-12 md:top-4"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 4, // speed (lower = faster)
        ease: "linear",
      }}
    >
      <Image
        src="/images/wood-star2.png"
        alt="Projects"
        width={800}
        height={600}
      />
    </motion.div>
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#000_4px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]" />

      {/* Container */}
      <div className="relative z-10 px-4">
        
        {/* Heading */}
        <div className="overflow-hidden">
          <motion.h2 className="relative inline-block text-4xl md:text-6xl font-semibold syne text-black text-center mx-auto"
          initial={{y:30,opacity:0}}
          whileInView={{y:0,opacity:1}}
          viewport={{once:true}}
          transition={{
            duration:0.4,
            ease:"linear"
          }}
          >
            Projects
          </motion.h2>
        </div>

        {/* Frame */}
        <div className="relative mt-20 border border-black/10 rounded-3xl py-6 md:py-10">
          
          {/* Corner accents */}
          <span className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-black" />
          <span className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-black" />

          {/* Marquee */}
          <ProjectMarquee />
        </div>
      </div>
    </section>
  );
};

export default Projects;
