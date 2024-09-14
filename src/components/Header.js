import React from "react";
import "../styles/header.scss";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="container navbar">
      <Link to="/">
        <img src="/logo.svg" alt="Logo" className="navbar__logo" />
      </Link>
      <nav className="navbar__nav">
        <ul className="navbar__nav__list">
          <li
            className={`navbar__nav__list__item ${
              pathname === "/" ? "navbar__nav__list__item--active" : ""
            }`}
          >
            <Link to="/">Accueil</Link>
          </li>
          <li
            className={`navbar__nav__list__item ${
              pathname === "/a-propos" ? "navbar__nav__list__item--active" : ""
            }`}
          >
            <Link to="/a-propos">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
