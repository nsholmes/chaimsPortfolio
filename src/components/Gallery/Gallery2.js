import { Box, ImageList, ImageListItem } from '@material-ui/core';
import './Gallery.css';

function Gallery2(props) {
  const { pictures } = props;
  const numberOfGroups = 3;
  const leftOvers = pictures.length % numberOfGroups;
  const divisibleCount = pictures.length - leftOvers;
  const groupCount = divisibleCount / numberOfGroups;

  const picsArray = []

  for (let x = 0; x < numberOfGroups; x++) {
    const startVal = x * groupCount;
    const tempArr = pictures.slice(startVal, startVal + groupCount);
    picsArray.push(tempArr)
  }

  for (let x = 0; x < leftOvers; x++) {
    picsArray[x].push(pictures.at(-x));
  }
  return (
    <Box sx={{ display: 'flex' }}>
      {
        picsArray.map(picArr => (
          <Box>
            {
              picArr.map(pic => (
                <Box sx={{ borderRadius: 2, backgroundColor: 'black', padding: '10px', margin: '10px' }}>
                  <img alt=""
                    className="galleryImageCss"
                    src={pic}
                    srcSet={pic}
                    loading='lazy' />
                </Box>
              ))
            }
          </Box>
        ))
      }
    </Box>
  );
}

export default Gallery2;
