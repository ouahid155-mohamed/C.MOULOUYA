import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCmsContent } from "../../context/CmsContext";
import "./FAQSection.css";

// ── Données statiques de secours ──────────────────────────────────────
const faqGroupsStatic = [
  {
    id: "clinique",
    titleKey: "faq.group_clinique.title",
    defaultTitle: "À Propos De La Clinique",
    items: [
      {
        questionKey: "faq.group_clinique.q1",
        defaultQuestion: "Quels services médicaux propose la clinique ?",
        answerKey: "faq.group_clinique.a1",
        defaultAnswer: "La clinique propose une prise en charge complète avec des services d'urgences et plusieurs spécialités médicales et chirurgicales, dont la chirurgie viscérale, l'urologie, l'oncologie, l'orthopédie-traumatologie, la gynécologie-obstétrique, l'anesthésie-réanimation, l'ORL, la gastro-entérologie, l'endoscopie digestive et la médecine interne.",
      },
      {
        questionKey: "faq.group_clinique.q2",
        defaultQuestion: "Qui sont les médecins de la clinique ?",
        answerKey: "faq.group_clinique.a2",
        defaultAnswer: "La clinique dispose d'une équipe de médecins spécialistes, dont le Dr Aziz LAARBI en chirurgie urologique et le Dr Kamal ADNANI en chirurgie orthopédique et traumatologique, assurant une prise en charge experte et spécialisée des patients.",
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
        defaultAnswer: "La clinique propose plusieurs spécialités médicales et chirurgicales, notamment les urgences, la chirurgie viscérale, l'urologie, la chirurgie oncologique, l'orthopédie-traumatologie, la gynécologie-obstétrique, l'anesthésie-réanimation, l'ORL, la gastro-entérologie, l'endoscopie digestive et la médecine interne.",
      },
      {
        questionKey: "faq.group_clinique.q5",
        defaultQuestion: "La clinique est-elle équipée de matériel moderne ?",
        answerKey: "faq.group_clinique.a5",
        defaultAnswer: "Oui, la clinique dispose d'un plateau technique moderne et d'équipements médicaux de pointe, permettant des diagnostics précis et une prise en charge sûre et efficace des patients.",
      },
      {
        questionKey: "faq.group_clinique.q6",
        defaultQuestion: "La clinique accueille-t-elle tous les âges ?",
        answerKey: "faq.group_clinique.a6",
        defaultAnswer: "Oui, la clinique accueille des patients de tous âges et assure une prise en charge adaptée à chaque étape de la vie, de l'enfant à l'adulte, avec des soins personnalisés et sécurisés.",
      },
      {
        questionKey: "faq.group_clinique.q7",
        defaultQuestion: "La clinique respecte-t-elle les normes d'hygiène ?",
        answerKey: "faq.group_clinique.a7",
        defaultAnswer: "Oui, la clinique applique des protocoles stricts d'hygiène et de sécurité, conformes aux normes médicales en vigueur, afin de garantir des soins sûrs et un environnement sain pour tous les patients.",
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
        defaultAnswer: "Lors de votre consultation, il est recommandé d'apporter vos documents médicaux (ordonnances, analyses, comptes rendus), votre carte d'identité et tout résultat d'examen récent pour faciliter une prise en charge complète et efficace.",
      },
      {
        questionKey: "faq.group_consultation.q2",
        defaultQuestion: "Puis-je apporter mes anciens rapports médicaux ?",
        answerKey: "faq.group_consultation.a2",
        defaultAnswer: "Oui, il est fortement recommandé d'apporter vos anciens rapports médicaux, analyses et examens afin d'aider le médecin à mieux comprendre votre historique et assurer une prise en charge plus précise et adaptée.",
      },
      {
        questionKey: "faq.group_consultation.q3",
        defaultQuestion: "Comment prendre rendez-vous ?",
        answerKey: "faq.group_consultation.a3",
        defaultAnswer: "Vous pouvez prendre rendez-vous par téléphone ou directement à l'accueil de la clinique. Notre équipe vous accompagne pour vous proposer un créneau adapté dans les meilleurs délais.",
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
        defaultAnswer: "Oui, vous pouvez annuler ou reporter votre rendez-vous en contactant la clinique par téléphone ou en vous présentant à l'accueil. Nous vous invitons à prévenir à l'avance afin de mieux organiser les consultations.",
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
        defaultAnswer: "Le diagnostic des patients est réalisé à travers une consultation médicale, un examen clinique et, si nécessaire, des examens complémentaires (analyses, imagerie médicale) afin d'assurer une évaluation précise et une prise en charge adaptée.",
      },
    ],
  },
];

// ── Composant accordéon pour un groupe ─────────────────────────
function FAQGroup({ group, openItemKey, onToggleItem, cmsItems }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("en") ? "en" : "fr";

  const getItemKey = (i) => `${group.id}-${i}`;

  // Priorité : données CMS si disponibles, sinon fallback statique
  const normalizeQuestion = (value) =>
    String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();

  const items = (() => {
    if (!cmsItems || cmsItems.length === 0) return group.items;

    const remainingCmsItems = [...cmsItems];
    const mergedItems = group.items.map((staticItem) => {
      const staticQuestion = normalizeQuestion(t(staticItem.questionKey, staticItem.defaultQuestion));
      const matchIndex = remainingCmsItems.findIndex((cmsItem) => {
        const candidates = [
          cmsItem.question_fr,
          cmsItem.question_en,
          cmsItem.question_ar,
          cmsItem[`question_${lang}`],
        ];

        return candidates.some((candidate) => normalizeQuestion(candidate) === staticQuestion);
      });

      if (matchIndex === -1) return staticItem;

      const [matchedCmsItem] = remainingCmsItems.splice(matchIndex, 1);
      return matchedCmsItem;
    });

    return [...mergedItems, ...remainingCmsItems];
  })();

  return (
    <div className="faq-group">
      {/* Titre du groupe avec flèches SVG rouges */}
      <div className="faq-group-title">
        {/* Flèche gauche */}
        <svg className="faq-arrow-svg" width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={isRtl ? "M24 14H4M4 14L13 5M4 14L13 23" : "M4 14H24M24 14L15 5M24 14L15 23"} stroke="#FF4949" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <h2 className="faq-group-heading">
          {/* Titre CMS ou fallback i18n */}
          {cmsItems
            ? (group.cmsTitle?.[lang] || group.cmsTitle?.fr || t(group.titleKey, group.defaultTitle))
            : t(group.titleKey, group.defaultTitle)}
        </h2>

        {/* Flèche droite */}
        <svg className="faq-arrow-svg" width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={isRtl ? "M4 14H24M24 14L15 5M24 14L15 23" : "M24 14H4M4 14L13 5M4 14L13 23"} stroke="#FF4949" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Liste des questions */}
      <div className="faq-list">
        {items.map((item, i) => {
          const itemKey = getItemKey(i);
          const isOpen = openItemKey === itemKey;

          // Support CMS (champs question/answer) et statique (questionKey/answerKey)
          const question = item[`question_${lang}`]
            || item.question_fr
            || (item.question ? (item.question[lang] || item.question.fr || item.question) : null)
            || t(item.questionKey, item.defaultQuestion);
          const answer = item[`answer_${lang}`]
            || item.answer_fr
            || (item.answer ? (item.answer[lang] || item.answer.fr || item.answer) : null)
            || t(item.answerKey, item.defaultAnswer);

          return (
            <div
              key={i}
              className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => onToggleItem(itemKey)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{question}</span>
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
                  <p>{answer}</p>
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
  const [openItemKey, setOpenItemKey] = useState(null);
  const { faq, getCmsText, i18n: _i } = useCmsContent();
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("en") ? "en" : "fr";

  // Construire les groupes en prioritisant les données CMS
  const groupOrder = ["consultation", "clinique", "services"];

  const buildGroups = () => {
    if (faq && Array.isArray(faq) && faq.length > 0) {
      // Regrouper les FAQ CMS par groupe (group_id)
      const cmsGroupMap = {};
      faq.forEach(item => {
        const gid = item.group_id || item.group_key?.replace("group_", "") || "clinique";
        if (!cmsGroupMap[gid]) cmsGroupMap[gid] = { items: [], title: {} };
        cmsGroupMap[gid].items.push(item);
        if (item.group_title_fr) cmsGroupMap[gid].title.fr = item.group_title_fr;
        if (item.group_title_en) cmsGroupMap[gid].title.en = item.group_title_en;
        if (item.group_title_ar) cmsGroupMap[gid].title.ar = item.group_title_ar;
      });

      return faqGroupsStatic.map(staticGroup => ({
        ...staticGroup,
        cmsTitle: cmsGroupMap[staticGroup.id]?.title || null,
        cmsItems: cmsGroupMap[staticGroup.id]?.items || null,
      }));
    }
    return faqGroupsStatic.map(g => ({ ...g, cmsTitle: null, cmsItems: null }));
  };

  const allGroups = buildGroups();
  const orderedGroups = [...allGroups].sort(
    (a, b) => groupOrder.indexOf(a.id) - groupOrder.indexOf(b.id)
  );

  const toggleItem = (itemKey) => {
    setOpenItemKey((currentKey) => (currentKey === itemKey ? null : itemKey));
  };

  return (
    <section className="faq-wrapper">
      <div className="faq-container">
        {orderedGroups.map((group) => (
          <FAQGroup
            key={group.id}
            group={group}
            openItemKey={openItemKey}
            onToggleItem={toggleItem}
            cmsItems={group.cmsItems}
          />
        ))}
      </div>
    </section>
  );
}
