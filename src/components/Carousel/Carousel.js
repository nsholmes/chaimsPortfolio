import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import './Carousel.css';
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        textAlign: 'center',
        width: '85%',
        padding: '10px',
    },
    picture: {
        height: '67vh'
    }
}));

function Carousel(props) {
    const { isOpen, pictures, currentIdx, onClosed } = props;
    const classes = useStyles();
    const [isLoaded, setIsLoaded] = useState(false)

    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log('effect called:', isOpen);
        if (isOpen && !open) {
            setOpen(true);
        } else {
            console.log("No Go!")
        }

    }, []);



    const handleClose = () => {
        setIsLoaded(false)
        setOpen(false);
        onClosed();
    };

    const imageLoading = () => {
        console.log("Loading!!!")
    }

    return (
        <div>

            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <Fade in={open}>
                    <div className={`paperCss ${classes.paper}`}>

                        <Slide
                            defaultIndex={currentIdx}
                            arrows={true}>
                            {!isLoaded ? <h1><Box sx={{ position: 'relative' }}>Loading...</Box></h1> : <></>}

                            {
                                pictures.map((pic, idx) => {
                                    return (<div className='each-slide-effect'>
                                        <div>
                                            <img alt="smallPics" className={classes.picture} src={pic} onLoadedData={() => { imageLoading() }} onLoad={() => { setIsLoaded(true) }} />
                                        </div>
                                    </div>
                                    );
                                })
                            }

                        </Slide>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default Carousel;