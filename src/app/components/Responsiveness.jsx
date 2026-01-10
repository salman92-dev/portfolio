"use client";
import { useState,useEffect,useRef } from 'react';
import React from 'react';
import { CiMobile2 } from "react-icons/ci";
import { BsTablet } from "react-icons/bs";
import { PiLaptop } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const devices = [
  { icon: CiMobile2, label: "Smartphone" },
  { icon: BsTablet, label: "Tablet" },
  { icon: PiLaptop, label: "Laptop" },
  { icon: HiOutlineComputerDesktop, label: "Desktop" },
];


const Responsiveness = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            const sectionTop = rect.top;
            const start = windowHeight * 0.8;
            const end = windowHeight * 0.2;
            
            if (sectionTop > start) {
                setScrollProgress(0);
            } else if (sectionTop <= end) {
                setScrollProgress(1);
            } else {
                const progress = (start - sectionTop) / (start - end);
                setScrollProgress(Math.max(0, Math.min(1, progress)));
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const textProgress = Math.min(1, scrollProgress * 1.5);
    const imageProgress = Math.max(0, (scrollProgress - 0.3) * 1.5);

    return (
        <section 
            ref={sectionRef}
            className="2xl:container mx-auto px-6 md:px-10 flex flex-col-reverse max-md:gap-8 md:flex-row items-center justify-between py-20 overflow-hidden"
        >
            <div 
                className="w-full md:w-[48%]"
                style={{
                    opacity: textProgress,
                    transform: `translateX(${(1 - textProgress) * -50}px)`,
                    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
                }}
            >
                <h1 
                    className="text-3xl md:text-6xl text-black syne mb-8"
                    style={{
                        opacity: textProgress,
                        transform: `translateY(${(1 - textProgress) * 30}px)`,
                        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out'
                    }}
                >
                    Responsive Design
                </h1>
                <p 
                    className="text-black/60 text-lg md:text-xl funnel max-w-2xl mx-auto mb-2"
                    style={{
                        opacity: Math.max(0, (textProgress - 0.2) * 1.5),
                        transform: `translateY(${(1 - Math.max(0, (textProgress - 0.2) * 1.5)) * 20}px)`,
                        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
                        transitionDelay: '0.1s'
                    }}
                >
                    Fully responsive and pixel-perfect websites looks great on any device. Your site stays stunning and functional everywhere.
                </p>
                <p 
                    className="text-black/60 text-lg md:text-xl funnel max-w-2xl mx-auto"
                    style={{
                        opacity: Math.max(0, (textProgress - 0.4) * 1.5),
                        transform: `translateY(${(1 - Math.max(0, (textProgress - 0.4) * 1.5)) * 20}px)`,
                        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
                        transitionDelay: '0.2s'
                    }}
                >
                    Experience seamless browsing on desktops, tablets, and smartphones with our expertly crafted responsive designs.
                </p>
                <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap items-center max-md:justify-between gap-12 mt-12"
            >
            {devices.map(({ icon: Icon, label }, index) => (
                <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center w-[40%] md:w-[10%]"
                >
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="border-2 border-black/40 p-4 rounded-[40%]"
                >
                    <Icon size={36} className="text-black/40" />
                </motion.div>

                <p className="text-lg text-black funnel mt-2">{label}</p>
                </motion.div>
            ))}
            </motion.div>
            </div>
            <div 
                className="w-full md:w-[48%]"
                style={{
                    opacity: imageProgress,
                    transform: `translateX(${(1 - imageProgress) * 50}px) scale(${0.95 + imageProgress * 0.05})`,
                    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}
            >
                <div className="relative overflow-hidden rounded-xl">
                    <img 
                        src="/images/responsiveness2.png" 
                        alt="Responsiveness Illustration" 
                        className="w-full h-auto rounded-xl"
                        style={{
                            filter: `blur(${(1 - imageProgress) * 10}px)`,
                            transition: 'filter 0.5s ease-out'
                        }}
                    />
                    <div 
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl"
                        style={{
                            opacity: 1 - imageProgress,
                            transition: 'opacity 0.5s ease-out'
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Responsiveness;