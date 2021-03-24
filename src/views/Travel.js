import { useState } from 'react';
import { Gallery } from "../components";
import Carousel from "../components/Carousel/Carousel";
import { TravelPics, TravelThumbnails } from "../utils";
import './view.css';
function Travel() {
    const [currentImgIndex, setCurrentImgIndex] = useState();
    const [imgSelected, setImgSelected] = useState(false);
    const flatThumbArray = TravelThumbnails.flat();
    const flatPicArray = TravelPics.flat();
    const carouselClosed = () => { setImgSelected(false); }
    const galleryImgClicked = (imgName) => {
        setImgSelected(true);
        setCurrentImgIndex(flatThumbArray.findIndex(img => {
            const idx = img.indexOf(imgName);
            return idx >= 0 ? idx : 0;
        }));
    }
    return (
        <div>
            <h1>Travel</h1>
            <Carousel
                isOpen={imgSelected}
                onClosed={carouselClosed}
                currentIdx={currentImgIndex}
                pictures={flatPicArray}
            />
            <Gallery
                isNested={true}
                imgClicked={galleryImgClicked}
                pictures={TravelThumbnails}
            />
        </div>
    );
};

export default Travel;