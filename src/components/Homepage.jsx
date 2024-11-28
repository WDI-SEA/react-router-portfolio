import { Link } from 'react-router-dom'
import './pages.css'

export default function Homepage() {
    return(
        <div className="home">
            <div className="mask">
                <img src="/images/homecomputer.jpeg" alt='home computer' className="into-img" />
            </div>
            <div className="content">
                <p>HI, I'M A  FULLSTACK DEVELOPER</p>
                <h1>Brian Rogers</h1>
                <div>
                    <Link to='/projects' className='btn'>PROJECTS</Link>
                    <Link to='/about' className='btn btn-light'>ABOUT</Link>
                </div>
            </div>
        </div>
    )
}