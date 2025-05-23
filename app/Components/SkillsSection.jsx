"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillData = [
  { name: "C++", img: "/Images/c++.png" },
  { name: "JavaScript", img: "/Images/js.png" },
  { name: "HTML", img: "/Images/html.png" },
  { name: "CSS", img: "/Images/css.png" },
  { name: "React JS", img: "/Images/react.png" },
  { name: "Node JS", img: "/Images/node.png" },
  { name: "Tailwind CSS", img: "/Images/tailwind.png" },
  { name: "MongoDB", img: "/Images/mongo.png" },
  { name: "MySQL", img: "/Images/sql.png" },
  { name: "Git VCS", img: "/Images/git.png" },
  { name: "GitHub", img: "/Images/github.png" },
  { name: "GitLab", img: "/Images/gitlab.png" },
  { name: "Prompt for chat GPT", img: "/Images/gpt.png" },
  { name: "Bootstrap", img: "/Images/bpptstrap.png" },
  { name: "Figma", img: "/Images/figma.png" },
];

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 }); // Trigger when 10% is in view

  const skillItemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  // Animation for the heading
  const headingVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="min-h-screen bg-[#272727] lg:px-12 ">
      <div ref={sectionRef} className="container mx-auto px-4 py-16">
        <motion.h1
          variants={headingVariants}
          initial="initial"
          animate={sectionInView ? "animate" : "initial"}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-4xl font-bold text-white mb-12 md:mb-16 text-center"
        >
          My Skills
        </motion.h1>
        <div // Grid container, not a motion component itself
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-center py-5 "
        >
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillItemVariants}
              initial="initial"
              // Animate when sectionInView is true
              animate={sectionInView ? "animate" : "initial"}
              transition={{ 
                duration: 0.4, 
                delay: sectionInView ? index * 0.15 : 0, // Staggered delay
                ease: "easeOut"
              }}
              className="rounded-lg shadow-lg px-4 py-6 text-center bg-gradient-to-br from-[#9edec9d3] to-[#3f3e35af] flex flex-col items-center justify-center"
            >
              <motion.img
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                src={skill.img}
                alt={skill.name}
                className="mx-auto mb-3 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" // Responsive icon size
              />
              <h3 className="text-lg sm:text-xl font-medium text-white mt-2">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
