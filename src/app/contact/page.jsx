"use client";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ParallyxImg from "./parallyximg";
import FastMarquee from "../components/marquee";
import ContactForProject from "./contacForProject";
import ContactForm from "./Contact-form";
import ScrollToTop from "../components/ScrolltoTop";
import WhatsAppButton from "../components/whatsapp";
import FadeText2 from "../components/Fadetext2";
import FadeText from "../components/Fadetext";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const FadeLeft = {
   hidden: { opacity: 0, x: -60 },
  show: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 * i, duration: 0.9, ease: "easeOut" },
  }),
}
const ContactPage = () => {
  return (
    <>
      <Navbar />
        <ScrollToTop />
        <WhatsAppButton/>
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="2xl:container mx-auto px-6 md:px-10 my-20 md:my-22"
      >
        {/* Heading */}
        <div className="max-w-4xl mx-auto">
          <FadeText text="Let's talk about your project!" className="!leading-[110%] text-5xl md:text-8xl font-semibold syne text-black mb-4"/>
          {/* Email */}
          <motion.a
            variants={FadeLeft}
            custom={2}
            href="mailto:contact@salmanlabs.online"
            className="group inline-flex items-center gap-3 text-2xl md:text-6xl text-gray-400 hover:text-[#9f8be7] transition-colors"
          >
            contact@salmanlabs.online
            <ArrowUpRight className="size-8 md:size-28 transition-transform duration-300 group-hover:rotate-45" />
          </motion.a>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-2xl md:text-2xl !leading-[160%] funnel mt-8 text-black mb-12"
          >
            Have questions? {`We've`} got the answers! Here, {`you'll`} find
            clear and concise information about our services, process, and what
            to expect when working with us. If you need more details, feel free
            to reach out!
          </motion.p>
          {/* <FadeText2 text="Have questions? We've got the answers! Here, you'll find
            clear and concise information about our services, process, and what
            to expect when working with us. If you need more details, feel free
            to reach out!" 
            className="text-2xl md:text-2xl !leading-[160%] funnel mt-8 text-black mb-12"
            /> */}
        </div>

        {/* Form */}
        <ContactForm />
      </motion.section>
      <ParallyxImg />
      <FastMarquee 
      items={[
        "✦ Web Design",
        "✦ UI/UX", 
        "✦ Branding", 
        "✦ Illustration", 
        "✦ Animation", 
        "✦ E-commerce", 
        ]}  speed={150} direction="right"  className='overflow-hidden text-black/60 hover:text-[#9f8be7] text-4xl md:text-8xl border-b-1 border-[#9c9c9c] py-12 border-t-1 syne  my-12 '/>
        <ContactForProject />
      <Footer />
    </>
  );
};

export default ContactPage;
