import './pages.css'
import { NavLink } from 'react-router-dom'

export default function Projects() {
    return(
        <div>
            <div className='hero-img'>
                <div className='heading'>
                    <h1>PROJECTS.</h1>
                    <p>Here is some of my Work</p>
                </div>
            </div>

            <div className='work-container'>
                <h1 className='project-heading'>Projects</h1>
                <div className='project-container'>
                    <div className='project-card'>
                        <img src="/images/cave-explorer.png" alt="cave explorer" />
                        <h2 className='project-title'>Cave Explorer</h2>
                        <div className='pro-details'>
                            <p>explore the caves in this HTML5 canvas game</p>
                            <div className='pro-btns'>
                                <NavLink 
                                to="https://brogers-97.github.io/Cave-Explorer/" 
                                className="btn" target="_blank" rel="noopener noreferrer">
                                    View
                                </NavLink>
                                <NavLink 
                                to="https://github.com/brogers-97/Project-1" 
                                className="btn" target="_blank" rel="noopener noreferrer">
                                    Source
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src="/images/equestrian.png" alt="equestrian organizer" />
                        <h2 className='project-title'>EO App</h2>
                        <div className='pro-details'>
                            <p>Organize all your hurses with this CRM</p>
                            <div className='pro-btns'>
                                <NavLink 
                                to="url.com" 
                                className="btn">
                                    View
                                </NavLink>
                                <NavLink 
                                to="https://github.com/brogers-97/Project-2" 
                                className="btn" target="_blank" rel="noopener noreferrer">
                                    Source
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src="/images/joystick-junkies.png" alt="cave explorer" />
                        <h2 className='project-title'>Joystick Junkies</h2>
                        <div className='pro-details'>
                            <p>Socialize with friends over games and reviews</p>
                            <div className='pro-btns'>
                                <NavLink 
                                to="https://main--playful-arithmetic-40d56a.netlify.app" 
                                className="btn" target="_blank" rel="noopener noreferrer">
                                    View
                                </NavLink>
                                <NavLink 
                                to="https://github.com/brogers-97/project3client" 
                                className="btn" target="_blank" rel="noopener noreferrer">
                                    Source
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}