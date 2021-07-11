import ContactButton from '../components/ContactButton'
import HeroSection from '../components/HeroSection'

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