"use client"
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
        date: "April 2019",
        text: "The launch of Aryacoin; AYA ICO, resulting in over 30BTC collected",
      },
      {
        date: "May 2020",
        text: "Graduated from University with a degree in Computer Science",
      },
    ],
  },
  {
    title: "Experience",
    id: "Experience",
    content: [
      {
        date: "June 2020",
        text: "Software Engineer Internship at Tech Company",
      },
      {
        date: "July 2021",
        text: "Full-time Software Engineer at Startup",
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
    <section className="text-white h-[85vh]">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          className="md:mr-8"
          variants={Section}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Image
            src="/Images/myimg-removebg-preview.png"
            width={400}
            height={400}
            className="rounded-full"
            alt="Your Profile Picture"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:mr-8"
        >
          <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem, ipslorem4um Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, optio. dolor sit amet consectetur adipisicing elit. Animi libero aperiam similique fuga a labore reiciendis perferendis eum aliquam blanditiis ad eligendi in, iure expedita voluptate accusantium! Ea, odio repudiandae.
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
            <AnimatePresence>
              {Tab_Data.find((t) => t.id === tab).content.map((item, index) => (
                <TimelineEntry
                  key={index}
                  date={item.date}
                  text={item.text}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
