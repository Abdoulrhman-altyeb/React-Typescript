import ContactButton from '../components/ContactButton';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <AboutSection/>
            <ServicesSection />
            <ProjectsSection/>
            <ContactButton />
        </>
    )
}

export default Home;