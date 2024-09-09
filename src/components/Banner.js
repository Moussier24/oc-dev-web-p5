import React from "react";
import "../styles/banner.scss";

export default function Banner({ imageSrc, title }) {
  return (
    <section className="container">
      <article className="banner">
        <img src={imageSrc} alt="" />
        {title && <h1 data-text={title}>{title}</h1>}
      </article>
    </section>
  );
}
