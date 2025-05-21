"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton"; // Assuming TabButton is a separate component
import { motion, AnimatePresence } from "framer-motion";

const Tab_Data = [
  {
    title: "Education",
    id: "Education",
    content: [
      {
        date: "2020",
        text: "Completed My High School From The Adarsh School ",
      },
      {
        date: "2024",
        text: "Completed My Graduation From Delhi Global Institute of Technology ",
      },
    ],
  },
  {
    title: "Experience",
    id: "Experience",
    content: [
      {
        date: "2023",
        text: "Completed My MEARN STACK Certification",
      },
      {
        date: "...",
        text: "...",
      },
    ],
  },
];

const Section = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function TimelineEntry({ date, text }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Adjust the threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={Section}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      transition={{ duration: 0.3 }}
      className="timeline-item flex items-center mb-4"
    >
      <div className="timeline-marker rounded-full bg-gray-400 h-4 w-4 mr-4"></div>
      <div>
        <h6 className="text-base font-bold">{date}</h6>
        <p className="text-sm">{text}</p>
      </div>
    </motion.div>
  );
}

function AboutSection() {
  const [tab, setTab] = useState("Education");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white h-auto">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          className="md:mr-8"
          variants={Section}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Image
            src="/Images/mydp.png"
            width={300}
            height={300}
            className="rounded-full hidden  md:block md:w-80 xl:w-[400px]  md:pl-13 lg:block xl:block "
            alt="Your Profile Picture"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:mr-8"
        >
          <h2 className="text-5xl font-bold text-white xl:mb-5">About Me</h2>
          <div className="lg:pt-5 pt-10">
            <p className="text-base lg:text-lg">
              As a recent graduate, I am always on the lookout for new
              technologies and programming languages to expand my skill set. My
              journey in the tech world has been driven by a curiosity to
              understand how things work and a desire to create innovative
              solutions. I pride myself on being a Developer with excellent
              communication skills, which allow me to effectively collaborate
              with team members and clients. My strong problem-solving abilities
              enable me to tackle challenges head-on and deliver high-quality
              results. I am committed to continuous learning and professional
              growth, and I am eager to explore new opportunities that push the
              boundaries of my knowledge and expertise.
            </p>
            <div className="flex flex-row mt-8">
              <TabButton
                selectTab={() => handleTabChange("Education")}
                active={tab === "Education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("Experience")}
                active={tab === "Experience"}
              >
                Experience
              </TabButton>
            </div>
            <div className="timeline mt-8">
              <AnimatePresence key={tab}>
                {Tab_Data.find((t) => t.id === tab).content.map(
                  (item, index) => (
                    <TimelineEntry
                      key={index}
                      date={item.date}
                      text={item.text}
                    />
                  )
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
