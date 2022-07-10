import React from "react";
import { motion } from "framer-motion";

import { AppWrapper, MotionWrapper } from "../../Wrapper";
import { Slider } from "../../components";
import { abouts } from "../../images";

import "./About.scss";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        A strategic approach to <span>Design</span> <br />
        and <span>Development</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.img} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
      <Slider />
    </>
  );
};

export default AppWrapper(
  MotionWrapper(About, "app__about"),
  "about",
  "app__brickbg"
);
