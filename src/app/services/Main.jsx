"use client"
import { motion } from "framer-motion";
import TextType from "../components/TextTyping";
const Main = () => {
    return (
        <>
            <section className="2xl:container mx-auto px-6 md:px-12 max-w-8xl pt-24 md:pt-32 relative mb-16 md:mb-24">
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
                            Services
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
                                {/* <TextType
                                cursorCharacter='|'
                                text={["New standards in digital excellence"]}
                                typingSpeed={80}
                                cursorClassName="text-[#9f8be7]"
                                className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl funnel font-bold text-gray-900"
                                /> */}
                                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl funnel font-bold text-gray-900">
                                    New standards in digital excellence
                                </h1>
                            </motion.div>

                            <div className="text-black/80 text-2xl md:text-2xl mt-12 space-y-8">
                                {[
                                "I build modern, fast, and scalable digital solutions that help businesses grow. From turning designs into clean code to developing full-stack applications, every project is crafted with precision and performance in mind.",
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
                            </div>
                        </div>
                    </motion.div>
            </section>
        </>
    )
}
export default Main;