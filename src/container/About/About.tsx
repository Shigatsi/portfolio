import React from "react";
import { motion } from "framer-motion";

import { images } from '../../utils/constants';
import "./About.scss";

const abouts = [
  {
    title: "Frontend Development",
    description: "I am a good web-developer",
    img: images.about01,
  },
  {
    title: "Back-end Development",
    description: "I am a good back-developer",
    img: images.about02
  },
  {
    title: "MERN Stack",
    description: "I am a good back-developer",
    img: images.about02
  },
  {
    title: "MERN Stack",
    description: "I am a good back-developer",
    img: images.about02
  },
];

const About: React.FC = () => {
  return (
    <>
      <h2 className="about__header head-text">
        I Know that&ensp;<span>Good Development</span><br />Means&ensp;<span>Good Apps</span>
      </h2>
      <div className="about__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="about__profile-item"
            key={about.title + index}
          >
            <img src={about.img} alt={about.title} />
            <h2 className="about__profile-item-title">{about.title}</h2>
            <p className="about__profile-item-text p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
