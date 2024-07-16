"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="h-[95vh] flex justify-center pt-18 lg:pt-2 ">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-7 place-self-center text-center pl-7  sm:text-left"
        >
          <h1 className="text-white mb-4   text-4xl sm:text-4xl sm:mb-1 p-auto lg:text-8xl xl:text-8xl font-extrabold">
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
          <button
  className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-[#fddd58] to-[#fd914d] hover:bg-slate-200 sm:w-fit text-slate-800 font-bold"
  onClick={() => {
    const targetElement = document.getElementById("get_in_touch");
    if (targetElement) {
      const offset = 70; // Adjust this value based on your fixed header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }}
>
  Hire Me
</button>
<a
  href="/Images/RITESH RESUME.pdf"
  download="RITESH RESUME.pdf"
  className="px-6 py-3 rounded-full mr-4 bg-transparent text-white border border-white hover:bg-slate-800 hover:border-gray-300 sm:w-fit mt-3 transition-colors duration-250 inline-block text-center"
>
  Download my CV
</a>


        </motion.div>
        <div className="col-span-5 place-self-center py-5 mt-auto  ml-3 lg:mt-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="rounded-full  sm:block   w-[230px] h-[230px]   lg:w-[350px] lg:h-[400px] relative "
          >
            <Image
              src="/Images/reps.png"
              alt="heroimg"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  w-60 h-65 sm:w-60 sm:h-65 md:w-60 md:h-65 lg:w-95 lg:h-100 xl:w-96 xl:h-101"
              width={340}
              height={340}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
