import { useHistory } from 'react-router-dom';
import { JournalismThumbnails, PortraitThumbnails, TravelThumbnails } from '../../utils';
import './Categories.css';

function Categories() {
    let history = useHistory();
    const categoryClick = (path) => {
        history.push(path);
    }
    return (
        <div className='categoriesCss'>
            <div className='CategoryThumbCss'>
                <div className='child' onClick={() => categoryClick('/travel')} style={{ 'backgroundImage': `url(${TravelThumbnails[0][1]})` }}>
                    <p>Travel</p>
                </div>
            </div>
            <div className='CategoryThumbCss'>
                <div className='child' onClick={() => categoryClick('/journalism')} style={{ 'backgroundImage': `url(${JournalismThumbnails[3][1]})` }}>
                    <p>Photo Journalism</p>
                </div>
            </div>
            <div className='CategoryThumbCss'>
                <div className='child' onClick={() => categoryClick('/portraits')} style={{ 'backgroundImage': `url(${PortraitThumbnails[10][5]})` }}>
                    <p>Portraits</p>
                </div>
            </div>
            <div className='CategoryThumbCss'>
                <div className='child' onClick={() => categoryClick('/photoessay')} style={{ 'backgroundImage': `url(${JournalismThumbnails[0][2]})` }}>
                    <p>Photo Essay</p>
                </div>
            </div>
        </div>
    )
}

export default Categories;