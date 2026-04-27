import { useState } from "react";
import videoBox from "../../assets/videos/Video Box.png";


export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="vs-wrapper">

      {/* ── Texte centré ── */}
      <div className="vs-text">
        <h2 className="vs-title">
          Préparez-vous à vivre une experience <br />
          unique avec nos experts !
        </h2>
        <div className="vs-title-line" />
        <p className="vs-subtitle">
          votre santé, notre priorité. située au cœur de la région, la clinique moulouya <br />
          allie expertise médicale et technologies modernes pour vous offrir des <br />
          soins de qualité dans un environnement chaleureux et sécurisé.
        </p>
      </div>

      {/* ── Zone vidéo ── */}
      <div className="vs-video-container">

        {/* Décorations demi-cercles pointillés */}
        <div className="vs-deco vs-deco-left" />
        <div className="vs-deco vs-deco-right" />

        {/* Box vidéo */}
        <div className="vs-video-box" onClick={() => setPlaying(!playing)}>
          <img src={videoBox} alt="Vidéo Clinique Moulouya" className="vs-video-thumb" />

          {/* Bouton play */}
          {!playing && (
            <button className="vs-play-btn" aria-label="Lire la vidéo">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.9" />
                <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#1376F8" />
              </svg>
            </button>
          )}
        </div>

        {/* Fond dégradé bleu en bas */}
        <div className="vs-blue-bg" />
      </div>

    </section>
  );
}