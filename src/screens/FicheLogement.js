import React from "react";
import { Navigate, useLocation, useParams } from "react-router";
import { AnnonceCarousel } from "../components/AnnonceCarousel";
import Collapse from "../components/Collapse";
import { StarIcon } from "../components/icons/Star";
import annonces from "../data/annonces.json";
import "../styles/fiche.scss";

export default function FicheLogement() {
  let { state } = useLocation();
  let { annonceId } = useParams();

  let stateAnnonce = state?.annonce;
  let annonce =
    stateAnnonce || annonces.find((annonce) => annonce.id === annonceId);

  if (!annonce) {
    return <Navigate to="/notFound" />;
  }

  return (
    <main>
      <section className="container">
        <AnnonceCarousel images={annonce.pictures} />
      </section>

      <section className="container">
        <article className="fiche__infos">
          <div className="fiche__infos__left">
            <h2 className="fiche__infos__title">{annonce.title}</h2>
            <span className="fiche__infos__location">{annonce.location}</span>
            <div className="fiche__infos__tags">
              {annonce.tags.map((tag) => (
                <span key={tag} className="fiche__infos__tags__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="fiche__infos__right">
            <div className="fiche__infos__host">
              <p className="fiche__infos__host__name">
                {annonce.host.name.split(" ")?.map((name, index) => (
                  <span key={name}>
                    {name}
                    {index < annonce.host.name.split(" ").length - 1 && <br />}
                  </span>
                ))}
              </p>
              <img
                src={annonce.host.picture}
                alt={annonce.host.name}
                className="fiche__infos__host__avatar"
              />
            </div>
            <p className="fiche__infos__rating">
              {/* using 5 stars */}
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={`fiche__infos__rating__star ${
                    index < annonce.rating
                      ? "fiche__infos__rating__star--filled"
                      : ""
                  }`}
                />
              ))}
            </p>
          </div>
        </article>
      </section>

      <section className="container">
        <div className="fiche__details">
          <Collapse title="Description" size="24px">
            <p className="fiche__description">{annonce.description}</p>
          </Collapse>
          <Collapse title="Équipements" size="24px">
            <p className="fiche__description">
              {annonce.equipments.map((equipment) => (
                <span key={equipment}>
                  {equipment}
                  <br />
                </span>
              ))}
            </p>
          </Collapse>
        </div>
      </section>
    </main>
  );
}
