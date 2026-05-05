import { useState } from "react";
import doc1 from "../../assets/cheerful-male-doctor-white-gown-por4534trait 3 1.png";
import doc2 from "../../assets/ewrgt 1.png";
import doc3 from "../../assets/qwre 1.png";
import vector2 from "../../assets/Vector2.png";
import "./DoctorSlider.css";

const doctors = [
    {
        img: doc1,
        name: "Dr. Kamal Adnani",
        specialty: "Orthopédiste Traumatologue",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        specialties: [
            {
                title: "Chirurgie urologique",
                detail: "lithiase urinaire , chirurgie de la prostate , chirurgie de la vessie",
            },
            {
                title: "Chirurgie viscérale",
                detail: "vésicule biliaire , hernie, appendicectomie…",
            },
        ],
    },
    {
        img: doc2,
        name: "Dr. Aziz Laarbi",
        specialty: "Urologue",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        specialties: [
            {
                title: "Chirurgie urologique",
                detail: "lithiase urinaire , chirurgie de la prostate , chirurgie de la vessie",
            },
            {
                title: "Endoscopie",
                detail: "cystoscopie, urétéroscopie, résection transurétrale…",
            },
        ],
    },
    {
        img: doc3,
        name: "Dr. Az-Eddin El Bouhali",
        specialty: "Anesthésiste - Réanimateur",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        specialties: [
            {
                title: "Anesthésie générale",
                detail: "anesthésie locorégionale, sédation, soins intensifs",
            },
            {
                title: "Réanimation",
                detail: "prise en charge post-opératoire, urgences vitales…",
            },
        ],
    },
];

export default function DoctorSlider() {
    const [current, setCurrent] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) next();
        if (isRightSwipe) prev();
    };

    const prev = () => setCurrent((c) => (c - 1 + doctors.length) % doctors.length);
    const next = () => setCurrent((c) => (c + 1) % doctors.length);

    const doc = doctors[current];

    return (
        <section className="dsl-wrapper"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="dsl-inner">

                {/* ── Colonne gauche : photo ── */}
                <div className="dsl-photo-col">

                    {/* Points décoratifs Vector2 */}
                    <img src={vector2} alt="" className="dsl-dots" aria-hidden="true" />

                    {/* Arche bleue dégradée + photo */}
                    <div className="dsl-arch-wrap">
                        <div className="dsl-arch-bg" />
                        <img src={doc.img} alt={doc.name} className="dsl-photo" />
                    </div>

                </div>

                {/* ── Colonne droite : contenu ── */}
                <div className="dsl-content">
                    <h2 className="dsl-name">{doc.name}</h2>
                    <p className="dsl-specialty">{doc.specialty}</p>
                    <p className="dsl-desc">{doc.desc}</p>
                    <hr className="dsl-divider" />
                    <ul className="dsl-list">
                        {doc.specialties.map((s, i) => (
                            <li key={i} className="dsl-list-item">
                                <div className="dsl-list-header">
                                    <span className="dsl-list-dot" />
                                    <span className="dsl-list-title">{s.title}</span>
                                </div>
                                <p className="dsl-list-detail">{s.detail}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ── Contrôles (Flèches à gauche, Dots à droite) ── */}
            <div className="dsl-footer-nav">
                <div className="dsl-nav">
                    <button className="dsl-nav-btn" onClick={prev} aria-label="Précédent">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                    <button className="dsl-nav-btn" onClick={next} aria-label="Suivant">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>

                <div className="dsl-dots-nav">
                    {doctors.map((_, i) => (
                        <button
                            key={i}
                            className={`dsl-dot-btn ${i === current ? "active" : ""}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}