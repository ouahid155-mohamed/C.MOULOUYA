import { useTranslation } from "react-i18next";
import SectionHeader from '../components/SectionHeader/SectionHeader'
import FAQSection from '../components/FAQSection/FAQSection'
import ContactFooter from '../components/ContactFooter/ContactFooter'

export default function FAQ() {
    const { t } = useTranslation();
    return (
        <>
            <SectionHeader
                title={t("faq_page.title", "Vos Questions, Nos Réponses")}
                subtitle={t("faq_page.subtitle", "Notre FAQ répond rapidement à vos questions pour vous guider dans votre parcours de soins.")}
            />
            <FAQSection />
            <ContactFooter />
        </>
    )
}