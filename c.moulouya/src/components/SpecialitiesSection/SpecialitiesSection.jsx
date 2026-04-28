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
  const [page, setPage]           = useState(0);
  const [animKey, setAnimKey]     = useState(0);
  const [direction, setDirection] = useState("right");

  const totalPages = Math.ceil(allSpecialites.length / PER_PAGE);

  const prev = () => {
    setDirection("left");
    setPage((p) => (p - 1 + totalPages) % totalPages);
    setAnimKey((k) => k + 1);
  };

  const next = () => {
    setDirection("right");
    setPage((p) => (p + 1) % totalPages);
    setAnimKey((k) => k + 1);
  };

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
            <button className="sp-nav-btn" onClick={prev} aria-label="Précédent">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="sp-nav-btn" onClick={next} aria-label="Suivant">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* ── Cards avec animation ── */}
        {/*
          key={animKey} force le re-montage à chaque clic → relance l'animation CSS.
          La classe sp-cards--right ou sp-cards--left détermine le sens du slide.
        */}
        <div
          className={`sp-cards sp-cards--${direction}`}
          key={animKey}
        >
          {visible.map((item, i) => (
            <div className="sp-card" key={i} style={{ animationDelay: `${i * 60}ms` }}>
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