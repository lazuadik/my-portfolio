import { testimonialSection } from '../data/TertimonialSection';
import '../styles/Testimonial.css';

function Testimonial() {
  return (
    <div className="testimonialSection" id="testimonial">
      <div className='testimonialHeader'>
        <h1>What They Say About Me🤔</h1>
      </div>
      
      <div className='testimonialCard-wrapper'>
        {/* Gunakan map untuk meloop data array */}
        {testimonialSection.map((item) => (
          <div key={item.id} className='testimonialCard'>
            <div className='testimonialDesc'>
              <h2>{item.testimonial_desc}</h2>
            </div>
            
            <div className='testimonialImagePerson'>  
              <img src={item.testimonial_img} alt={item.person} />
              <div className='testimonialPerson'>
                <h3>{item.person}</h3>
                <p>{item.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;