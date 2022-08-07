import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import getData from "../../utils/getData";
import getUrl from "../../utils/getUrl";
import Tag from "../tag/Tag";
import "./MyWork.css";

const MyWork = () => {
  const [projects, setProjects] = useState([]);
  const [ctaClasses, setCtaClasses] = useState(
    "portfolio__project-cta fadeOut__short"
  );

  useEffect(() => {
    const projectUrl = getUrl("projects/");
    getData(projectUrl).then((data) => setProjects(data));
  }, []);

  const showCTA = () => setCtaClasses("portfolio__project-cta fadeIn__short");

  const removeCTA = () =>
    setCtaClasses("portfolio__project-cta fadeOut__short");
  return (
    <section className="portfolio__projects section__padding" id="projects">
      <Tag name="projects">
        <ul className="portfolio__projects-projects">
          {projects.map((project) => (
            <motion.li
            initial={{ opacity: 0, y: '5%'}}
            whileInView={{ opacity: 1, y: '0'}}
            transition={{ duration: 0.7 }}
            margin='200px'
              onMouseOver={showCTA}
              onMouseLeave={removeCTA}
              key={project.id}
              className="portfolio__projects-project"
            >
              <Link to={`${project.path}/${project.id}`}>
                <div className="portfolio__projects-project_detail">
                  <div className="portfolio__project-image">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div className="portfolio__project-text">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
              </Link>
              <div className={ctaClasses}>
                <button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </button>
                <button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
      </Tag>
    </section>
  );
};

export default MyWork;
