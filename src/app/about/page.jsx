"use client"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar2";
import ApproachSection from "./Approach";
import TechStack from "./Techstack";
import Footer from "../components/Footer";
import TextType from "../components/TextTyping"
import ContactForProject from "../contact/contacForProject";

export default function AboutPage() {
  

  return (
    <>
    <Navbar />
      <section className="2xl:container mx-auto px-6 md:px-12 max-w-8xl pt-24 md:pt-32 relative">
        <motion.div 
          className="relative flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="w-full md:w-[15%] h-auto md:sticky top-30">
            <motion.p 
              className="text-black text-2xl funnel flex items-center gap-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black">
                  <path d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
              </motion.span>
              About me
            </motion.p>
          </div>

          <div className="w-full md:w-[70%]">
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <TextType
                  cursorCharacter='|'
                  text={["Website Developer", "SEO Expert"]}
                  typingSpeed={80}
                  cursorClassName="text-[#9f8be7]"
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900"
                />
              </motion.div>

              <motion.p 
                className="mt-6 text-2xl syne md:text-3xl text-black max-w-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                Turning Figma designs into high-quality Next.js experiences
              </motion.p>

              <div className="text-black/80 text-2xl md:text-2xl mt-12 space-y-8">
                {[
                  "Hey! I am Salman Ahmad. I'm a Next.js developer who specializes in converting Figma designs into fast, responsive, and scalable web applications. I focus on building clean user interfaces that look great and perform exceptionally well.",
                  "My work revolves around modern frontend technologies like Next.js, React, and Tailwind CSS. I follow best practices for component structure, accessibility, and performance to ensure long-term maintainability.",
                  "I enjoy collaborating with designers and product owners to bring ideas to life with pixel-perfect accuracy, smooth animations, and thoughtful user interactions."
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    className="funnel tracking-[1px] leading-[150%]"
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {text.split(' ').map((word, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.2 + idx * 0.03
                        }}
                        className={word === "Next.js" || word === "Figma" ? "font-semibold text-gray-900" : ""}
                      >
                        {word}{' '}
                      </motion.span>
                    ))}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  boxShadow: "0 20px 60px rgba(159, 139, 231, 0.15)"
                }}
                className="bg-gradient-to-br from-gray-50 to-purple-50/30 border border-gray-200 rounded-2xl p-8 h-fit mt-8 backdrop-blur-sm"
              >
                <h3 className="text-2xl syne md:text-4xl font-semibold text-gray-900 mb-6">
                  What I Do
                </h3>

                <ul className="space-y-4 text-black list-disc text-lg tracking-[1px]">
                  {[
                    "Figma to Next.js conversion",
                    "Responsive & mobile-first UI",
                    "Reusable component systems",
                    "Performance & SEO optimization",
                    "Smooth animations & interactions"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                        ease: "easeOut"
                      }}
                      whileHover={{ x: 10, color: "#9f8be7" }}
                      className="list-disc list-outside funnel cursor-default"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      <ApproachSection/>
      <TechStack/>
      <div className="py-4 md:py-12"></div>
      <ContactForProject/>
      <Footer/>
    </>
  );
}