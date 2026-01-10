"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const float = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const ContactForProject = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative 2xl:container mx-auto bg-black flex flex-col justify-center 
                 p-6 py-18 md:py-24 md:p-12 rounded-4xl 
                 max-sm:mx-4 max-2xl:mx-20 overflow-hidden"
    >
      {/* Floating spring */}
      <motion.div
        {...float}
        className="absolute right-[6%] bottom-[10%] md:right-[26%] md:bottom-[18%]"
      >
        <Image
          src="/images/spring.webp"
          alt="spring"
          width={120}
          height={120}
          className="w-12 md:w-30"
        />
      </motion.div>

      {/* Floating astronaut */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[6%] md:right-[6%] md:bottom-[18%]"
      >
        <Image
          src="/images/astronaut.webp"
          alt="astronaut"
          width={240}
          height={240}
          className="w-18 md:w-60"
        />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl md:text-5xl lg:text-8xl text-white syne mb-2 md:mb-6 flex items-start gap-2"
      >
        {/* Heart pulse */}
        <motion.span
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="mt-1 md:mt-4"
        >
          <Image
            src="/images/heart-icon.webp"
            alt="heart"
            width={80}
            height={80}
            className="w-8 md:w-24"
          />
        </motion.span>

        {`Let's`} talk about
      </motion.h2>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="text-3xl md:text-5xl lg:text-8xl text-white syne mb-6 md:mb-12"
      >
        your project!
      </motion.h2>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.06,rotate : -3 }}
        whileTap={{ scale: 0.96 }}
        className="group w-fit py-5 px-8 text-xl md:text-2xl syne 
                   rounded-full text-black bg-[#ddf160]  cursor-pointer 
                   flex items-center gap-2 transition-shadow hover:shadow-xl"
      >
        Contact Me
        <motion.span
          className="inline-flex"
          whileHover={{ x: 6, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ArrowUpRight size={26} />
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default ContactForProject;
