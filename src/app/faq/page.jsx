"use client"
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import FAQ from "./faqs";
import ParallyxImage from "./ParallyxImage";
import ContactForProject from "../contact/contacForProject";
import { motion } from "framer-motion";
const FAQPage = () => {
    return (
        <>
        <Navbar />
        <div>
        <h3 className="flex items-center gap-2 text-2xl funnel text-black absolute top-28 left-6 lg:top-48 lg:left-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 text-black" style={{opacity: 1, transform: "none"}}><path d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                FAQ
        </h3>
        <div className="2xl:container mx-auto max-w-5xl md:px-16 py-32 md:py-20">
            <div className="container mx-auto px-6 pt-12 md:pt-22">
                <motion.h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold syne text-black mb-10 !leading-[120%]"
                initial={{opacity:0, y:30,filter: "blur(5px)"}}
                whileInView={{opacity:1,y:0,filter: "blur(0)"}}
                viewport={{once:true}}
                transition={{
                type: "linear",
                duration:0.3,
                }}
                >
                    Everything you needs to know
                </motion.h1>
                <motion.p className="text-xl md:text-2xl text-black funnel mb-10 leading-[170%]"
                initial={{opacity:0, y:30,filter: "blur(5px)"}}
                whileInView={{opacity:1,y:0,filter: "blur(0)"}}
                viewport={{once:true}}
                transition={{
                type: "linear",
                duration:0.5,
                }}
                >Have questions? {`We've`} got the answers! Here, {`you'll`} find clear and concise information about our services, process, and what to expect when working with us. If you need more details, feel free to reach out!
                </motion.p>
                <div className="space-y-6">
                    <FAQ />
                </div>
            </div>
        </div>
        <ParallyxImage />
        <ContactForProject />
        <Footer />
        </div>
        </>
    );
}
export default FAQPage;