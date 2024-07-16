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
  animate: { y: 0, opacity: 1 }
};

function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section  className="lg:p-8">
      <h2 className="text-center text-4xl font-bold text-white  py-5">My Projects</h2>
      <ul ref={ref} className="grid py-7 md:grid-cols-3 gap-8 lg:px-12">
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
