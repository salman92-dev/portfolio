"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Input from "../components/Input";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: "easeOut" },
  }),
};

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
    console.log(formData);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if(!res.ok){
      setError(true);
    }
    if (res.ok) {
      setSuccess(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto mt-12"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
          <Input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <Input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="w-full relative">
        <textarea
          name="message"
          placeholder="A few words about the project..."
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full text-black focus:placeholder:text-black text-xl syne py-4 bg-transparent border-b-2 border-black/40 focus:border-black transition-all focus:outline-none"
        />
        <span className="absolute left-0 -bottom-[2px] h-[1px] w-0 bg-black transition-all duration-300 peer-focus:w-full" />
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          disabled={loading}
          className="syne text-xl w-fit px-12 py-4 bg-black text-white rounded-full
                     hover:bg-white hover:text-black border border-black transition-all"
        >
          {loading ? "Sending..." : "Submit"}
        </motion.button>

        {success && (
          <p className="text-green-600 text-lg syne">
            Message sent successfully 🚀
          </p>
        )}
        {error && (
          <p className="text-red-600 text-lg syne">
            Message could not sent.⚠️
          </p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
