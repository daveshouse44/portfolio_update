import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { images } from "../../images";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/" className="logo__portfolio">
          <img src={images.brand} alt="brand" />
        </Link>
      </div>
      <ul className="app__navbar-links">
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
