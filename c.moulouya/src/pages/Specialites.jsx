import { useTranslation } from "react-i18next";
import SectionHeader from '../components/SectionHeader/SectionHeader'
import SpecialitesDetailSection from '../components/SpecialitesDetailSection/SpecialitesDetailSection'
import ContactFooter from '../components/ContactFooter/ContactFooter'

export default function Specialites() {
    const { t } = useTranslation();
    return(
        <>
            <SectionHeader
                title={t("home.section3.title", "Nos Spécialités")}
                subtitle={t("home.section3.subtitle", "Des pôles d’excellence réunissant toutes nos spécialités pour vous garantir le meilleur soin.")}
            />
            <SpecialitesDetailSection />
            <ContactFooter />
        </>
    )
}