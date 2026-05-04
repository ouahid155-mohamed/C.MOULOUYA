
import SectionHeader   from '../components/SectionHeader/SectionHeader'
import HistoireSection from '../components/HistoireSection/HistoireSection'
import StatsSection    from '../components/StatsSection/StatsSection'

export default function APropos() {
  return (
    <>


      <SectionHeader
        title="Notre Histoire"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt."
      />
      <HistoireSection />
      <StatsSection />

      
    </>
  )
}