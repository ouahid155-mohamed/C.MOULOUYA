import SectionHeader from '../components/SectionHeader/SectionHeader'
import FAQSection from '../components/FAQSection/FAQSection'
import ContactFooter from '../components/ContactFooter/ContactFooter'

export default function FAQ() {
    return (
        <>
            <SectionHeader
                title="Vos Questions, Nos Réponses"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt."
            />
            <FAQSection />
            <ContactFooter />
        </>
    )
}