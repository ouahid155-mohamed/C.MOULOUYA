import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./FAQSection.css";

// ── Données des 3 groupes ──────────────────────────────────────
const faqGroups = [
  {
    id: "clinique",
    titleKey: "faq.group_clinique.title",
    defaultTitle: "À Propos De La Clinique",
    items: [
      {
        questionKey: "faq.group_clinique.q1",
        defaultQuestion: "Quels services médicaux propose la clinique ?",
        answerKey: "faq.group_clinique.a1",
        defaultAnswer: "La clinique propose une prise en charge complète avec des services d’urgences et plusieurs spécialités médicales et chirurgicales, dont la chirurgie viscérale, l’urologie, l’oncologie, l’orthopédie-traumatologie, la gynécologie-obstétrique, l’anesthésie-réanimation, l’ORL, la gastro-entérologie, l’endoscopie digestive et la médecine interne.",
      },
      {
        questionKey: "faq.group_clinique.q2",
        defaultQuestion: "Qui sont les médecins de la clinique ?",
        answerKey: "faq.group_clinique.a2",
        defaultAnswer: "La clinique dispose d’une équipe de médecins spécialistes, dont le Dr Aziz LAARBI en chirurgie urologique et le Dr Kamal ADNANI en chirurgie orthopédique et traumatologique, assurant une prise en charge experte et spécialisée des patients.",
      },
      {
        questionKey: "faq.group_clinique.q3",
        defaultQuestion: "Depuis quand la clinique est-elle en activité ?",
        answerKey: "faq.group_clinique.a3",
        defaultAnswer: "La clinique est en activité depuis plus de 20 ans, avec une expérience confirmée dans la prise en charge médicale et chirurgicale des patients, garantissant des soins de qualité et une expertise reconnue dans la région.",
      },
      {
        questionKey: "faq.group_clinique.q4",
        defaultQuestion: "Quelles spécialités sont disponibles ?",
        answerKey: "faq.group_clinique.a4",
        defaultAnswer: "La clinique propose plusieurs spécialités médicales et chirurgicales, notamment les urgences, la chirurgie viscérale, l’urologie, la chirurgie oncologique, l’orthopédie-traumatologie, la gynécologie-obstétrique, l’anesthésie-réanimation, l’ORL, la gastro-entérologie, l’endoscopie digestive et la médecine interne.",
      },
      {
        questionKey: "faq.group_clinique.q5",
        defaultQuestion: "La clinique est-elle équipée de matériel moderne ?",
        answerKey: "faq.group_clinique.a5",
        defaultAnswer: "Oui, la clinique dispose d’un plateau technique moderne et d’équipements médicaux de pointe, permettant des diagnostics précis et une prise en charge sûre et efficace des patients.",
      },
      {
        questionKey: "faq.group_clinique.q6",
        defaultQuestion: "La clinique accueille-t-elle tous les âges ?",
        answerKey: "faq.group_clinique.a6",
        defaultAnswer: "Oui, la clinique accueille des patients de tous âges et assure une prise en charge adaptée à chaque étape de la vie, de l’enfant à l’adulte, avec des soins personnalisés et sécurisés.",
      },
      {
        questionKey: "faq.group_clinique.q7",
        defaultQuestion: "La clinique respecte-t-elle les normes d'hygiène ?",
        answerKey: "faq.group_clinique.a7",
        defaultAnswer: "Oui, la clinique applique des protocoles stricts d’hygiène et de sécurité, conformes aux normes médicales en vigueur, afin de garantir des soins sûrs et un environnement sain pour tous les patients.",
      },
    ],
  },
  {
    id: "consultation",
    titleKey: "faq.group_consultation.title",
    defaultTitle: "Préparer Votre Consultation",
    items: [
      {
        questionKey: "faq.group_consultation.q1",
        defaultQuestion: "Que faut-il apporter lors de la consultation ?",
        answerKey: "faq.group_consultation.a1",
        defaultAnswer: "Lors de votre consultation, il est recommandé d’apporter vos documents médicaux (ordonnances, analyses, comptes rendus), votre carte d’identité et tout résultat d’examen récent pour faciliter une prise en charge complète et efficace.",
      },
      {
        questionKey: "faq.group_consultation.q2",
        defaultQuestion: "Puis-je apporter mes anciens rapports médicaux ?",
        answerKey: "faq.group_consultation.a2",
        defaultAnswer: "Oui, il est fortement recommandé d’apporter vos anciens rapports médicaux, analyses et examens afin d’aider le médecin à mieux comprendre votre historique et assurer une prise en charge plus précise et adaptée.",
      },
      {
        questionKey: "faq.group_consultation.q3",
        defaultQuestion: "Comment prendre rendez-vous ?",
        answerKey: "faq.group_consultation.a3",
        defaultAnswer: "Vous pouvez prendre rendez-vous par téléphone ou directement à l’accueil de la clinique. Notre équipe vous accompagne pour vous proposer un créneau adapté dans les meilleurs délais.",
      },
      {
        questionKey: "faq.group_consultation.q4",
        defaultQuestion: "Puis-je venir accompagné(e) ?",
        answerKey: "faq.group_consultation.a4",
        defaultAnswer: "Oui, vous pouvez venir accompagné(e) lors de votre consultation. Cela est même encouragé si nécessaire pour votre confort et votre accompagnement médical.",
      },
      {
        questionKey: "faq.group_consultation.q5",
        defaultQuestion: "Que faire en cas de retard ?",
        answerKey: "faq.group_consultation.a5",
        defaultAnswer: "En cas de retard, il est recommandé de prévenir la clinique dès que possible afin de réorganiser votre rendez-vous. Notre équipe fera de son mieux pour vous proposer un nouveau créneau adapté.",
      },
      {
        questionKey: "faq.group_consultation.q6",
        defaultQuestion: "Puis-je annuler ou reporter mon rendez-vous ?",
        answerKey: "faq.group_consultation.a6",
        defaultAnswer: "Oui, vous pouvez annuler ou reporter votre rendez-vous en contactant la clinique par téléphone ou en vous présentant à l’accueil. Nous vous invitons à prévenir à l’avance afin de mieux organiser les consultations.",
      },
      {
        questionKey: "faq.group_consultation.q7",
        defaultQuestion: "Dois-je préparer des informations avant la consultation ?",
        answerKey: "faq.group_consultation.a7",
        defaultAnswer: "Oui, il est conseillé de préparer vos antécédents médicaux, traitements en cours et anciens examens afin de faciliter le diagnostic et assurer une prise en charge plus précise et adaptée.",
      },
    ],
  },
  {
    id: "services",
    titleKey: "faq.group_services.title",
    defaultTitle: "Services & Soins",
    items: [
      {
        questionKey: "faq.group_services.q1",
        defaultQuestion: "Proposez-vous des soins à domicile ?",
        answerKey: "faq.group_services.a1",
        defaultAnswer: "Actuellement, la clinique ne propose pas de soins à domicile, mais assure une prise en charge complète et adaptée au sein de ses services.",
      },
      {
        questionKey: "faq.group_services.q2",
        defaultQuestion: "La clinique réalise-t-elle des interventions chirurgicales ?",
        answerKey: "faq.group_services.a2",
        defaultAnswer: "Oui, la clinique réalise différentes interventions chirurgicales grâce à une équipe de chirurgiens spécialisés et des équipements modernes, assurant une prise en charge sûre et efficace des patients.",
      },
      {
        questionKey: "faq.group_services.q3",
        defaultQuestion: "Quels types de traitements proposez-vous ?",
        answerKey: "faq.group_services.a3",
        defaultAnswer: "La clinique propose des traitements médicaux et chirurgicaux adaptés à chaque patient, incluant la prise en charge des pathologies aiguës et chroniques, avec un suivi personnalisé assuré par des spécialistes.",
      },
      {
        questionKey: "faq.group_services.q4",
        defaultQuestion: "Quels protocoles de traitement sont proposés aux patients ?",
        answerKey: "faq.group_services.a4",
        defaultAnswer: "La clinique propose des protocoles de traitement adaptés à chaque patient, basés sur un diagnostic précis et une prise en charge personnalisée, allant des traitements médicaux aux interventions chirurgicales selon les besoins.",
      },
      {
        questionKey: "faq.group_services.q5",
        defaultQuestion: "Comment se fait le diagnostic des patients ?",
        answerKey: "faq.group_services.a5",
        defaultAnswer: "Le diagnostic des patients est réalisé à travers une consultation médicale, un examen clinique et, si nécessaire, des examens complémentaires (analyses, imagerie médicale) afin d’assurer une évaluation précise et une prise en charge adaptée.",
      },
    ],
  },
];

// ── Composant accordéon pour un groupe ─────────────────────────
function FAQGroup({ group }) {
  const { t } = useTranslation();
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

        <h2 className="faq-group-heading">{t(group.titleKey, group.defaultTitle)}</h2>

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
                <span className="faq-question-text">{t(item.questionKey, item.defaultQuestion)}</span>
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
                  <p>{t(item.answerKey, item.defaultAnswer)}</p>
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
