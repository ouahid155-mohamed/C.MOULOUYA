import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/NavBar";
import HeroSection from "../components/Hero Section/HeroSection";
import VideoSection from "../components/Video Section/Videosection";
import SectionHeader from "../components/SectionHeader/Sectionheader";
import InterventionsSection from "../components/Interventions Section/InterventionsSection";
import DoctorsSection from "../components/Doctors Section/DoctorsSection";
import SpecialitiesSection from '../components/Specialities Section/SpecialitiesSection';
import ContactFooter from '../components/Contact Footer/ContactFooter';

function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <HeroSection />
            <VideoSection />
            <SectionHeader
                title="Découvrir notre clinique"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt."
            />
            <InterventionsSection />
            <div style={{ marginBottom: "-20px" }}></div>
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