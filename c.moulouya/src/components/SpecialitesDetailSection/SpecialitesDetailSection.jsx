import { useState } from "react";
import "./SpecialitesDetailSection.css";
import surgeryImg from "../../assets/videos/Group 1000011126.png";
import groupDeco from "../../assets/Group.png";

const specialites = [
  {
    id: 0,
    label: "Chirurgie orthopédique\net traumatologique",
    title: "Chirurgie orthopédique et traumatologique",
    bold: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis.",
  },
  {
    id: 1,
    label: "Chirurgie urologique",
    title: "Chirurgie urologique",
    bold: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis.",
  },
  {
    id: 2,
    label: "Chirurgie viscérale",
    title: "Chirurgie viscérale",
    bold: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis.",
  },
];

export default function SpecialitesDetailSection() {
  const [active, setActive] = useState(1);
  const total = specialites.length;

  const prev = () => setActive((c) => (c - 1 + total) % total);
  const next = () => setActive((c) => (c + 1) % total);
  const prevCard = () => setActive((c) => (c - 1 + total) % total);
  const nextCard = () => setActive((c) => (c + 1) % total);

  const current = specialites[active];
  const prevIdx = (active - 1 + total) % total;
  const nextIdx = (active + 1) % total;

  return (
    <section className="sds-wrapper">
      <div className="sds-inner">

        {/* ── Tab slider ── */}
        <div className="sds-tabs-row">

          {/* Arrow left */}
          <button className="sds-arrow-btn" onClick={prev} aria-label="Précédent">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Tab gauche (inactive) */}
          <button className="sds-tab sds-tab-inactive" onClick={prev}>
            <span className="sds-tab-label">{specialites[prevIdx].label}</span>
            <span className="sds-tab-arrow-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

          {/* Tab centrale (active) */}
          <div className="sds-tab sds-tab-active">
            <span className="sds-tab-label">{current.label}</span>
            <span className="sds-tab-down-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          {/* Tab droite (inactive) */}
          <button className="sds-tab sds-tab-inactive" onClick={next}>
            <span className="sds-tab-label">{specialites[nextIdx].label}</span>
            <span className="sds-tab-arrow-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

          {/* Arrow right */}
          <button className="sds-arrow-btn" onClick={next} aria-label="Suivant">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* ── Contenu principal ── */}
        <div className="sds-content">

          {/* Image à gauche avec bouton play centré */}
          <div className="sds-media-block">
            <div className="sds-video-container">
              <img src={surgeryImg} alt="Chirurgie" className="sds-surgery-img" />
              {/* Bouton play centré avec anneau blanc */}
              <button className="sds-play-btn" aria-label="Lire la vidéo">
                <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Anneau extérieur */}
                  <circle cx="36" cy="36" r="34" stroke="white" strokeWidth="1.2" />
                  {/* Cercle plein intérieur */}
                  <circle cx="36" cy="36" r="29" fill="white" fillOpacity="0.92" />
                  {/* Triangle rouge arrondi raffiné */}
                  <path
                    d="M33.1,26.5 L44.6,34.2 C45.9,35.1 45.9,36.9 44.6,37.8 L33.1,45.5 C31.8,46.4 30.1,45.4 30.1,43.8 L30.1,28.2 C30.1,26.6 31.8,25.6 33.1,26.5 Z"
                    fill="#E53E3E"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Carte info à droite */}
          <div className="sds-card-block">
            <div
              className="sds-info-card"
              style={{ backgroundImage: `url(${groupDeco})` }}
            >
              <h3 className="sds-card-title">{current.title}</h3>
              <div className="sds-card-divider" />
              <p className="sds-card-bold">{current.bold}</p>
              <p className="sds-card-desc">{current.desc}</p>

              <div className="sds-card-footer">
                <div className="sds-card-nav">
                  {/* Flèche gauche — outline */}
                  <button className="sds-card-nav-btn" onClick={prevCard} aria-label="Précédent">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {/* Flèche droite — fond bleu */}
                  <button className="sds-card-nav-btn sds-card-nav-btn--blue" onClick={nextCard} aria-label="Suivant">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <button className="sds-contact-btn">
                  Contact us &nbsp;→
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
