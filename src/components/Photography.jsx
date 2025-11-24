import '../styles/Photography.css'
import { photographySection } from '../data/PhotographySection'

export default function Photography() {
  return (
    <div>
        <div className="container-photography" id="photography">
            <div className="container-photography-text">
                <h2>I like things aesthetics✨</h2>
                <p>Since I was in high school, i love to watch Youtube videos that discussing about videography, cinematography, photography, or visual design.</p>
                <p>Then, in the past 6 months, I bought a camera and I took much photos. Also, I and my friend are openly to taking photos for graduation🎓</p>
                <a href="https://www.instagram.com/sakamoto.pictures/" target="_blank" rel="noopener noreferrer">
                    <span>You can see my photos here →</span>
                </a>
            </div>
            <div className="container-photography-image">
                <img src={ photographySection.landscape } alt="photography"/>
            </div>
        </div>
    </div>
  )
}
