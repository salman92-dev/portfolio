"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Input from "../components/Input";
import Toast from "../components/Toast";
/* ----------------------------------------
   Reusable FadeUpOnView Wrapper
----------------------------------------- */
const FadeUpOnView = ({ children, delay = 0 }) => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px", // trigger slightly earlier
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

/* ----------------------------------------
   Contact Form Component
----------------------------------------- */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (!res.ok) {
      setError(true);
      return;
    }

    setSuccess(true);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <form onSubmit={handleSubmit} className="flex flex-col md:gap:8 gap-12">
        {/* Name & Company */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-8">
          <FadeUpOnView delay={0.05}>
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </FadeUpOnView>

          <FadeUpOnView delay={0.1}>
            <Input
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />
          </FadeUpOnView>
        </div>

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-8">
          <FadeUpOnView delay={0.15}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </FadeUpOnView>

          <FadeUpOnView delay={0.2}>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FadeUpOnView>
        </div>

        {/* Message */}
        <FadeUpOnView delay={0.25}>
          <div className="w-full relative">
            <textarea
              name="message"
              placeholder="A few words about the project..."
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full text-black text-xl syne py-4 bg-transparent
                         border-b-2 border-black/40 focus:border-black
                         transition-all focus:outline-none"
                         style={{fieldSizing:"content",resize:"none"}}
            />
          </div>
        </FadeUpOnView>

        {/* Submit Button */}
        <FadeUpOnView delay={0.3}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            disabled={loading}
            className="syne text-xl w-fit px-12 py-4 bg-black text-white
                       rounded-full hover:bg-white hover:text-black
                       border border-black transition-all"
          >
            {loading ? "Sending..." : "Submit"}
          </motion.button>
        </FadeUpOnView>

        {/* Status Messages */}
        {success && (
          <Toast text="Message sent successfully 🚀" type="success"/>
        )}
        {error && (
          <Toast text="Message could not be sent ⚠️" type="error" />
        )}
      </form>
    </div>
  );
};

export default ContactForm;
