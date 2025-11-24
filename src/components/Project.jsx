import '../styles/Project.css';
import { Link } from 'react-router-dom';
import { projects } from '../data/ProjectSection'; 
import { useState } from 'react'; 

function Project() {
    
    const [visibleProjects, setVisibleProjects] = useState(3);

    const handleViewMore = () => {
        
        setVisibleProjects(prev => prev + 3); 
    };

    return (
        <div className='project-section' id="projects">
            <div className="project-heading">
                <h1>I made some Projects too~</h1>
            </div>
            <div className='project-wrapper'>
                {projects.slice(0, visibleProjects).map(project => (
                    <div key={project.id} className="container-project">
                        <div className='container-project-image'>
                            <img src={project.img} alt="project" />
                        </div>
                        <div className='container-project-text'>
                            <h2>{project.heading}</h2>
                            <p>{project.desc}</p>
                            <Link to={project.link} className="view-more-link">{project.view_more}</Link>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProjects < projects.length && (
                <button className='btn' onClick={handleViewMore}>View More Projects →</button>
            )}
            
        </div>
    );
}

export default Project;