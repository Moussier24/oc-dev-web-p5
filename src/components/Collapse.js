import React from "react";
import { ChevronDown } from "./icons/ChevronDown";
import "../styles/collapse.scss";

export default function Collapse({ title, size = "medium", children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`collapse ${isOpen ? "collapse--open" : ""} ${
        size === "small"
          ? "collapse--small"
          : size === "large"
          ? "collapse--large"
          : ""
      }`}
    >
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse__header__title">{title}</h2>
        <ChevronDown size={size} className="collapse__header__icon" />
      </div>
      <div className="collapse__content">
        <div className="collapse__content__inner">{children}</div>
      </div>
    </div>
  );
}
