import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { apps } from "../../images";
import { AppWrapper } from "../../Wrapper";

import "./Portfolio.scss";

const Portfolio = () => {
  const [filterApp, setFilterApp] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handlePortfolioFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterApp(apps);
      } else {
        setFilterApp(apps.filter((app) => app.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        Check out my <span>Portfolio</span>
      </h2>

      <div className="app__portfolio-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handlePortfolioFilter(item)}
              className={`app__portfolio-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
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
                    <AiFillEye />
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

              <div className="app__work-tag app__flex">
                <p className="p-text">{app.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrapper(Portfolio, "portfolio");
