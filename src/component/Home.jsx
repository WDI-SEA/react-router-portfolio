import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import './Home.scss';
import AnimatedLetters from './Animation/AnimatedLetters'
import Loader from 'react-loaders';


function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'C', 'r', 'y', 's', 't', 'a', 'l', ' ']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e','l', 'o','p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return ( 
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>

                <AnimatedLetters 
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />

                </h1>
                <h2>Fullstack Trained Developer/ Javascript / React </h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
        <Loader type='pacman' />
        </>
     );
}

export default Home;