import { useState } from "react";
import interventionImg from "../../assets/videos/Vidéo 1.png";
import thumb1 from "../../assets/Rectangle 1 .png";
import thumb2 from "../../assets/Rectangle 2.png";
import "./InterventionsSection.css";

const slides = [
  {
    tag: "NOS INTERVENTIONS",
    title: "Des soins adaptés à vos besoins",
    items: [
      "Chirurgie urologique : traitement des calculs urinaires, prostatectomie, interventions sur la vessie.",
      "Chirurgie viscérale : appendicectomie, réparation des hernies, traitement des pathologies de la vésicule biliaire.",
      "Chirurgie orthopédique et traumatologique : prise en charge des fractures, pathologies des articulations, et bien plus.",
    ],
    image: interventionImg,
  },
  {
    tag: "NOS SPÉCIALITÉS",
    title: "Une expertise médicale complète",
    items: [
      "Cardiologie : suivi des maladies cardiovasculaires, électrocardiogramme, échocardiographie.",
      "Pédiatrie : suivi de la croissance, vaccination, traitement des maladies infantiles.",
      "Gynécologie : suivi de grossesse, échographie, consultations spécialisées.",
    ],
    image: interventionImg,
  },
  {
    tag: "NOS ÉQUIPEMENTS",
    title: "Technologie au service de votre santé",
    items: [
      "Bloc opératoire moderne équipé des dernières technologies chirurgicales.",
      "Imagerie médicale : radiologie, échographie, scanner disponibles sur place.",
      "Laboratoire d'analyses médicales avec résultats rapides et fiables.",
    ],
    image: interventionImg,
  },
];

export default function InterventionsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const slide = slides[current];

  return (
    <section className="is-wrapper">
      <div className="is-container">

        {/* ── Gauche : image + contrôles + rectangles décoratifs ── */}
        <div className="is-left-wrapper">
          {/* <img src={thumb1} alt="" className="is-bg-rect is-rect-1" />
          <img src={thumb2} alt="" className="is-bg-rect is-rect-2" /> */}
          <div className="is-left">
            <img src={slide.image} alt="Intervention" className="is-image" />

            {/* Boutons slider */}
            <div className="is-controls">
              <button className="is-btn is-btn-nav" onClick={prev} aria-label="Précédent">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="#1376F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="is-btn is-btn-play" aria-label="Lire">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M8 5.5L18 12L8 18.5V5.5Z" fill="#1376F8" />
                </svg>
              </button>
              <button className="is-btn is-btn-nav" onClick={next} aria-label="Suivant">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#1376F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Droite : contenu ── */}
        <div className="is-right">
          <span className="is-tag">{slide.tag}</span>
          <div className="is-tag-line" />
          <h3 className="is-title">{slide.title}</h3>
          <ul className="is-list">
            {slide.items.map((item, i) => (
              <li key={i} className="is-list-item">{item}</li>
            ))}
          </ul>
        </div>

      </div>
      
    </section>
  );
}