import { Slide } from 'react-slideshow-image';
// import { LandscapePics } from './images';
import { LandscapePics } from '../../utils';
import './Slides.css';

function Slides() {
  return (
    <div>
      <Slide
        pauseOnHover={false}
        easing="linear"
        duration={2500}
        arrows={false}>
        {
          LandscapePics.map((pic) => (
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(${pic})` }} />
            </div>
          ))
        }
      </Slide>
    </div>
  )
}

export default Slides