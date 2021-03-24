import { useState } from 'react';
import { Gallery } from '../components';
import Carousel from '../components/Carousel/Carousel';
import { JournalismPics, JournalismThumbnails } from '../utils';
import './view.css';

function Journalism() {
    const [currentImgIndex, setCurrentImgIndex] = useState();
    const [imgSelected, setImgSelected] = useState(false);
    const flatThumbArray = JournalismThumbnails.flat();
    const flatPicArray = JournalismPics.flat();
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
            <h1>Photo Journalism</h1>
            <Carousel
                isOpen={imgSelected}
                onClosed={carouselClosed}
                currentIdx={currentImgIndex}
                pictures={flatPicArray}
            />
            <Gallery
                isNested={true}
                imgClicked={galleryImgClicked}
                pictures={JournalismThumbnails}
            />
        </div>
    );
}

export default Journalism;