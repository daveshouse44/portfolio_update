import React from "react";
import { Socials } from "../components";

const AppWrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <Socials />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2022 Dave Tierney Development</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
      </div>
    );
  };

export default AppWrapper;
