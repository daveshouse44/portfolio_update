import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
  BsDiscord,
  BsReddit,
} from "react-icons/bs";

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
        <BsDiscord />
      </div>
      <div>
        <BsReddit />
      </div>
    </div>
  );
};

export default Socials;
