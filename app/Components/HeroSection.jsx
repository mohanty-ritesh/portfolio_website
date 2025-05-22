"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 md:pt-18 lg:pt-2">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-12 gap-x-6 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={textContainerVariants}
          className="col-span-12 sm:col-span-7 place-self-center text-center px-4 sm:text-left sm:px-0"
        >
          <motion.h1
            variants={textItemVariants}
            className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fddd58] to-[#fd914d]">
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
          </motion.h1>

          <motion.p
            variants={textItemVariants}
            className="text-[#ADB7BE] py-3 sm:py-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl mb-4 sm:mb-6"
          >
            Hello! I'm Ritesh, a passionate and dedicated MERN stack developer
            with a strong foundation in web application development. Welcome to
            my portfolio. Scroll down to discover more about my projects,
            skills. Let's connect and create something amazing together! 😊
          </motion.p>

          <motion.div
            variants={textItemVariants}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
          >
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#fddd58] to-[#fd914d] hover:bg-slate-200 text-slate-800 font-bold"
              onClick={() => {
                const targetElement = document.getElementById("get_in_touch");
                if (targetElement) {
                  const offset = 70;
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Hire Me
            </button>
            <a
              href="/Images/RITESH RESUME.pdf"
              download="RITESH RESUME.pdf"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent text-white border border-white hover:bg-slate-800 hover:border-gray-300 transition-colors duration-250 inline-block text-center"
            >
              Download my CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          className="col-span-12 sm:col-span-5 place-self-center mt-8 sm:mt-0"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] relative overflow-hidden"
          >
            <Image
              src="/Images/reps.png"
              alt="heroimg"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
