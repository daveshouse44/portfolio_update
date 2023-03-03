import React from "react";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { GrMail } from "react-icons/gr";

const Socials = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/daveshouse44"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/dave-tierney/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://stackoverflow.com/users/16111199/david-tierney"
          target="_blank"
          rel="noreferrer"
        >
          <BsStackOverflow />
        </a>
      </div>
      <div>
        <a
          href="https://discordapp.com/users/daveshouse44#3785"
          target="_blank"
          rel="noreferrer"
        >
          <SiDiscord />
        </a>
      </div>
      <div>
        <a
          href="https://www.reddit.com/user/daves_house"
          target="_blank"
          rel="noreferrer"
        >
          <FaRedditAlien />
        </a>
      </div>
      <div>
        <a href="mailto:me@davetierney.dev">
          <GrMail />
        </a>
      </div>
    </div>
  );
};

export default Socials;
