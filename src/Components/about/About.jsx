import React, { useState } from "react";
import { motion } from 'framer-motion'
import Me from "../../assets/pictures/coder.svg";
import StrawHat from "../../assets/pictures/strawHat.png";
import Tag from "../tag/Tag";
import "./About.css";

const About = () => {
  const [strawHatClasses, setStrawHatClasses] = useState(
    "portfolio__about-easterEgg fadeOut__rightEdge"
  );

  const hoverHandler = () => {
    setStrawHatClasses("portfolio__about-easterEgg fadeIn__rightEdge");
  };
  const mouseLeaveHandler = () => {
    setStrawHatClasses("portfolio__about-easterEgg fadeOut__rightEdge")
  }
  return (
    <section className="portfolio__about section__padding" id="about">
      <div className={strawHatClasses}>
        <img src={StrawHat} alt="" />
      </div>
      <motion.div
      initial={{ opacity: 0, y: '10px'}}
      whileInView={{ opacity: 1, y: '0'}}
      transition={{ duration: 0.4 }}
      margin='200px'
       className="portfolio__about-text">
        <Tag name="about">
          <p>
            As a Full Stack Developer, I not only build websites that have nice
            astetic apeal, but also function as you'd expect.
          </p>
          <p>
            I also enjoy watching movies, anime and{" "}
            <span
              onMouseOver={hoverHandler}
              onMouseLeave={mouseLeaveHandler}
              className="portfolio__easterEgg__triger"
            >
              One Piece
            </span>
            .
          </p>
        </Tag>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, y: '-10px'}}
      whileInView={{ opacity: 1, y: '0'}}
      transition={{ duration: 0.5 }}
      margin='200px'
      className="portfolio__about-image">
        <img src={Me} alt="me" />
      </motion.div>
    </section>
  );
};

export default About;
