import { PlayCircleFilledTwoTone } from "@material-ui/icons";
import { useState } from "react";
import './videos.css';

function Videos() {
    let [vidUrl, setVidUrl] = useState('/videos/DailyRoutine.mp4');

    const videos = [
        { vidSrc: '/videos/DailyRoutine.mp4', vidName: 'Daily Routine' },
        { vidSrc: '/videos/GuessWellSee.mp4', vidName: `Guess We'll See` },
        { vidSrc: '/videos/Spooky.mp4', vidName: 'Spooky' }
    ]

    const vidClicked = (resUrl) => {
        setVidUrl(resUrl);
    }
    return (
        <div className='videosWrapperCss'>
            <h1>Videos</h1>

            <div className='videoImgLinksCss'>
                {
                    videos.map(vid => {
                        return (
                            <div
                                className={vidUrl === vid.vidSrc ? 'videoImgLinkCss isActive' : 'videoImgLinkCss'}
                                onClick={() => vidClicked(vid.vidSrc)}>
                                <PlayCircleFilledTwoTone style={{ fontSize: '70px' }}
                                    className={vidUrl === vid.vidSrc ? 'activeBtnCss' : 'playBtnCss'} />
                                <div>
                                    {vid.vidName}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className='videoWrapperCss'>
                <video key={vidUrl} controls>
                    <source src={vidUrl} type='video/mp4'></source>
                </video>
            </div>
        </div>
    )
}

export default Videos;