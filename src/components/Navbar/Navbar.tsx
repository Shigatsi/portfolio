import React from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../utils/constants/index.js";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <nav className="navigation">
      <img src={images.logo} alt="" className="navigation__logo" />
      <ul className="navigation__links">
        {["home", "about", "contact", "work", "skills", "works", "testimonials", "contacts"].map(
          (navItem) => (
            <li key={`link-${navItem}`} className="navigation__item">
              <a href={`#${navItem}`} className="navigation__item-link">
                {navItem}
              </a>
            </li>
          )
        )}
      </ul>
      <div className="navigation__menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "contact", "work", "skills", "works"].map(
                (navItem) => (
                  <li key={navItem} className="navigation__item">
                    <a
                      href={`#${navItem}`}
                      className="navigation__item-link"
                      onClick={() => setToggle(false)}
                    >
                      {navItem}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
