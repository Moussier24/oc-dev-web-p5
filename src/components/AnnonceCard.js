import React from "react";
import { Link } from "react-router-dom";

export default function AnnonceCard({ annonce }) {
  return (
    <Link to={`/annonces/${annonce.id}`} state={{ annonce }}>
      <article className="annonce__card">
        <img
          src={annonce.cover}
          alt={annonce.title}
          className="annonce__card__img"
        />
        <h2 className="annonce__card__title">{annonce.title}</h2>
      </article>
    </Link>
  );
}
