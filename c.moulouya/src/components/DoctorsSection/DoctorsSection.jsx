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
  return (
    <section className="ds-wrapper">
      <div className="ds-grid">
        {doctors.map((doc, i) => (
          /* Wrapper pour la bordure dégradée */
          <div className="ds-card-border" key={i}>
            <div className="ds-card">

              {/* Zone photo */}
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

              {/* Nom + spécialité */}
              <div className="ds-info">
                <span className="ds-name">{doc.name}</span>
                <span className="ds-specialty">{doc.specialty}</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}