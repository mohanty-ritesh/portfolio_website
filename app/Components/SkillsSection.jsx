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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger animation of children
        delayChildren: 0.2,   // Optional: delay before children start animating
      },
    },
  };

  const skillItemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="min-h-screen bg-[#272727] py-16 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-8 md:mb-12 text-center"
        >
          My Skills
        </motion.h1>
        <motion.div
          ref={ref}
          variants={gridContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-center py-5"
        >
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillItemVariants} // Apply variants to each skill item
              // initial and animate states will be inherited from the parent gridContainerVariants
              className="rounded-lg shadow-lg px-3 py-5 sm:px-4 sm:py-6 text-center bg-gradient-to-br from-[#9edec9d3] to-[#3f3e35af] flex flex-col items-center justify-center"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="mx-auto mb-2 h-12 w-12 object-contain" // Standardized h-12, added object-contain
              />
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-white mt-2">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
