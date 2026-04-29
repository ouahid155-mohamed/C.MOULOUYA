import { useState } from "react";
import doc1 from "../../assets/cheerful-male-doctor-white-gown-por4534trait 3 1.png";
import doc2 from "../../assets/ewrgt 1.png";
import doc3 from "../../assets/qwre 1.png";
import "./DoctorsSection.css";

const doctors = [
  { img: doc1, name: "Dr. Kamal ADNANI",       specialty: "Orthopédiste Traumatologue" },
  { img: doc2, name: "Dr. Aziz LAARBI",         specialty: "Urologue" },
  { img: doc3, name: "Dr. Az-Eddin EL BOUHALI", specialty: "Anesthésiste - Réanimateur" },
];

export default function DoctorsSection() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Seuil minimal pour considérer le geste comme un swipe (en pixels)
  const minSwipeDistance = 50;

  const prev = () => setCurrent((c) => (c - 1 + doctors.length) % doctors.length);
  const next = () => setCurrent((c) => (c + 1) % doctors.length);

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
    
    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
  };

  const doc = doctors[current];

  return (
    <section className="ds-wrapper">
      
      {/* ── Version Desktop (Grille) ── */}
      <div className="ds-grid ds-desktop-grid">
        {doctors.map((d, i) => (
          <div className="ds-outer-border" key={i}>
            <div className="ds-outer-card">
              <div className="ds-photo-border">
                <div className="ds-photo-area">
                  <img src={d.img} alt={d.name} className="ds-photo" />
                  <button className="ds-btn">
                    <span className="ds-btn-label">Plus d'infos</span>
                    <span className="ds-btn-circle">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="#1376F8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div className="ds-info">
                <span className="ds-name">{d.name}</span>
                <span className="ds-specialty">{d.specialty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Version Mobile (Un seul docteur avec flèches + Swipe) ── */}
      <div 
        className="ds-mobile-container ds-mobile-only"
        onTouchStart={onTouchStartHandler}
        onTouchMove={onTouchMoveHandler}
        onTouchEnd={onTouchEndHandler}
      >
        <div className="ds-outer-border">
          <div className="ds-outer-card">
            
            {/* Flèches de navigation */}
            <button className="ds-nav-arrow ds-prev" onClick={prev} aria-label="Précédent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="ds-nav-arrow ds-next" onClick={next} aria-label="Suivant">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            <div className="ds-photo-border">
              <div className="ds-photo-area">
                <img src={doc.img} alt={doc.name} className="ds-photo" />
                <button className="ds-btn">
                  <span className="ds-btn-label">Plus d'infos</span>
                  <span className="ds-btn-circle">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="#1376F8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div className="ds-info">
              <span className="ds-name">{doc.name}</span>
              <span className="ds-specialty">{doc.specialty}</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}