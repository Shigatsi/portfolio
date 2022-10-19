import React from "react";
import { motion } from "framer-motion";
import { images } from "../../utils/constants/index.js";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease:'easeInOut'
    }
  }
}

const Header: React.FC = () => {
  return (
    <section className="header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="header__info"
      >
        <div className="header__badge">
          <div className="header__badge-cmp">
            <span>&#128075;</span>
            <div className="header__greeting">
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Eugenia</h1>
            </div>
          </div>
          <div className="header__tags">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="header__img"
      >
        <img   className="header__img-profile" src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          className='header__overlay-circle'
        />
      </motion.div>
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="header__circles"
      >
        {
          [images.react, images.sass, images.typescript].map((circle, i)=>(
            <div className="header__circle-cmp" key={i}>
              <img src={circle} alt="circle" />
            </div>
          ))
        }
      </motion.div>
   
    </section>
  );
};

export default Header;
