import Header        from '../components/Header/Header'
import Navbar        from '../components/NavBar/NavBar'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import HistoireSection from '../components/HistoireSection/HistoireSection'

export default function APropos() {
  return (
    <>
      <Header />
      <Navbar />

      <SectionHeader
        title="Notre Histoire"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt."
      />
      <HistoireSection />

      
    </>
  )
}