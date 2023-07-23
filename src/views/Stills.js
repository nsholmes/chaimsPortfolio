import { useState } from 'react';
import { Gallery2 } from "../components";
import Carousel from "../components/Carousel/Carousel";
import { picsv2 } from '../utils/images/picV2';
import './view.css';

function Stills() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [imgSelected, setImgSelected] = useState(false);
  const { mins, pics } = picsv2;

  const carouselClosed = () => { setImgSelected(false); }
  const galleryImgClicked = (imgName) => {
    setImgSelected(true);
    setCurrentImgIndex(mins.findIndex(img => {
      const idx = img.indexOf(imgName);
      return idx >= 0 ? idx : 0;
    }));
  }
  return (
    <div>
      <h1>Stills</h1>
      <Carousel
        isOpen={imgSelected}
        onClosed={carouselClosed}
        currentIdx={currentImgIndex}
        pictures={pics}
      />
      <Gallery2
        isNested={true}
        imgClicked={galleryImgClicked}
        pictures={mins}
      />
    </div>
  )
}

export default Stills;