import '../styles/TechStack.css';
import { techStack } from '../data/TechStackSection.jsx';

function TechStack() {
    return (
        <div className="techstack-section">
            <h1 className="techstack-heading">Tech Stack I Use👾</h1>
            
            <div className="slider">
                <div className="slide-track">
                    
                    {techStack.map((tech, index) => (
                        <div className="slide" key={index}>
                            <img src={tech.img} alt={tech.name} />
                        </div>
                    ))}

                    {techStack.map((tech, index) => (
                        <div className="slide" key={`duplicate-${index}`}>
                            <img src={tech.img} alt={tech.name} />
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}

export default TechStack;