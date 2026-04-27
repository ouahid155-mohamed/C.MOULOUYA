import { useState } from "react";
import "./SpecialitiesSection.css";

const allSpecialites = [
  { title: "Chirurgie viscérale",    desc: "Traitement des pathologies digestives avec expertise chirurgicale." },
  { title: "Urologie",               desc: "Soins spécialisés pour les maladies urinaires et génitales." },
  { title: "Chirurgie oncologique",  desc: "Interventions chirurgicales pour le traitement des cancers." },
  { title: "Orthopédie",             desc: "Prise en charge des fractures et pathologies des articulations." },
  { title: "Anesthésiologie",        desc: "Accompagnement et sécurité du patient avant et pendant l'opération." },
  { title: "Cardiologie",            desc: "Suivi des maladies cardiovasculaires et examens spécialisés." },
];

const PER_PAGE = 3;

export default function SpecialitiesSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(allSpecialites.length / PER_PAGE);
  const prev    = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next    = () => setPage((p) => (p + 1) % totalPages);
  const visible = allSpecialites.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="sp-wrapper">
      <div className="sp-inner">

        {/* ── Bandeau bleu ── */}
        <div className="sp-banner">
          <div className="sp-banner-left">
            <h2 className="sp-banner-title">Nos Spécialités Médicales</h2>
            <p className="sp-banner-desc">
              Des soins adaptés, assurés par des professionnels qualifiés dans plusieurs disciplines.
            </p>
          </div>
          <div className="sp-banner-nav">
            {/* Flèche gauche — forme identique à l'image */}
            <button className="sp-nav-btn" onClick={prev} aria-label="Précédent">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Flèche droite */}
            <button className="sp-nav-btn" onClick={next} aria-label="Suivant">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="sp-cards">
          {visible.map((item, i) => (
            <div className="sp-card" key={i}>
              <span className="sp-card-title">{item.title}</span>
              <div className="sp-card-line" />
              <p className="sp-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}