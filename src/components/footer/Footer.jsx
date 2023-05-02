import './footer.css'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

export default function Footer() {
    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'> 

                    <div className='location'>
                        <FaHome size={20} style={{color: '#fff', marginRight: '2rem'}} />
                        <div>
                            <p>Phoenix, AZ</p>
                        </div>
                    </div>


                    <div className='email'>
                        <FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}} />
                        <div>
                            <p>briandrogers04@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className='right'> 
                    <h4>About the Company</h4>
                    <p>blah blah blah</p>
                    <div className='social'>
                    <FaLinkedin size={20} style={{color: '#fff', marginRight: '2rem'}} />
                    <FaGithub size={20} style={{color: '#fff', marginRight: '2rem'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}