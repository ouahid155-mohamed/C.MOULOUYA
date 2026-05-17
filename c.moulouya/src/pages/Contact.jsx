import SectionHeader from '../components/SectionHeader/SectionHeader'
import ContactSection from '../components/ContactSection/ContactSection'
import ContactFooter from '../components/ContactFooter/ContactFooter'

export default function Contact() {
    return (
        <>
            <SectionHeader
                title="Parlez-Nous De Vous"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt."
            />
            <ContactSection />
            <ContactFooter hideForm />
        </>
    )
}
