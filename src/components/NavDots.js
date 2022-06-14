import React from "react";

const NavDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "portfolio", "about", "contact"].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "var(--teal-color)" } : {}}
      />
    ))}
  </div>
);

export default NavDots;
