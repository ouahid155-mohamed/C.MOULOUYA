import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useCmsContent } from "../../context/CmsContext";
import videoBox from "../../assets/videos/Video Box.png";
import ellipseLeft from "../../assets/Ellipse 1088.png";
import ellipseRight from "../../assets/Ellipse 1833.png";
import "./VideoSection.css";

const DEFAULT_VIDEO_SRC =
  "https://cdn.jsdelivr.net/gh/ouahid155-mohamed/C.MOULOUYA-assets@main/clinique%20moulouya%20youtube%20version(1)(1).mp4";

export default function VideoSection() {
  const { t } = useTranslation();
  const { getCmsText, getCmsMedia } = useCmsContent();
  const [playing, setPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);
  const preloadVideoRef = useRef(null);

  const videoSrc = getCmsMedia("main_video", DEFAULT_VIDEO_SRC);
  const thumbSrc = getCmsMedia("main_video_thumbnail", videoBox);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);
    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);
    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !playing) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobile, playing]);

  useEffect(() => {
    preloadVideoRef.current?.load();
  }, [videoSrc]);

  return (
    <section className="vs-wrapper">
      <div className="vs-text">
        <h2 className="vs-title">
          {getCmsText(
            "video.title",
            t(
              "video.title",
              "Votre sante merite une experience unique accompagnee par nos experts !"
            )
          )
            .split("unique")
            .reduce((prev, curr, i) => [prev, <br key={i} />, "unique" + curr])}
        </h2>
        <div className="vs-title-line" />
        <p className="vs-subtitle">
          {getCmsText(
            "video.subtitle",
            t(
              "video.subtitle",
              "L'excellence medicale definit notre engagement. La Clinique Moulouya mobilise son plateau technique innovant et des experts qualifies pour assurer une prise en charge securisee, humaine et performante, au service de votre retablissement."
            )
          )}
        </p>
      </div>

      <div className="vs-video-container">
        <video
          ref={preloadVideoRef}
          src={videoSrc}
          className="vs-video-preload"
          preload="auto"
          muted
          playsInline
          aria-hidden="true"
        />
        <img src={ellipseLeft} alt="" className="vs-deco vs-deco-left" aria-hidden="true" />
        <img src={ellipseRight} alt="" className="vs-deco vs-deco-right" aria-hidden="true" />

        <div className={`vs-video-box ${playing ? "vs-video-playing" : ""}`} onClick={() => !playing && setPlaying(true)}>
          {(!playing || (playing && isMobile)) && (
            <>
              <img src={thumbSrc} alt="Video Clinique Moulouya" className="vs-video-thumb" />
              {!playing && <button className="vs-play-btn" aria-label="Lire la video" />}
            </>
          )}

          {playing && !isMobile && (
            <video
              ref={videoRef}
              src={videoSrc}
              className="vs-video-active"
              controls
              autoPlay
              preload="auto"
              playsInline
              onClick={() => {
                if (!videoRef.current) return;
                if (videoRef.current.paused) {
                  videoRef.current.play();
                } else {
                  videoRef.current.pause();
                }
              }}
            />
          )}
        </div>

        <div className="vs-blue-bg" />
      </div>

      {playing && isMobile && (
        <div className="vs-video-modal" onClick={() => setPlaying(false)} role="dialog" aria-modal="true">
          <div className="vs-video-modal-card" onClick={(event) => event.stopPropagation()}>
            <button className="vs-video-modal-close" onClick={() => setPlaying(false)} aria-label="Fermer la video">
              x
            </button>
            <video
              ref={videoRef}
              src={videoSrc}
              className="vs-video-modal-player"
              controls
              autoPlay
              preload="auto"
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}
