import React from "react";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { GrMail } from "react-icons/gr";

const Socials = () => {
  return (
    <div className="app__social">
      <div>
        <BsGithub />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsStackOverflow />
      </div>
      <div>
        <SiDiscord />
      </div>
      <div>
        <FaRedditAlien />
      </div>
      <div>
        <GrMail />
      </div>
    </div>
  );
};

export default Socials;
