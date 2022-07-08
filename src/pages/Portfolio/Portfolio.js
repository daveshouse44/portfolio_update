import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiLink } from "react-icons/fi";
import { motion } from "framer-motion";

import { applications } from "../../images";
import { AppWrapper, MotionWrapper } from "../../Wrapper";

import "./Portfolio.scss";

const Portfolio = () => {
  const [apps, setApps] = useState([]);
  const [filterApp, setFilterApp] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setApps(applications);
    setFilterApp(applications);
  }, []);

  const handlePortfolioFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterApp(apps);
      } else {
        console.log(item);
        console.log(apps);
        setFilterApp(apps.filter((app) => app.skill.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        Check out my latest <span>Projects</span>
      </h2>

      <div className="app__portfolio-filter">
        {[
          "Frontend",
          "Backend",
          "PWA",
          "JS Framework",
          "Full Stack",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handlePortfolioFilter(item)}
            className={`app__portfolio-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__portfolio-portfolio"
      >
        {filterApp.map((app, index) => (
          <div className="app__portfolio-item app__flex" key={index}>
            <div className="app__portfolio-img app__flex">
              <img src={app.image} alt={app.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__portfolio-hover app__flex"
              >
                <a href={app.deploy} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <FiLink />
                  </motion.div>
                </a>
                <a href={app.repo} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__portfolio-content app__flex">
              <h4 className="bold-text">{app.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {app.overview}
              </p>

              <div className="app__portfolio-tag app__flex">
                <p className="p-text">{app.skill[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrapper(
  MotionWrapper(Portfolio, "app__portfolio"),
  "portfolio",
  "app__brickbg"
);
