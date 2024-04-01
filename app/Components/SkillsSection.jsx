"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillData = [
  { name: "C++", img: "https://drive.google.com/file/d/1SI2XevkONBGTWy_mVkDml0YdlBmlV9xK/view?usp=drive_link" },
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
  const skillsVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="min-h-screen bg-[#272727] px-12 ">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          My Skills
        </h1>
        <motion.div
          ref={ref}
          variants={skillsVariants} // Use skillsVariants here
          initial="initial"
          animate={isInView ? "animate" : "initial"} // Use skillsVariants here
          transition={{ duration: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center py-5 "
        >
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-md px-4 py-6 text-center bg-gradient-to-br from-[#9edec9d3] to-[#3f3e35af]"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="mx-auto mb-2 h-12 w-12 "
              />
              <h3 className="text-xl font-medium text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
