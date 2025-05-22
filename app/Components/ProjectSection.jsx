"use client"
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Heartz",
    description: "this is proj 1",
    image: "/Images/logo2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mohanty-ritesh/final-Heartz"
  },
  {
    id: 2,
    title: "My Portfolio",
    description: "this is proj 2",
    image: "/Images/portfoliopic.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mohanty-ritesh/portfolio_website"
  },
  {
    id: 1,
    title: "Chess website",
    description: "this is proj 3",
    image: "/Images/chess.png",
    tag: ["All", "Web"],
    gitUrl: ""
  },
  {
    id: 1,
    title: "Kanban Board",
    description: "this is proj 4",
    image: "/Images/kanban.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mohanty-ritesh/Front-end-Assignment"
  }  // other project data...
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } } // Added ease and duration
};

function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold text-white py-5 mb-6 md:mb-8">My Projects</h2>
      <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants} 
            initial="initial"
            animate={isInView ? "animate" : "initial"} 
            transition={{ delay: index * 0.2 }} // Stagger delay for each card
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
