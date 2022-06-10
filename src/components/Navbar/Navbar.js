import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import { TiThMenuOutline, TiTimesOutline } from "react-icons/ti";
import { motion } from "framer-motion";

import { images } from "../../images";
import "./Navbar.scss";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/" className="logo__portfolio">
          <img src={images.brand} alt="brand" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <CustomLink className="app__flex p-text" to="/">
          <div />
          Home
        </CustomLink>
        <CustomLink className="app__flex p-text" to="/portfolio">
          <div />
          Portfolio
        </CustomLink>
        <CustomLink className="app__flex p-text" to="/about">
          <div />
          About
        </CustomLink>
        <CustomLink className="app__flex p-text" to="/contact">
          <div />
          Contact
        </CustomLink>
      </ul>

      <div className="app__navbar-menu">
        <TiThMenuOutline onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <TiTimesOutline onClick={() => setToggle(false)} />
            <ul>
              <CustomLink to="/" onClick={() => setToggle(false)}>
                Home
              </CustomLink>
              <CustomLink to="/portfolio" onClick={() => setToggle(false)}>
                Portfolio
              </CustomLink>
              <CustomLink to="/about" onClick={() => setToggle(false)}>
                About
              </CustomLink>
              <CustomLink to="/contact" onClick={() => setToggle(false)}>
                Contact
              </CustomLink>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
