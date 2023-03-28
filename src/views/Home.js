import { Box, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { Slides } from '../components';
import Categories from '../components/Categories/Categories';
import { getImageJson } from '../utils';
import './home.css';
import { picsv2 } from '../utils/images/picV2';
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigator = useNavigate();
    const { base, mainBkg } = picsv2;
    useEffect(() => {

    }, [])
    return (
        <div>
            <div className="homeBKG" style={{ 'backgroundImage': `url(${base}/${mainBkg})` }}>

            </div>
            <div className='scroll-layer'>
                <div className='welcomeNameCss'>
                    <div className='siteNameCss'>
                        <span>Chaim</span> <span>Nazeer</span>
                    </div>
                    <div className='scrollInstCss'>
                        <span>Scroll to the</span> <span className='whiteTextCss'>Portfolio</span>
                    </div>
                </div>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginBottom: '60px'
                }}>
                    <iframe
                        width="650"
                        height="405"
                        src="https://www.youtube.com/embed/C5EcF7ZsFWs"
                        title="YouTube video player" frameborder="10"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    <iframe
                        width="650"
                        height="405"
                        src="https://www.youtube.com/embed/enF0_djdhSY"
                        title="YouTube video player" frameborder="10"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </Box>
                <Box className='scroll-layer-section' sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '25px',
                    padding: '2vh 2vw',
                    textAlign: 'left',
                    backgroundColor: '#efefef22',
                    width: '96vw',
                    color: 'antiquewhite'
                }}>
                    <div className='nameInfoSect'>
                        <Box sx={{ color: '#9c7fba', textAlign: 'left', minWidth: '200px', fontSize: '1.3em' }}>
                            Chaim Nazeer
                        </Box>
                        <div>Photo Journalist</div>
                        <div>Rock Climbing Enthusiast</div>
                    </div>
                    <div className='infoSect'>
                        My passion is to capture the beauty and emotion of life through the lens
                        of a camera. Here, you can find a collection of stunning photographs that
                        capture the story behind every image. Whether it’s a portrait, landscape,
                        or product shot, I strive to tell a story that will evoke emotion in the
                        viewer. As a St. Louis, Missouri photographer, I specialize in high contrast
                        black and whites and aim to showcase the good, the bad, and the ugly.
                        My goal is to raise awareness for marginalized communities and to create
                        meaningful images that will be remembered for a lifetime. I invite you to
                        explore my portfolio to get a glimpse of my work and to contact me if you
                        have any questions.
                    </div>
                </Box>
                <Box className='nav2' sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    width: '100vw',
                    fontSize: '20px',
                    color: 'antiquewhite',
                    backgroundColor: '#000',
                    height: '100px',
                    alignItems: 'center'
                }}>
                    <div onClick={() => navigator('/stills')}>Stills</div>
                    <div onClick={() => navigator('/motion')}>Motion</div>
                    <div onClick={() => navigator('/photoessay')}>Photo Essay</div>
                </Box>
            </div>
        </div>
    )
}

export default Home;