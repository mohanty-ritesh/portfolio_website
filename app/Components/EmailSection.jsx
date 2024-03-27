"use client"
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

const EmailSection = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true }); // Trigger animation once

  const formVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="ContactMe bg-gradient-to-r from-[#c5c0c1] to-[#8e779a] flex justify-center items-center w-screen h-screen">
      <motion.form
        ref={formRef}
        variants={formVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"} // Animate based on visibility
        transition={{ duration: 0.3 }}
        className="border-4 border-[#17131372] shadow-[#17131372] bg-[#eeeaea] shadow-md flex flex-col justify-center items-center py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 rounded-xl lg:w-5/12 xl:w-4/12" // Adjust width for larger screens
        style={{ height: 'calc(10/12 * 100vh)' }}
      >
        <h1 className="text-4xl text-[#152123] font-bold mb-8">Get in Touch...</h1>
        <input className="bg-[#A9A7B5] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-4 px-3 placeholder-gray-600 w-full" type="text" id="namee" placeholder="Your name" required />
        <input className="bg-[#A9A7B5] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-4 px-3 placeholder-gray-600 w-full" type="email" id="email" placeholder="Your email" required />
        <input className="bg-[#A9A7B5] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-4 px-3 placeholder-gray-600 w-full" type="text" id="phone" placeholder="Your Phone no." required />
        <textarea className="bg-[#A9A7B5] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-3 px-3 h-60 resize-none placeholder-gray-600 w-full" id="message" placeholder="Your Message..." ></textarea>
        <input className="border-2 border-[#630817] font-bold rounded-3xl bg-[#f25454] text-[#630817] px-8 py-2 my-5 hover:cursor-pointer" type="button" value="Button" />
      </motion.form>
    </section>
  );
};

export default EmailSection;

