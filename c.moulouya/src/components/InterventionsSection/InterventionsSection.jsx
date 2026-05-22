import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./InterventionsSection.css";

const videos = [
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-2-@main/clinique%20moulouya%201.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-2-@main/Clinique%20Moulouya%202.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-2-@main/Clinique%20Moulouya%203.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-2-@main/Clinique%20Moulouya%204.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-2-@main/Clinique%20Moulouya%205.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-3--@main/Clinique Moulouya 9.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-3--@main/Clinique Moulouya 10.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-4--@main/Clinique Moulouya 14.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-4--@main/Clinique Moulouya 15.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-4--@main/Clinique Moulouya 16.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-5--@main/Clinique Moulouya 17.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-5--@main/Clinique Moulouya 18.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-5--@main/Clinique Moulouya.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-5--@main/Clinique Moulouya21.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets-5--@main/Clinique Moulouya22.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/-C.MOULOUYA-assets-6--@main/Clinique Moulouya24.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/-C.MOULOUYA-assets-6--@main/Clinique Moulouya25.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/-C.MOULOUYA-assets-6--@main/Clinique Moulouya26.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/-C.MOULOUYA-assets-6--@main/Clinique Moulouya27.mp4",
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/-C.MOULOUYA-assets-6--@main/Clinique Moulouya28.mp4",
];

// Texte fixe — ne change JAMAIS quand on navigue entre les vidéos
const textContent = {
  tagKey: "interventions.tag",
  defaultTag: "NOS INTERVENTIONS",
  titleKey: "interventions.title",
  defaultTitle: "Une prise en charge adaptée à votre état de santé",
  items: [
    { key: "interventions.item_1", default: "Chirurgie urologique : traitement des calculs urinaires, prostatectomie, interventions sur la vessie." },
    { key: "interventions.item_2", default: "Chirurgie viscérale : appendicectomie, réparation des hernies, traitement des pathologies de la vésicule biliaire." },
    { key: "interventions.item_3", default: "Chirurgie orthopédique et traumatologique : prise en charge des fractures, pathologies des articulations, et bien plus." },
  ],
};

export default function InterventionsSection() {
  const { t, i18n } = useTranslation();
  const [videoIndex, setVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRefs = useRef([]);

  const trackRef = useRef(null);
  const isProgrammaticScroll = useRef(false);

  const scrollToSlide = (index) => {
    if (trackRef.current) {
      isProgrammaticScroll.current = true;
      const isRtl = i18n.language === "ar";
      const scrollMultiplier = isRtl ? -1 : 1;
      trackRef.current.scrollTo({
        left: scrollMultiplier * index * trackRef.current.clientWidth,
        behavior: "smooth",
      });
      setVideoIndex(index);
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 500);
    }
  };

  const handleScroll = () => {
    if (!trackRef.current || isProgrammaticScroll.current) return;
    const track = trackRef.current;
    const index = Math.round(Math.abs(track.scrollLeft) / track.clientWidth);
    if (index !== videoIndex && index >= 0 && index < videos.length) {
      setVideoIndex(index);
    }
  };

  // Quand l'index de vidéo change → mettre en pause
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === videoIndex) {
          video.currentTime = 0;
          video.pause();
        } else {
          video.pause();
        }
      }
    });
    setIsPlaying(false);
  }, [videoIndex]);

  // Adjust scroll position dynamically when language (RTL/LTR) changes
  useEffect(() => {
    scrollToSlide(videoIndex);
  }, [i18n.language]);

  const prev = () => scrollToSlide((videoIndex - 1 + videos.length) % videos.length);
  const next = () => scrollToSlide((videoIndex + 1) % videos.length);

  const togglePlay = () => {
    const video = videoRefs.current[videoIndex];
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => setIsMuted(!isMuted);

  const handleEnded = () => setIsPlaying(false);

  return (
    <section className="is-wrapper">
      <div className="is-container">

        {/* ── Gauche : vidéo + contrôles ── */}
        <div className="is-left-wrapper">
          <div className="is-left">
            <div 
              className="is-video-track" 
              ref={trackRef}
              onScroll={handleScroll}
            >
              {videos.map((src, i) => (
                <div className="is-video-slot" key={i}>
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    className="is-image"
                    src={src}
                    onEnded={handleEnded}
                    playsInline
                    preload="metadata"
                    muted={isMuted}
                  />
                </div>
              ))}
            </div>

            {/* Bouton Silence (Mute) */}
            <button className="is-btn-mute" onClick={toggleMute} aria-label={isMuted ? "Activer le son" : "Mettre en sourdine"}>
              {isMuted ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="#1376F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="#1376F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>

            {/* Boutons slider */}
            <div className="is-controls">
              <button className="is-btn is-btn-nav" onClick={prev} aria-label="Précédent">
                <svg viewBox="0 0 24 24" fill="none">
                  {i18n.language === "ar" ? (
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#1376F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  ) : (
                    <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="#1376F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                </svg>
              </button>

              <button className="is-btn is-btn-play" onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Lire"}>
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="6" y="5" width="4" height="14" rx="1" fill="#1376F8" />
                    <rect x="14" y="5" width="4" height="14" rx="1" fill="#1376F8" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M8 5.5L18 12L8 18.5V5.5Z" fill="#1376F8" />
                  </svg>
                )}
              </button>

              <button className="is-btn is-btn-nav" onClick={next} aria-label="Suivant">
                <svg viewBox="0 0 24 24" fill="none">
                  {i18n.language === "ar" ? (
                    <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="#1376F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  ) : (
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#1376F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                </svg>
              </button>
            </div>

            {/* Indicateurs de progression (limité à 5 points glissants) */}
            <div className="is-dots">
              {(() => {
                const totalDots = 5;
                const startIndex = Math.max(0, Math.min(videos.length - totalDots, videoIndex - 2));
                const visibleIndices = Array.from({ length: totalDots }, (_, i) => startIndex + i);
                return visibleIndices.map((i) => (
                  <button
                    key={i}
                    className={`is-dot${i === videoIndex ? " is-dot-active" : ""}`}
                    onClick={() => scrollToSlide(i)}
                    aria-label={`Vidéo ${i + 1}`}
                  />
                ));
              })()}
            </div>
          </div>
        </div>

        {/* ── Droite : texte fixe (ne change pas) ── */}
        <div className="is-right">
          <span className="is-tag">{t(textContent.tagKey, textContent.defaultTag)}</span>
          <div className="is-tag-line" />
          <h3 className="is-title">{t(textContent.titleKey, textContent.defaultTitle)}</h3>
          <ul className="is-list">
            {textContent.items.map((item, i) => (
              <li key={i} className="is-list-item">{t(item.key, item.default)}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}