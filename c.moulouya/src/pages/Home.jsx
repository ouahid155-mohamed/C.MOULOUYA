import HeroSection from "../components/HeroSection/HeroSection";
import { useTranslation } from "react-i18next";
import VideoSection from "../components/VideoSection/VideoSection";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import InterventionsSection from "../components/InterventionsSection/InterventionsSection";
import DoctorsSection from "../components/DoctorsSection/DoctorsSection";
import SpecialitiesSection from '../components/SpecialitiesSection/SpecialitiesSection';
import ContactFooter from '../components/ContactFooter/ContactFooter';

function Home() {
    const { t } = useTranslation();
    return (
        <>

            <HeroSection />
            <VideoSection />
            <SectionHeader
                title={t("home.section1.title", "LA CLINIQUE MOULOUYA À VOTRE SERVICE")}
                subtitle={t("home.section1.subtitle", "Au cœur de la région de l'Oriental, nous mettons notre expertise et nos spécialistes à votre entière disposition.")}
            />
            <InterventionsSection />
            <SectionHeader
                title={t("home.section2.title", "Nos experts médicaux")}
                subtitle={t("home.section2.subtitle", "Nos experts médicaux vous accompagnent avec compétence et attention pour garantir des soins de qualité et une prise en charge adaptée à vos besoins.")}
            />
            <DoctorsSection />
            <SectionHeader
                title={t("home.section3.title", "Nos Spécialités")}
                subtitle={t("home.section3.subtitle", "Des pôles d’excellence réunissant toutes nos spécialités pour vous garantir le meilleur soin.")}
            />
            <SpecialitiesSection />
            <ContactFooter />
        </>
    )
}

export default Home