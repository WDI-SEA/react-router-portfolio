import { useEffect, useState } from 'react';
import './About.scss'
import AnimatedLetters from './Animation/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return ( 
        <>
        <div className='about-container container'>
            <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
                    idx ={15}
                />
            </h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus vero quas laborum quaerat, quibusdam labore odit nisi illum, quo, doloribus voluptate quam veniam. Veritatis quisquam enim ab qui inventore.</h3>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus vero quas laborum quaerat, quibusdam labore odit nisi illum, quo, doloribus voluptate quam veniam. Veritatis quisquam enim ab qui inventore.</h3>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus vero quas laborum quaerat, quibusdam labore odit nisi illum, quo, doloribus voluptate quam veniam. Veritatis quisquam enim ab qui inventore.</h3>
            </div>
            <div className="stage-cube-cont">
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faNodeJs} color="#5ED4f4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
     );
}

export default About;