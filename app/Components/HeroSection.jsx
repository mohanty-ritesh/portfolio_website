"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="h-auto min-h-[90vh] flex items-center justify-center py-16 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-12 sm:col-span-7 place-self-center text-center sm:text-left px-4 sm:px-0 sm:pl-7"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fddd58]  to-[#fd914d]">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ritesh Mohanty.",
                1000,
                "A Full Stack Dev.",
                1000,
                "A Web Dev.",
                1000,
                "A Web Designer.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] py-5 text-base sm:text-lg lg:text-xl xl:text-xl mb-6">
            Hello! I'm Ritesh, a passionate and dedicated MERN stack developer
            with a strong foundation in web application development.
            Welcome to my portfolio. Scroll down to discover more about my projects, skills. Let's connect and create something amazing together !😊 

          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#fddd58] to-[#fd914d] hover:bg-slate-200 text-slate-800 font-bold"
              onClick={() => {
                const targetElement = document.getElementById("get_in_touch");
                if (targetElement) {
                  const offset = 70; 
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
            >
              Hire Me
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="/Images/RITESH RESUME.pdf"
              download="RITESH RESUME.pdf"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent text-white border border-white hover:bg-slate-800 hover:border-gray-300 transition-colors duration-250 inline-block text-center"
            >
              Download my CV
            </motion.a>
          </div>
        </motion.div>
        <div className="col-span-12 sm:col-span-5 place-self-center mt-8 sm:mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="rounded-full bg-[#181818] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] relative overflow-hidden"
          >
            <Image
              src="/Images/reps.png"
              alt="heroimg"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={320} // Adjusted base width
              height={320} // Adjusted base height
              priority // Added for LCP
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
