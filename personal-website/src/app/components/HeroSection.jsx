"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen py-8 px-4 xl:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Hello, I'm </span> <br />
            <TypeAnimation sequence={["Iqyan", 1000, "Web Developer", 1000, "Fullstack Web", 1000, "UI/UX Designer", 1000]} wrapper="span" speed={50} repeat={Infinity} />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, in.</p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 text-white bg-gradient-to-br from-primary-500  to-secondary-500 hover:bg-slate-200">Hire Me</button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit text-white bg-gradient-to-br from-primary-500  to-secondary-500 hover:bg-slate-800 mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image src="/images/hero-image.png" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="hero image" width={300} height={300} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
