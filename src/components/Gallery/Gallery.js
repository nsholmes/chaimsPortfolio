import './Gallery.css';

function Gallery(props) {
    const { isNested, pictures, imgClicked } = props;
    let picCount = 0;
    if (isNested) {
        return (
            <div className='galleryWrapperCss'>
                {
                    pictures.map(directory => {
                        return directory.map(pic => {
                            picCount++
                            return <div
                                onClick={() => {imgClicked(pic.split('/')[3])}}
                                className="galleryImageCss"
                                style={{ 'backgroundImage': `url(${pic})` }} />
                        });
                    })
                }
            </div>
        );
    } else {
        console.log('isNotNest');
        return (
            <div>
                {
                    pictures.map(pic => <div style={{ 'backgroundImage': `url(${pic}` }} />)
                }
            </div>
        );
    }
}

export default Gallery;