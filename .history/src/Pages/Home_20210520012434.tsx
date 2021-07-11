import ContactButton from '../components/ContactButton';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection';

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <AboutSection/>
            <ServicesSection />
            <ContactButton />
        </>
    )
}

export default Home;