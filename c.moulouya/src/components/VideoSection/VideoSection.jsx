import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import videoBox from "../../assets/videos/Video Box.png";
import ellipseLeft from "../../assets/Ellipse 1088.png";
import ellipseRight from "../../assets/Ellipse 1833.png";
import "./VideoSection.css";

export default function VideoSection() {
  const { t } = useTranslation();
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  return (
    <section className="vs-wrapper">

      {/* ── Texte centré ── */}
      <div className="vs-text">
        <h2 className="vs-title">
          {t("video.title", "Votre santé mérite une expérience unique accompagnée par nos experts !").split('unique').reduce((prev, curr, i) => [prev, <br key={i} />, 'unique' + curr])}
        </h2>
        <div className="vs-title-line" />
        <p className="vs-subtitle">
          {t("video.subtitle", "L'excellence médicale définit notre engagement. La Clinique Moulouya mobilise son plateau technique innovant et des experts qualifiés pour assurer une prise en charge sécurisée, humaine et performante, au service de votre rétablissement.")}
        </p>
      </div>

      {/* ── Zone vidéo ── */}
      <div className="vs-video-container">
        <img src={ellipseLeft} alt="" className="vs-deco vs-deco-left" aria-hidden="true" />
        <img src={ellipseRight} alt="" className="vs-deco vs-deco-right" aria-hidden="true" />
        {/* Box vidéo */}
        <div className={`vs-video-box ${playing ? "vs-video-playing" : ""}`} onClick={() => !playing && setPlaying(true)}>
          {!playing && (
            <>
              <img src={videoBox} alt="Vidéo Clinique Moulouya" className="vs-video-thumb" />
              {/* Bouton play (accessible, sans icône superposée) */}
              <button className="vs-play-btn" aria-label="Lire la vidéo" />
            </>
          )}

          {playing && (
            <video
              ref={videoRef}
              src="https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets@main/clinique%20moulouya%20youtube%20version(1)(1).mp4"
              className="vs-video-active"
              controls
              autoPlay
              playsInline
              onClick={() => {
                if (videoRef.current) {
                  if (videoRef.current.paused) {
                    videoRef.current.play();
                  } else {
                    videoRef.current.pause();
                  }
                }
              }}
            />
          )}
        </div>

        {/* Fond dégradé bleu en bas */}
        <div className="vs-blue-bg" />
      </div>

    </section>
  );
}