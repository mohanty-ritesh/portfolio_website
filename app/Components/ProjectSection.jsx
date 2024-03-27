"use client"
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "proj 1",
    description: "this is proj 1",
    image: "/Images/logo2.png",
    tag: ["All", "Web"],
    gitUrl: "/"
  },
  {
    id: 1,
    title: "proj 1",
    description: "this is proj 1",
    image: "/Images/logo2.png",
    tag: ["All", "Web"],
    gitUrl: "/"
  },
  {
    id: 1,
    title: "proj 1",
    description: "this is proj 1",
    image: "/Images/logo2.png",
    tag: ["All", "Web"],
    gitUrl: "/"
  },
  {
    id: 1,
    title: "proj 1",
    description: "this is proj 1",
    image: "/Images/logo2.png",
    tag: ["All", "Web"],
    gitUrl: "/"
  }  // other project data...
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section  className="p-8">
      <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants} // Use cardVariants here
            initial="initial"
            animate={isInView ? "animate" : "initial"} // Use cardVariants here
            transition={{duration:0.3, delay:index*0.4}}
          >
            <ProjectCard
              Title={project.title}
              Description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectSection;
