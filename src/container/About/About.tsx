import React from "react";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";
import "./About.scss";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface IAbouts {
  title: string;
  description: string;
  imgUrl:SanityImageSource;
}

const About: React.FC = () => {
  const [abouts, setAbouts] = React.useState<IAbouts[]>([]);
  console.log('abouts', abouts.map(a=> urlFor(a.imgUrl).options.baseUrl))

  React.useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);


  return (
    <>
      <h2 className="about__header head-text">
        I Know that&ensp;<span>Good Development</span>
        <br />
        Means&ensp;<span>Good Apps</span>
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
            
            <img src={urlFor(about.imgUrl).url()} alt={about.title} />
            <h2 className="about__profile-item-title">{about.title}</h2>
            <p className="about__profile-item-text p-text">
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
