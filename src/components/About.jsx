import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC/SectionWrapper";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[150px] sm:w-[180px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-4 px-6 min-h-[180px] flex justify-center items-center flex-col"
        >
          <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          <h3 className="text-white text-[16px] font-bold text-center mt-2">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate Full Stack Engineer with a focus on creating
        innovative and efficient web applications. I have extensive experience
        in React, Node.js, and modern front-end technologies, with a proven
        track record of building scalable web applications.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-4 justify-center sm:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
