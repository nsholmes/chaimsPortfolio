import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import './Carousel.css';

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


    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log('effect called:', isOpen);
        if (isOpen && !open) {
            setOpen(true);
        } else {
            console.log("No Go!") 
        }

    });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onClosed();
    };

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
                            pauseOnHover={false} easing="linear" duration={2500} arrows={true}>
                            {
                                pictures.map((pic, idx) => {
                                    return (
                                        // <div style={{'backgroundPosition': 'center', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'cover', 'width': '800px', 'height': '800px','backgroundImage': `url(${pic})` }}>
                                        <img className={classes.picture} src={pic} />
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