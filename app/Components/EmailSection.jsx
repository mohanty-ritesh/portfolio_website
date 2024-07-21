"use client"
import React, { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";

const EmailSection = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true });
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const formVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate an error for demonstration purposes
    setShowErrorPopup(true);

    // Your existing form handling logic...
    // const data={
    //   namee:e.target.namee, 
    //   email:e.target.email, 
    //   phone:e.target.phone, 
    //   message:e.target.message
    // }
    // const JSONdata=JSON.stringify(data);
    // const endpoint="/api/send";
    // const options={
    //   method:'POST',
    //   headers:{'Content-Type':'application/json',},
    //   body:JSONdata
    // };
    // const response=await fetch(endpoint, options);
    // const resData=await response.json();
    // console.log(resData);
    // if(resData.Status==200){
    //   console.log("message sent.");
    // }
  };

  const closePopup = () => {
    setShowErrorPopup(false);
  };

  return (
    <section className="px-3 py-2 bg-gradient-to-r from-[#d5ced6] to-[#d8a5ff] flex justify-center items-center h-screen">
      <motion.form
        ref={formRef}
        variants={formVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3 }}
        className="border-4 w-full border-[#17131372] px-[6%] lg:h-[90%] lg:w-[40%] sm:h-[80%] sm:w-[50%] py-8 shadow-[#17131372] bg-[#e4dce4ca] shadow-md flex flex-col justify-center items-center rounded-xl"
      >
        <div className="xl:text-4xl text-2xl md:text-3xl text-left text-[#152123] font-bold mb-7">
          <h1>Get in Touch...</h1>
        </div>
        <input className="text-xl bg-[#eeeaedde] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-4 px-3 placeholder-gray-600 w-full" name='namee' type="text" id="namee" placeholder="Your name" required />
        <input className="text-xl bg-[#eeeaedde] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-4 px-3 placeholder-gray-600 w-full" name='email' type="email" id="email" placeholder="Your email" required />
        <input className="text-xl bg-[#eeeaedde] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-4 px-3 placeholder-gray-600 w-full" name='phone' type="text" id="phone" placeholder="Your Phone no." required />
        <textarea className="bg-[#eeeaedde] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-3 px-3 resize-none placeholder-gray-600 w-full" name='message' id="message" placeholder="Say Hi..." ></textarea>
        <input className="border-2 border-[#630817] font-bold rounded-3xl bg-[#f25454] text-[#630817] px-8 py-2 my-5 hover:cursor-pointer" type="button" value="Button" onClick={handleSubmit} />
      </motion.form>
      {showErrorPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl text-red-500 font-bold mb-4 ">Error!!</h2>
            <p className='text-black'>There was an error submitting the form. Please try again.</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default EmailSection;
