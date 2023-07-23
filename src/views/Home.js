import { Box } from '@material-ui/core';
import { useEffect } from 'react';
import Link from '@material-ui/core/Link';
import './home.css';
import { picsv2 } from '../utils/images/picV2';
import { useHistory } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Home() {
    const history = useHistory();
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
                    marginBottom: '60px',
                    gap: '30px',
                    flexWrap: 'wrap'
                }}>
                    <iframe
                        width="650"
                        height="405"
                        src="https://www.youtube.com/embed/C5EcF7ZsFWs"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    <iframe
                        width="650"
                        height="405"
                        src="https://www.youtube.com/embed/enF0_djdhSY"
                        title="YouTube video player"
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
                    color: 'antiquewhite'
                }}>
                    <div className='nameInfoSect'>
                        <Box sx={{ color: '#9c7fba', textAlign: 'left', minWidth: '200px', fontSize: '1.3em' }}>
                            Chaim Nazeer
                        </Box>
                        <Box sx={{ fontSize: '0.8em' }}>Photo Journalist</Box>
                        <Box sx={{ fontSize: '0.8em' }}>Rock Climbing Enthusiast</Box>
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
                    width: '100%',
                    fontSize: '20px',
                    color: 'antiquewhite',
                    backgroundColor: '#000',
                    height: '100px',
                    alignItems: 'center'
                }}>
                    <div onClick={() => history.push('/stills')}>Stills</div>
                    <div onClick={() => history.push('/motion')}>Motion</div>
                    <div onClick={() => history.push('/photoessay')}>Photo Essay</div>
                </Box>
                <Box className="footerSection">
                    <Link href="https://www.instagram.com/chaimnazeer/">
                        <InstagramIcon sx={{ fontSize: 'large' }} />
                    </Link>
                    <Link href="emailto: cduffeholmes@gmail.com">
                        <MailOutlineIcon />
                    </Link>
                </Box>
            </div>
        </div>
    )
}

export default Home;