import './pages.css'
import { Link } from 'react-router-dom'

export default function About() {
    return(
        <div>
        <div className='hero-img'>
            <div className='heading'>
                <h1>About Me</h1>
            </div>
        </div>

        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I am a ROCKSTAR</p>
                <Link to='/contact'>
                    <button className='btn'>contact</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src="/images/react1.png" className='img' alt='true'/>
                    </div>
                    <div className='img-stack bottom'>
                        <img src="/images/react2.jpeg" className='img' alt='true'/>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}