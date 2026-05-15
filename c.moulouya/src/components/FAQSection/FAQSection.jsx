import { useState } from "react";
import "./FAQSection.css";

// ── Données des 3 groupes ──────────────────────────────────────
const faqGroups = [
  {
    id: "clinique",
    title: "À Propos De La Clinique",
    items: [
      {
        question: "Quels services médicaux propose la clinique ?",
        answer:
          "La Clinique Moulouya propose une large gamme de services médicaux couvrant la chirurgie urologique, viscérale, orthopédique et traumatologique, ainsi que des consultations spécialisées dans de nombreux domaines.",
      },
      {
        question: "Qui sont les médecins de la clinique ?",
        answer:
          "Notre équipe est composée de médecins spécialistes reconnus, expérimentés et dévoués à la santé de leurs patients. Chaque praticien est sélectionné pour son expertise et son engagement envers des soins de qualité.",
      },
      {
        question: "Depuis quand la clinique est-elle en activité ?",
        answer:
          "Notre clinique est implantée à Berkane depuis plus de 20 ans. Forte de cette expérience, elle accompagne ses patients avec un savoir-faire reconnu, en alliant expertise médicale, technologies modernes et un engagement constant envers la qualité des soins et le bien-être de chacun.",
      },
      {
        question: "Quelles spécialités sont disponibles ?",
        answer:
          "Nous couvrons de nombreuses spécialités : urologie, chirurgie viscérale, orthopédie, traumatologie, gynécologie, pédiatrie, médecine interne et bien d'autres. Consultez notre page Spécialités pour la liste complète.",
      },
      {
        question: "La clinique est-elle équipée de matériel moderne ?",
        answer:
          "Oui, la Clinique Moulouya dispose d'équipements médicaux de dernière génération pour assurer des diagnostics précis et des interventions dans les meilleures conditions de sécurité.",
      },
      {
        question: "La clinique accueille-t-elle tous les âges ?",
        answer:
          "Absolument. Nous accueillons les patients de tous âges, du nourrisson à la personne âgée, avec des services adaptés à chaque tranche d'âge et des équipes spécialisées pour chaque profil.",
      },
      {
        question: "La clinique respecte-t-elle les normes d'hygiène ?",
        answer:
          "La Clinique Moulouya respecte strictement les protocoles d'hygiène et de stérilisation en vigueur. Nos équipes sont formées et nos équipements régulièrement contrôlés pour garantir un environnement sain et sécurisé.",
      },
    ],
  },
  {
    id: "consultation",
    title: "Préparer Votre Consultation",
    items: [
      {
        question: "Que faut-il apporter lors de la consultation ?",
        answer:
          "Veuillez apporter votre carte d'identité, votre carnet de santé ou de vaccination, tout document médical pertinent (analyses, ordonnances, imageries), ainsi que votre carte CNSS ou mutuelle le cas échéant.",
      },
      {
        question: "Puis-je apporter mes anciens rapports médicaux ?",
        answer:
          "Oui, nous vous encourageons à apporter tous vos anciens rapports médicaux, analyses et imageries. Ces documents permettent au médecin de mieux cerner votre historique de santé et de vous proposer un suivi personnalisé.",
      },
      {
        question: "Comment prendre rendez-vous ?",
        answer:
          "Vous pouvez prendre rendez-vous par téléphone en contactant directement notre équipe, ou en vous rendant à l'accueil de la clinique où notre personnel se fera un plaisir de vous assister. Nous veillons à vous proposer un créneau adapté à vos disponibilités dans les meilleurs délais.",
      },
      {
        question: "Puis-je venir accompagné(e) ?",
        answer:
          "Bien sûr. Vous êtes libre de venir accompagné(e) d'un proche. Dans certains cas (pédiatrie, chirurgie, etc.), la présence d'un accompagnant est même recommandée ou requise.",
      },
      {
        question: "Que faire en cas de retard ?",
        answer:
          "En cas de retard, veuillez nous prévenir par téléphone dès que possible. Nous ferons notre possible pour maintenir votre rendez-vous selon la disponibilité du médecin et le planning de la journée.",
      },
      {
        question: "Puis-je annuler ou reporter mon rendez-vous ?",
        answer:
          "Oui, vous pouvez annuler ou reporter votre rendez-vous en nous contactant au moins 24 heures à l'avance. Cela nous permet de libérer le créneau pour d'autres patients.",
      },
      {
        question: "Dois-je préparer des informations avant la consultation ?",
        answer:
          "Il est conseillé de noter vos symptômes, leur durée, les médicaments que vous prenez actuellement et toute allergie connue. Plus le médecin dispose d'informations précises, plus la consultation sera efficace.",
      },
    ],
  },
  {
    id: "services",
    title: "Services & Soins",
    items: [
      {
        question: "Proposez-vous des soins à domicile ?",
        answer:
          "Actuellement, nos soins sont dispensés au sein de la clinique. Nous disposons toutefois d'un service de suivi post-opératoire et d'orientations vers des prestataires à domicile si nécessaire.",
      },
      {
        question: "Disposez-vous de services d'analyses ou de diagnostic ?",
        answer:
          "Oui, la clinique dispose d'un plateau technique complet incluant un laboratoire d'analyses médicales, des services d'imagerie (radiologie, échographie) et d'autres équipements diagnostiques modernes.",
      },
      {
        question: "Quels types de traitements proposez-vous ?",
        answer:
          "Notre clinique est implantée à Berkane depuis plus de 20 ans. Forte de cette expérience, elle accompagne ses patients avec un savoir-faire reconnu, en alliant expertise médicale, technologies modernes et un engagement constant envers la qualité des soins et le bien-être de chacun.",
      },
      {
        question: "Proposez-vous des soins en urgence ?",
        answer:
          "Oui, nous disposons d'une unité de prise en charge des urgences médicales et chirurgicales. Notre équipe est disponible pour intervenir rapidement en cas de besoin.",
      },
      {
        question: "Disposez-vous d'un service de chirurgie ambulatoire ?",
        answer:
          "Oui, certaines interventions chirurgicales peuvent être réalisées en ambulatoire, ce qui permet au patient de rentrer chez lui le jour même après l'opération. Le médecin évaluera si cette option est adaptée à votre situation.",
      },
    ],
  },
];

// ── Composant accordéon pour un groupe ─────────────────────────
function FAQGroup({ group }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="faq-group">
      {/* Titre du groupe avec flèches SVG rouges */}
      <div className="faq-group-title">
        {/* Flèche gauche → (pointe vers la droite, vers le titre) */}
        <svg className="faq-arrow-svg" width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 14H24M24 14L15 5M24 14L15 23" stroke="#FF4949" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <h2 className="faq-group-heading">{group.title}</h2>

        {/* Flèche droite ← (pointe vers la gauche, vers le titre) */}
        <svg className="faq-arrow-svg" width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 14H4M4 14L13 5M4 14L13 23" stroke="#FF4949" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Liste des questions */}
      <div className="faq-list">
        {group.items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className={`faq-chevron ${isOpen ? "faq-chevron--up" : ""}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#9CA3AF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Composant principal ─────────────────────────────────────────
export default function FAQSection() {
  return (
    <section className="faq-wrapper">
      <div className="faq-container">
        {faqGroups.map((group) => (
          <FAQGroup key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
}
