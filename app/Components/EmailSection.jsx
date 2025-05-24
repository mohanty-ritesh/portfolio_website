"use client"
import React, { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";

const EmailSection = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.2 }); // Trigger when 20% visible
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2, duration: 0.4, ease:"easeOut" },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
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
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#d5ced6] to-[#d8a5ff] flex justify-center items-center min-h-screen">
      <motion.form
        ref={formRef}
        variants={formContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="border-4 w-full max-w-xl border-[#17131372] p-6 sm:p-8 md:p-10 shadow-[#17131372] bg-[#e4dce4ca] shadow-md flex flex-col justify-center items-center rounded-xl"
      >
        <motion.div variants={formItemVariants} className="text-2xl sm:text-3xl lg:text-4xl text-center text-[#152123] font-bold mb-6 sm:mb-8 w-full">
          <h1>Get in Touch...</h1>

        </div>
        <motion.input whileFocus={{ scale: 1.02, borderColor: "#fd914d", boxShadow: "0 0 8px rgba(253, 145, 77, 0.5)" }} transition={{ duration: 0.2 }} className="text-xl bg-[#eeeaedde] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-4 px-3 placeholder-gray-600 w-full" name='namee' type="text" id="namee" placeholder="Your name" required />
        <motion.input whileFocus={{ scale: 1.02, borderColor: "#fd914d", boxShadow: "0 0 8px rgba(253, 145, 77, 0.5)" }} transition={{ duration: 0.2 }} className="text-xl bg-[#eeeaedde] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-4 px-3 placeholder-gray-600 w-full" name='email' type="email" id="email" placeholder="Your email" required />
        <motion.input whileFocus={{ scale: 1.02, borderColor: "#fd914d", boxShadow: "0 0 8px rgba(253, 145, 77, 0.5)" }} transition={{ duration: 0.2 }} className="text-xl bg-[#eeeaedde] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-4 px-3 placeholder-gray-600 w-full" name='phone' type="text" id="phone" placeholder="Your Phone no." required />
        <motion.textarea whileFocus={{ scale: 1.02, borderColor: "#fd914d", boxShadow: "0 0 8px rgba(253, 145, 77, 0.5)" }} transition={{ duration: 0.2 }} className="bg-[#eeeaedde] border-2 border-black rounded-lg outline-none text-[#2c2c2e] mb-4 py-3 px-3 resize-none placeholder-gray-600 w-full" name='message' id="message" placeholder="Say Hi..." ></motion.textarea>
        <motion.input whileHover={{ scale: 1.05, backgroundColor: "#f04040" }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300, damping: 10 }} className="border-2 border-[#630817] font-bold rounded-3xl bg-[#f25454] text-[#630817] px-8 py-2 my-5 hover:cursor-pointer" type="button" value="Button" onClick={handleSubmit} />


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
