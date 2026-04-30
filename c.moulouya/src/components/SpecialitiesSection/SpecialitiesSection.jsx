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


export default function SpecialitiesSection() {
  // Desktop logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = allSpecialites.length;
  const maxIndex = totalCards - 3; // Show 3 cards at a time

  const nextDesktop = () => {
    setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
  };
  const prevDesktop = () => {
    setCurrentIndex((prev) => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1));
  };

  // Mobile logic
  const [mobileIndex, setMobileIndex] = useState(1); // Start with Urologie as per image
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const prevMobile = () => setMobileIndex((c) => (c - 1 + allSpecialites.length) % allSpecialites.length);
  const nextMobile = () => setMobileIndex((c) => (c + 1) % allSpecialites.length);

  const onTouchStartHandler = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveHandler = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) nextMobile();
    if (isRightSwipe) prevMobile();
  };

  return (
    <section className="sp-wrapper">
      <div className="sp-inner">

        {/* ── Version Desktop ── */}
        <div className="sp-desktop-only">
          <div className="sp-banner">
            <div className="sp-banner-left">
              <h2 className="sp-banner-title">Nos Spécialités Médicales</h2>
              <p className="sp-banner-desc">
                Des soins adaptés, assurés par des professionnels qualifiés dans plusieurs disciplines.
              </p>
            </div>
            <div className="sp-banner-nav">
              <button className="sp-nav-btn" onClick={prevDesktop}>
                <svg viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="sp-nav-btn" onClick={nextDesktop}>
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          <div className="sp-cards-container">
            <div 
              className="sp-cards-track" 
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {allSpecialites.map((item, i) => (
                <div className="sp-card-wrapper" key={i}>
                  <div className="sp-card">
                    <span className="sp-card-title">{item.title}</span>
                    <div className="sp-card-line" />
                    <p className="sp-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Version Mobile (Slider avec "peeking" des cartes adjacentes) ── */}
        <div className="sp-mobile-only">
          <div className="sp-mobile-header">
            <h2 className="sp-mobile-title">Nos Spécialités Médicales</h2>
            <p className="sp-mobile-subtitle">
              Des soins adaptés, assurés par des professionnels qualifiés dans plusieurs disciplines.
            </p>
          </div>
          
          <div 
            className="sp-mobile-slider-container"
            onTouchStart={onTouchStartHandler}
            onTouchMove={onTouchMoveHandler}
            onTouchEnd={onTouchEndHandler}
          >
            {/* Boutons de navigation flottants */}
            <button className="sp-mobile-nav-btn sp-prev" onClick={prevMobile}>
              <svg viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="sp-mobile-nav-btn sp-next" onClick={nextMobile}>
              <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            {/* Track des cartes */}
            <div className="sp-mobile-track-wrapper">
              <div 
                className="sp-mobile-track" 
                style={{ transform: `translateX(calc(-${mobileIndex * 82}% + 9%))` }}
              >
                {allSpecialites.map((item, i) => (
                  <div className={`sp-mobile-card-slot ${i === mobileIndex ? "active" : ""}`} key={i}>
                    <div className="sp-card sp-mobile-card">
                      <span className="sp-card-title">{item.title}</span>
                      <div className="sp-card-line" />
                      <p className="sp-card-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}