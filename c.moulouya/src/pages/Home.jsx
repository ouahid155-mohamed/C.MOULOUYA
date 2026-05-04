
import HeroSection from "../components/HeroSection/HeroSection";
import VideoSection from "../components/VideoSection/VideoSection";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import InterventionsSection from "../components/InterventionsSection/InterventionsSection";
import DoctorsSection from "../components/DoctorsSection/DoctorsSection";
import SpecialitiesSection from '../components/SpecialitiesSection/SpecialitiesSection';
import ContactFooter from '../components/ContactFooter/ContactFooter';

function Home() {
    return (
        <>

            <HeroSection />
            <VideoSection />
            <SectionHeader
                title="Découvrir notre clinique"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt."
            />
            <InterventionsSection />
            <SectionHeader
                title="Nos Docteurs"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt."
            />
            <DoctorsSection />
            <SectionHeader
                title="Nos Spécialités Médicales"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt."
            />
            <SpecialitiesSection />
            <ContactFooter />
        </>
    )
}

export default Home