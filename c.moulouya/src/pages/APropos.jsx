import { useTranslation } from "react-i18next";
import SectionHeader from '../components/SectionHeader/SectionHeader'
import HistoireSection from '../components/HistoireSection/HistoireSection'
import StatsSection from '../components/StatsSection/StatsSection'
import DoctorSlider from '../components/DoctorSliderComp/DoctorSliderComp'
import ContactFooter from '../components/ContactFooter/ContactFooter'

export default function APropos() {
  const { t } = useTranslation();
  return (
    <>


      <SectionHeader
        title={t("apropos.section1.title", "Notre Histoire")}
        subtitle={t("apropos.section1.subtitle", "Plus de 20 ans d’expérience au service de votre santé et de votre confiance.")}
      />
      <HistoireSection />
      <StatsSection />
      <SectionHeader
        title={t("home.section2.title", "Nos experts médicaux")}
        subtitle={t("home.section2.subtitle", "Nos experts médicaux vous accompagnent avec compétence et attention pour garantir des soins de qualité et une prise en charge adaptée à vos besoins.")}
      />
      <DoctorSlider />
      <ContactFooter />


    </>
  )
}