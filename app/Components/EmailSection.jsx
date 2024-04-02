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
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const data={
      namee:e.target.namee, 
      email:e.target.email, 
      phone:e.target.phone, 
      message:e.target.message
    }
    const JSONdata=JSON.stringify(data);
    const endpoint="/api/send";
    const options={
      method:'POST',
      headers:{'Content-Type':'application/json',},
      body:JSONdata
    };
    const response=await fetch(endpoint, options);
    const resData=await response.json();
    console.log(resData);
    if(resData.Status==200){
      console.log("message sent.");
    }
  }
  return (
    <section className=" px-3 bg-gradient-to-r from-[#151414] to-[#8c0dd09b] flex justify-center items-center h-screen">
      <motion.form
        ref={formRef}
        variants={formVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"} // Animate based on visibility
        transition={{ duration: 0.3 }}
        className="border-4 w-full border-[#17131372] px-5 lg:h-[80%] lg:w-[40%] sm:h-[65%] sm:w-[50%] py-8 shadow-[#17131372] bg-[#e4dce4ca]  shadow-md flex flex-col justify-center items-center  sm:px-8 md:px-12 lg:px-16 xl:px-20 rounded-xl " // Adjust width for larger screens
        // style={{ height: 'calc(10/12 * 100vh)' }}
      >
        <div className="xl:text-4xl text-2xl md:text-3xl text-left text-[#152123]  font-bold mb-8  "><h1 >Get in Touch...</h1> </div>
        <input className="text-xl bg-[#dad7d9] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-4 px-3 placeholder-gray-600 w-full" name='namee' type="text" id="namee" placeholder="Your name" required />
        <input className="text-xl bg-[#dad7d9] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-4 px-3 placeholder-gray-600 w-full" name='email' type="email" id="email" placeholder="Your email" required />
        <input className="text-xl bg-[#dad7d9] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-4 px-3 placeholder-gray-600 w-full" name='phone' type="text" id="phone" placeholder="Your Phone no." required />
        <textarea className=" bg-[#dad7d9] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-3 px-3 h-60 resize-none placeholder-gray-600 w-full" name='message' id="message" placeholder="Your Message..." ></textarea>
        <input className="border-2 border-[#630817] font-bold rounded-3xl bg-[#f25454] text-[#630817] px-8 py-2 my-5 hover:cursor-pointer" type="button" value="Button" onClick={handleSubmit} />
      </motion.form>
    </section>
  );
};

export default EmailSection;

