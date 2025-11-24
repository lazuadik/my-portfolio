import '../styles/Navbar.css'
import { useState } from 'react';
import { navbarSection } from '../data/NavbarSection'

function Navbar() {
    const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    };

    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav>
        <div className="container-navbar">
            <div className="navbar-logo">
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
                    <h2>Dhikarfi.</h2>
                </a>
            </div>
            <div className="hamburger-icon" onClick={handleShowNavbar}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
            <div className={`navbar-list ${showNavbar ? 'show' : ''}`}>
                <a href="#photography" onClick={(e) => { e.preventDefault(); handleScroll('photography'); }}>
                    <li>Photography</li>
                </a>
                <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>
                    <li>Projects</li>
                </a>
            </div>
            <div className="container-socmed">
                <a href="https://www.github.com/lazuadik/" target="_blank">
                    <img src={navbarSection.image_github} alt="GitHub" width="30" height="30" />
                </a>
                <a href="https://www.linkedin.com/in/andhikarafilazuardi/" target="_blank">
                    <img src={navbarSection.image_linkedin} alt="LinkedIn" width="30" height="30" />
                </a>
                <a href="https://www.instagram.com/dhikarfi/" target="_blank">
                    <img src={navbarSection.image_instagram} alt="Instagram" width="30" height="30" />
                </a>
                <a href="mailto: andhikarafilazuardi@gmail.com" target="_blank">
                    <img src={navbarSection.image_gmail} alt="Gmail" width="30" height="30" />
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
