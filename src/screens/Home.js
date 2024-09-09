import React from "react";
import Banner from "../components/Banner";
import annonces from "../data/annonces.json";
import "../styles/home.scss";
import AnnonceCard from "../components/AnnonceCard";
import bannerImage from "../assets/images/banniere_home.jpg";

export default function Home() {
  return (
    <main>
      <Banner imageSrc={bannerImage} title="Chez vous, partout et ailleurs" />

      <section className="container">
        <div className="home-annonces">
          {annonces.map((annonce) => (
            <AnnonceCard key={annonce.id} annonce={annonce} />
          ))}
        </div>
      </section>
    </main>
  );
}
