import {Link} from 'react-router-dom'
import './sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return ( 
    <>
    <div className='nav-bar'>
        <nav>
            <Link exact="true" activeclassname="actve" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </Link>
            <Link exact="true" activeclassname="actve" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </Link>
            <Link exact="true" activeclassname="actve" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </Link>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/crystal-sheeley-developer/'>
                    Linkedin
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/Turtle-Sprite/'>
                    GitHub
                </a>
            </li>
        </ul>
    </div>
    </> );
}

export default Sidebar;