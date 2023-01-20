import {Link} from 'react-router-dom'
import './Home.scss';


function Home() {
    return ( 
        <div className="container home-page">
            <div className="text-zone">
                <h1>Crystal Sheeley <br/>
                Web Developer
                </h1>
                <h2>Fullstack Trained Developer/ Javascript / React </h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
     );
}

export default Home;