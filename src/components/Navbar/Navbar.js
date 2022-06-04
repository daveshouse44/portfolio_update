import { Link, useMatch, useResolvedPath } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="portfolio">
        David Tierney
      </Link>
      <ul>
        <CustomLink to="/portfolio">Portfolio</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
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