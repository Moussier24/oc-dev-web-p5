import React from "react";
import "../styles/header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container navbar">
      <img src="/logo.svg" alt="Logo" className="navbar__logo" />
      <nav className="navbar__nav">
        <ul className="navbar__nav__list">
          <li className="navbar__nav__list__item">
            <Link to="/">Accueil</Link>
          </li>
          <li className="navbar__nav__list__item">
            <Link to="/a-propos">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
