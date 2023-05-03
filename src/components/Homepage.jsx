import { Link } from 'react-router-dom'
import './pages.css'

export default function Homepage() {
    return(
        <div className="home">
            <div className="mask">
                <img src="/images/home-background1.webp" alt="man working on computer" className="into-img" />
            </div>
            <div className="content">
                <p>HI, I'M A DEVELOPER</p>
                <h1>Developer</h1>
                <div>
                    <Link to='/projects' className='btn'>PROJECTS</Link>
                    <Link to='/contact' className='btn btn-light'>CONTACT</Link>
                </div>
            </div>
        </div>
    )
}