"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar2";
import Main from "./Main";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="overflow-hidden">
        <Navbar/>
        <Main />
        <h2 className="fixed z-[40] top-[30%] left-[2%] md:left-[20%] text-[6vw] font-bold text-center funnel max-w-4xl mx-auto p-6 border-5 border-[#000] bg-black text-white rounded-4xl">This page is In Development</h2>
        <Footer/>
    </div>
  );
};

export default Services;
