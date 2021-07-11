import ContactButton from '../components/ContactButton';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection';

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <AboutSection/>
            <ContactButton />
            <ServicesSection />
        </>
    )
}

export default Home;