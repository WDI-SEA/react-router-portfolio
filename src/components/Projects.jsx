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
                                to="url.com" 
                                className="btn">
                                    View
                                </NavLink>
                                <NavLink 
                                to="url.com" 
                                className="btn">
                                    Source
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src="/images/equestrian.png" alt="equestrian organizer" />
                        <h2 className='project-title'>EO App</h2>
                        <div className='pro-details'>
                            <p>Organize all your hourses with this CRM</p>
                            <div className='pro-btns'>
                                <NavLink 
                                to="url.com" 
                                className="btn">
                                    View
                                </NavLink>
                                <NavLink 
                                to="url.com" 
                                className="btn">
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