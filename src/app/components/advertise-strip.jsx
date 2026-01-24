"use client";
import FastMarquee from "./marquee";
import { motion, spring } from "framer-motion";

const PlusIcon = () => (
  <motion.svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
              animate={{ rotate:-360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            // transition={{repeat:Infinity, type: spring, stiffness:10, damping:20}}
            >
              <path
                d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </motion.svg>
);

const item = [
    <span className="hover:text-black/50 text-[#9f8be7] transition-colors duration-500 flex items-center gap-2" key="brand"><PlusIcon /> Your Brand </span>,
    <span className="hover:text-black/50 text-[#9f8be7] transition-colors duration-500 flex items-center gap-2" key="story"><PlusIcon /> Your Story </span>,
    <span className="hover:text-black/50 text-[#9f8be7] transition-colors duration-500 flex items-center gap-2" key="future"><PlusIcon /> Your Future </span>,
    <span className="hover:text-black/50 text-[#9f8be7] transition-colors duration-500 flex items-center gap-2" key="world"><PlusIcon /> Your World </span>,
    <span className="hover:text-black/50 text-[#9f8be7] transition-colors duration-500 flex items-center gap-2" key="vision"><PlusIcon /> Your Vision  </span>,
    <span className="hover:text-black/50 text-[#9f8be7] transition-colors duration-500 flex items-center gap-2" key="dream"><PlusIcon /> Your Dream  </span>,
]


const Advertise = () => {
    return (
        <div className="py-10 md:py-20 border-t border-b border-gray-200 mb-12">
            <FastMarquee
                items={item}
                className="text-4xl md:text-7xl syne text-black/40 overflow-hidden"
                pauseOnHover={false}
                speed={100}
            />
        </div>
    )
}
export default Advertise;