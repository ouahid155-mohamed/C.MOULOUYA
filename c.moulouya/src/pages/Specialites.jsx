import SectionHeader from '../components/SectionHeader/SectionHeader'
import SpecialitesDetailSection from '../components/SpecialitesDetailSection/SpecialitesDetailSection'
import ContactFooter from '../components/ContactFooter/ContactFooter'

export default function Specialites() {
    return(
        <>
            <SectionHeader
                title="Nos Spécialités"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt."
            />
            <SpecialitesDetailSection />
            <ContactFooter />
        </>
    )
}