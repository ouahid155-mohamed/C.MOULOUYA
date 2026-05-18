import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./SpecialitesDetailSection.css";
import surgeryImg from "../../assets/videos/Group 1000011126.png";
import groupDeco from "../../assets/Group.png";

const specialites = [
  {
    id: 0,
    key: "specialties_detail.orthopedics",
    defaultLabel: "Chirurgie orthopédique\net traumatologique",
    defaultTitle: "Chirurgie orthopédique et traumatologique",
    defaultBold: "Lorem ipsum dolor sit amet.",
    defaultDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis.",
  },
  {
    id: 1,
    key: "specialties_detail.urology",
    defaultLabel: "Chirurgie urologique",
    defaultTitle: "Chirurgie urologique",
    defaultBold: "Lorem ipsum dolor sit amet.",
    defaultDesc: "Une expertise reconnue pour toutes vos chirurgies urologiques. Prostate, calculs, cancers : nous allions technique de pointe et accompagnement humain.",
  },
  {
    id: 2,
    key: "specialties_detail.visceral",
    defaultLabel: "Chirurgie viscérale",
    defaultTitle: "Chirurgie viscérale",
    defaultBold: "Lorem ipsum dolor sit amet.",
    defaultDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis.",
  },
];

export default function SpecialitesDetailSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState(1);
  const [playing, setPlaying] = useState(false);
  const total = specialites.length;

  const prev = () => setActive((c) => (c - 1 + total) % total);
  const next = () => setActive((c) => (c + 1) % total);
  const prevCard = () => setActive((c) => (c - 1 + total) % total);
  const nextCard = () => setActive((c) => (c + 1) % total);

  const current = specialites[active];
  const prevIdx = (active - 1 + total) % total;
  const nextIdx = (active + 1) % total;

  // ── Swipe logic ──
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
  };

  return (
    <section className="sds-wrapper">
      <div className="sds-inner">

        {/* ── Tab slider ── */}
        <div 
          className="sds-tabs-row"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >

          {/* Arrow left */}
          <button className="sds-arrow-btn" onClick={prev} aria-label="Précédent">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="sds-tabs-container">
            {specialites.map((item, index) => {
              let posClass = "";
              let activeClass = "";
              
              if (index === active) {
                posClass = "sds-tab-pos-center";
                activeClass = "sds-tab-active";
              } else if (index === prevIdx) {
                posClass = "sds-tab-pos-left";
                activeClass = "sds-tab-inactive";
              } else if (index === nextIdx) {
                posClass = "sds-tab-pos-right";
                activeClass = "sds-tab-inactive";
              }

              return (
                <button 
                  key={item.id}
                  className={`sds-tab sds-tab-absolute ${posClass} ${activeClass}`}
                  onClick={() => {
                    if (index === prevIdx) prev();
                    if (index === nextIdx) next();
                  }}
                >
                  <span className="sds-tab-label">
                    {t(`${item.key}.label`, item.defaultLabel).split('\n').map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                  {index === active ? (
                    <span className="sds-tab-down-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12l7 7 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  ) : (
                    <span className="sds-tab-arrow-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Arrow right */}
          <button className="sds-arrow-btn" onClick={next} aria-label="Suivant">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* ── Contenu principal ── */}
        <div className={`sds-content ${playing ? "sds-playing" : ""}`}>

          {/* Image à gauche avec bouton play centré */}
          <div className="sds-media-block">
            <div className="sds-video-container" onClick={() => !playing && setPlaying(true)}>
              {playing ? (
                <video
                  src="https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-3--@main/Clinique%20Moulouya%208.mp4"
                  className="sds-surgery-img"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>

          {/* Carte info à droite */}
          <div className="sds-card-block">
            <div className="sds-card-viewport">
              <div 
                className="sds-card-track"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {specialites.map((item) => (
                  <div className="sds-card-slot" key={item.id}>
                    <div
                      className="sds-info-card"
                      style={{ backgroundImage: `url(${groupDeco})` }}
                    >
                      <h3 className="sds-card-title">{t(`${item.key}.title`, item.defaultTitle)}</h3>
                      <div className="sds-card-divider" />
                      <p className="sds-card-bold">{t(`${item.key}.bold`, item.defaultBold)}</p>
                      <p className="sds-card-desc">{t(`${item.key}.desc`, item.defaultDesc)}</p>

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
                          {t("specialties_detail.contact_btn", "Contact us")} &nbsp;→
                        </button>
                      </div>
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
