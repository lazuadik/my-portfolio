import '../styles/CareerJourney.css'
import { careerSection } from '../data/CareerSection'

function DataJourney() {
  return (
    <div>
        <div className="container-data-journey">
            <div className ="container-data-journey-background">
                <div className="container-data-journey-text">
                    <h2>How about my career journey?📊</h2>
                    <p>I’ve always loved math and design. In my first two years of university, I was active in UI/UX—joining competitions, working on freelance projects, and tutoring. In my third year.</p>
                    <p>I shifted to data science, starting with small projects, campus work, and Bangkit Academy (Machine Learning track).</p>
                    <p>Since then, I’ve grown through hands-on experience, including internships as a Data Analyst at Telkom Indonesia and Kalbe Nutritionals. I'm excited to keep exploring the world of data with even more passion.</p>
                </div>
                <div className="container-data-journey-image">
                    <img src={ careerSection.expImg } alt="data-journey"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataJourney
