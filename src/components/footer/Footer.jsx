import './footer.css'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

export default function Footer() {
    return(
        <div className='footer'>
            <div className='footer-container'>
                
                {/* <p>briandrogers04@gmail.com</p> */}
                
                <div className='social-icons'>
                <a href='https://www.linkedin.com/in/brian-rogers-2023ga/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size={25} style={{color: '#fff', marginRight: '2rem'}} />
                </a>
                
                <a href='https://github.com/brogers-97' target='_blank' rel='noopener noreferrer'>
                    <FaGithub to={'https://github.com/brogers-97'} size={25} style={{color: '#fff', marginRight: '2rem'}} />
                </a>
                </div>

                {/* <p>briandrogers04@gmail.com</p> */}


                {/* <div className='footer-center'> 


                    <div className='email'>
                        <FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}} />
                        <div>
                            <p>briandrogers04@gmail.com</p>
                        </div>
                        
                    </div>

                    <div className='right'> 
                        <div className='social'>
                        <FaLinkedin size={20} style={{color: '#fff', marginRight: '2rem'}} />
                        <FaGithub size={20} style={{color: '#fff', marginRight: '2rem'}} />
                        </div>
                    </div>
                    

                </div> */}
            </div>
        </div>
    )
}