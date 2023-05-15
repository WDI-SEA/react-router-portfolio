import './footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return(
        <div className='footer'>
            <div className='footer-container'>
                
                <div className='social-icons'>
                <a href='https://www.linkedin.com/in/brian-rogers-2023ga/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size={25} style={{color: '#fff', marginRight: '2rem'}} />
                </a>
                
                <a href='https://github.com/brogers-97' target='_blank' rel='noopener noreferrer'>
                    <FaGithub to={'https://github.com/brogers-97'} size={25} style={{color: '#fff', marginRight: '2rem'}} />
                </a>
                </div>

            </div>
        </div>
    )
}