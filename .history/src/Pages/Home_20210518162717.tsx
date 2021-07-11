import ContactButton from '../components/ContactButton';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection'

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <AboutSection/>
            <ContactButton />
        </>
    )
}

export default Home;