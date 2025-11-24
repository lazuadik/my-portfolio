import '../styles/Hero.css'
import { heroSection } from '../data/HeroSection'

function Hero() {
  return (
    <div>
      <div className='wrapper'>
        <div className="container-content">
          <div className="container-content-background">
            <div className="container-greeting">
              <div className="container-greeting-image">
                <img src={heroSection.image_dhika} alt="andhikarafi" />
              </div>
              <div className="container-greeting-text">
                <h1>Hi Friends!🚀</h1>
                <h3>
                  I’m Dhika, a person who starting his multi-identity journey.
                  <br />
                  I am a data enthusiast, photographer, and a person who wants to start writing.
                </h3>
                <div className="status">
                  <img src={heroSection.image_green_dot} alt="green-dot" />
                  <p>Currently Open to Work</p>
                </div>
              </div>
            </div>
            <div className="container-medium">
              <div className="container-medium-text">
                <h2>Read my Articles on</h2>
                <h1>Medium.com</h1>
                <p>medium.com/@andhikarafilazuardi</p>
                <a
                  href="https://medium.com/@andhikarafilazuardi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Read 📖</h3>
                </a>
              </div>
              <div className="container-medium-image">
                <img src={heroSection.image_medium} alt="medium" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero