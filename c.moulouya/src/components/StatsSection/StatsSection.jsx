import { useTranslation } from "react-i18next";
import vectorBg from "../../assets/Vector.png";
import icon1 from "../../assets/Group 40067.png";
import icon2 from "../../assets/Group 40069.png";
import icon3 from "../../assets/Group 1000011144.png";
import icon4 from "../../assets/Layer_1.png";
import "./StatsSection.css";

const stats = [
    {
        icon: <img src={icon3} alt="Médecins" />,
        value: "30+",
        labelKey: "stats.doctors",
        defaultLabel: "Médecins professionnels",
    },
    {
        icon: <img src={icon1} alt="Opérations" />,
        value: "1000+",
        labelKey: "stats.operations",
        defaultLabel: "Opérations réussies",
    },
    {
        icon: <img src={icon4} alt="Expérience" />,
        value: "20+",
        labelKey: "stats.experience",
        defaultLabel: "Des années d'expérience",
    },
    {
        icon: <img src={icon2} alt="Patients" />,
        value: "1000+",
        labelKey: "stats.patients",
        defaultLabel: "Patients satisfaits",
    },
];

export default function StatsSection() {
    const { t } = useTranslation();
    return (
        <section className="ss-wrapper">
            <div className="ss-inner">

                {/* Motif de fond Vector */}
                <img src={vectorBg} alt="" className="ss-vector" aria-hidden="true" />

                {/* ── Gauche ── */}
                <div className="ss-left">
                    <div className="ss-tag-row">
                        <span className="ss-tag">{t("stats.tag", "HISTOIRE DE RÉUSSITE")}</span>
                        <svg className="ss-wave" width="53" height="10" viewBox="0 0 53 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5.5C4.5 5.5 6.5 1.5 10 1.5C13.5 1.5 15.5 8.5 19 8.5C22.5 8.5 24.5 1.5 28 1.5C31.5 1.5 33.5 8.5 37 8.5C40.5 8.5 42.5 4.5 47 4.5M47 4.5L44 1.5M47 4.5L44 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    <h2 className="ss-title">
                        {t("stats.title", "Notre parcours d'excellence")}
                    </h2>

                    <p className="ss-desc">
                        {t("stats.desc", "Notre parcours d’excellence repose sur l’expertise médicale et la qualité des soins au service des patients.")}
                    </p>
                </div>

                {/* ── Droite : grille 2×2 ── */}
                <div className="ss-grid">
                    {stats.map((stat, i) => (
                        <div className="ss-card" key={i}>
                            <div className="ss-card-icon">{stat.icon}</div>
                            <div className="ss-card-content">
                                <span className="ss-card-value">{stat.value}</span>
                                <span className="ss-card-label">{t(stat.labelKey, stat.defaultLabel)}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}