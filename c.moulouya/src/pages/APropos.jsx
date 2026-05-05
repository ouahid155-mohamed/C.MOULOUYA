
import SectionHeader from '../components/SectionHeader/SectionHeader'
import HistoireSection from '../components/HistoireSection/HistoireSection'
import StatsSection from '../components/StatsSection/StatsSection'
import DoctorSlider from '../components/Doctorslider/Doctorslider'
import ContactFooter from '../components/ContactFooter/ContactFooter'

export default function APropos() {
  return (
    <>


      <SectionHeader
        title="Notre Histoire"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt."
      />
      <HistoireSection />
      <StatsSection />
      <SectionHeader
        title="Nos Docteurs"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt."
      />
      <DoctorSlider />
      <ContactFooter />


    </>
  )
}