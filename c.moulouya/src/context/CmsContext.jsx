import React, { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const CmsContext = createContext(null);

const normalizeCmsLang = (language) => {
  if (language?.startsWith("ar")) return "ar";
  if (language?.startsWith("en")) return "en";
  return "fr";
};

export function CmsProvider({ children }) {
  const [cmsData, setCmsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cms/content")
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error " + res.status);
        return res.json();
      })
      .then((data) => {
        setCmsData(data);
      })
      .catch((err) => {
        console.warn("CMS content fetch failed, using fallback locales:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  /**
   * Résoudre un texte CMS par clé (ex: "history.desc").
   * Priorité : langue courante → français → fallback fourni.
   */
  const getCmsText = (key, fallbackDefault) => {
    const lang = normalizeCmsLang(i18n.language);

    if (cmsData?.texts?.[lang]?.[key]) {
      return cmsData.texts[lang][key];
    }
    if (cmsData?.texts?.fr?.[key]) {
      return cmsData.texts.fr[key];
    }
    return fallbackDefault ?? "";
  };

  /**
   * Résoudre une info de contact CMS.
   * contact est un objet plat : { phone_1: '...', phone_2: '...', email: '...', address_fr: '...', ... }
   */
  const getCmsContact = (key, fallbackDefault) => {
    if (!cmsData?.contact) return fallbackDefault ?? "";
    // Cherche la clé exacte, puis clé localisée
    const lang = normalizeCmsLang(i18n.language);
    const localKey = `${key}_${lang}`;
    if (cmsData.contact[localKey] !== undefined) return cmsData.contact[localKey];
    if (cmsData.contact[key] !== undefined) return cmsData.contact[key];
    return fallbackDefault ?? "";
  };

  /**
   * Résoudre un média CMS (retourne l'URL publique ou le fallback asset local).
   * media est un objet plat : { hero_doctors: 'http://...', hero_badge: '...', ... }
   * Si la valeur est null/vide (pas encore uploadé), retourne le fallback.
   */
  const getCmsMedia = (key, fallbackAsset) => {
    if (cmsData?.media?.[key]) {
      return cmsData.media[key];
    }
    return fallbackAsset;
  };

  const value = {
    cmsData,
    loading,
    getCmsText,
    getCmsContact,
    getCmsMedia,
    specialties: cmsData?.specialties || null,
    stats: cmsData?.stats || null,
    // contact : objet plat { phone_1, phone_2, email, address_fr, ... }
    contact: cmsData?.contact || null,
    // socials : objet plat { instagram: url, facebook: url, tiktok: url }
    socials: cmsData?.socials || null,
    // faq : tableau [{group_key, group_title_fr, group_title_en, group_title_ar, question_fr, question_en, question_ar, answer_fr, answer_en, answer_ar, order, active}]
    faq: cmsData?.faq || null,
  };

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
}

export function useCmsContent() {
  const context = useContext(CmsContext);
  if (!context) {
    return {
      cmsData: null,
      loading: false,
      getCmsText: (k, d) => d ?? "",
      getCmsContact: (k, d) => d ?? "",
      getCmsMedia: (k, d) => d,
      specialties: null,
      stats: null,
      contact: null,
      socials: null,
      faq: null,
    };
  }
  return context;
}
