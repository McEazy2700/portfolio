import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Technologies.css";
import Tag from "../tag/Tag";

const Technologies = () => {
  const backendTech = ["Python", "Django", "Django REST Framework", "Fast API"];
  const frontendTech = ["HTML", "CSS", "JavaScript", "React"];
  const cloudServices = ["AWS", "Heroku", "Cloudinary"];
  const [mouseEntered, setMouseEntered] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: cursorPosition.x - 12,
      y: cursorPosition.y - 12,
    },
    text: {
      height: 150,
      width: 150,
      x: cursorPosition.x - 75,
      y: cursorPosition.y - 75,
      background: "green",
      mixBlendMode: "difference",
    },
  };

  const enterHandler = () => {
    setMouseEntered(true);
    document.getElementById("root").classList.add("noCursor");
  };

  const leaveHandler = () => {
    setMouseEntered(false);
    document.getElementById("root").classList.remove("noCursor");
  };

  const oversize = () => setCursorVariant("text");
  const normalize = () => setCursorVariant("default");
  return (
    <section
      onMouseEnter={enterHandler}
      onMouseLeave={leaveHandler}
      className="portfolio__tech section__padding"
      id="tech"
    >
      <Tag name="stack">
        <div className="portfolio__tech-stacks">
          <motion.div
            initial={{ opacity: 0, y: "10px" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.4 }}
            margin="200px"
            onMouseEnter={oversize}
            onMouseLeave={normalize}
            className="portfolio__tech-stack"
          >
            <div className="portfolio__tech-stack_title">
              <h2>Frontend</h2>
            </div>
            <div className="portfolio__tech-stack_stack">
              <ul>
                {frontendTech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "10px" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.3 }}
            margin="200px"
            onMouseEnter={oversize}
            onMouseLeave={normalize}
            className="portfolio__tech-stack"
          >
            <div className="portfolio__tech-stack_title">
              <h2>Backend</h2>
            </div>
            <div className="portfolio__tech-stack_stack">
              <ul>
                {backendTech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "10px" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.4 }}
            margin="200px"
            onMouseEnter={oversize}
            onMouseLeave={normalize}
            className="portfolio__tech-stack"
          >
            <div className="portfolio__tech-stack_title">
              <h2>Cloud Services</h2>
            </div>
            <div className="portfolio__tech-stack_stack">
              <ul>
                {cloudServices.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Tag>
      {mouseEntered && (
        <motion.div
          variants={variants}
          animate={cursorVariant}
          className="cursor"
        />
      )}
    </section>
  );
};

export default Technologies;
