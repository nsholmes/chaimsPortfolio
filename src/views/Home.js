import { Slides } from '../components';
import Categories from '../components/Categories/Categories';
import './home.css';


function Home() {
    return (
        <div>
            <div className='welcomeNameCss'>
                <div className='siteNameCss'><span className='whiteTextCss'>Chaim</span> <span className='purpleTextCss'>Duffe-Holmes</span></div>
                <div className='scrollInstCss'><span className='purpleTextCss'>Scroll to the</span> <span className='whiteTextCss'>Portfolio</span></div>
            </div>
            <Slides />
            <Categories />
        </div>
    )
}

export default Home;