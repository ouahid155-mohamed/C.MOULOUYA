import { useTranslation } from "react-i18next";
import SectionHeader from '../components/SectionHeader/SectionHeader'
import ContactSection from '../components/ContactSection/ContactSection'
import ContactFooter from '../components/ContactFooter/ContactFooter'

export default function Contact() {
    const { t } = useTranslation();
    return (
        <>
            <SectionHeader
                title={t("contact_page.title", "Parlez-Nous De Vous")}
                subtitle={t("contact_page.subtitle", "Disponibles 24h/24, nous garantissons une prise en charge permanente et des soins médicaux de qualité, assurés avec réactivité et professionnalisme.")}
            />
            <ContactSection />
            <ContactFooter hideForm />
        </>
    )
}
