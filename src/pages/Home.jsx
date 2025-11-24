import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Photography from '../components/Photography'
import CareerJourney from '../components/CareerJourney'
import Project from '../components/Project'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import TechStack from '../components/TechStack'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Photography />
      <CareerJourney />
      <Project />
      <Testimonial />
      <Footer />
    </>
  )
}

export default Home
