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
                        <img className='project-image' src="/images/cave-explorer.png" alt="cave explorer" />
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
                        <div className='info-box'>
                            <p className='info-text'>Technologies Used:</p>
                            <p className='info-text-tech'>HTML5, JavaScript, CSS, Web Audio</p>
                            <p className='info-text'>I used HTML canvas feature to put a display screen for the pixels. Once that was in place it came down to creating rendering functions and also collision detections. Both functions run forever creating the never ending effect of this game. </p>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img className='project-image' src="/images/equestrian.png" alt="equestrian organizer" />
                        <h2 className='project-title'>EO App</h2>
                        <div className='pro-details'>
                            <p>Organize all your horses with this CRM</p>
                            <div className='pro-btns'>
                                <NavLink 
                                to="https://equestrian-organizer.herokuapp.com/" 
                                className="btn" target='_blank'
                                rel="noopener noreferrer">
                                    View
                                </NavLink>
                                <NavLink 
                                to="https://github.com/brogers-97/Project-2" 
                                className="btn" target="_blank" rel="noopener noreferrer">
                                    Source
                                </NavLink>
                            </div>
                        </div>
                        <div className='info-box'>
                            <p className='info-text'>Technologies Used:</p>
                            <p className='info-text-tech'>HTML, JavaScript, CSS, Express, PSQL, Twilio</p>
                            <p className='info-text'>Express has its server side rendering that was used to create the horse database for equestrians. Starting with building a landing page that will display all tasks, horses, pastdue and current weather. All of these can be communicted to the server, such as removing or updating a horses condition. Adding twilio created a notification to the users cellphone of upcoming tasks as well. Currently only uses one phone line*. Making an account is free and will show all functionality </p>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img className='project-image' src="/images/joystick-junkies.png" alt="cave explorer" />
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
                        <div className='info-box'>
                            <p className='info-text'>Technologies Used:</p>
                            <p className='info-text-tech'>React, JavaScript, CSS, MongoDB, API</p>
                            <p className='info-text'>I lead a team of 3 to create a spin on social media for gaming entertainers. Using React to create the multiple pages and the components that are within each. The database was made with mongoDB so that we can store all posts, ratings and comments for display among friends. We created an API communication to RAWG which give unlimited access to searching the game data. We also included the feature to change an old password as well, while still keeping it hashed. Making an account is free and will show all functionality</p>
                        </div>
                    </div>
                    <div className='project-card'>
                        <div className='simustock-img'>
                            <img className='simu-img' src="/images/simustock2.png" alt="cave explorer" />
                            <img className='simu-img' src="/images/simustock1.png" alt="cave explorer" />
                        </div>
                        <h2 className='project-title'>SimuStock</h2>
                        <div className='pro-details'>
                            <p>Trade fake money with real data to test your market strategies</p>
                            <div className='pro-btns'>
                                <NavLink 
                                to="" 
                                className="btn" target="_blank" rel="noopener noreferrer">
                                    View
                                </NavLink>
                                <NavLink 
                                to="https://github.com/brogers-97/project-4-client" 
                                className="btn" target="_blank" rel="noopener noreferrer">
                                    Source
                                </NavLink>
                            </div>
                        </div>
                        <div className='info-box'>
                            <p className='info-text'>Technologies Used:</p>
                            <p className='info-text-tech'>React, Python, JavaScript, CSS, PSQL, Soup Webscraper, MarketData Plugin, Mobile Friendly UI</p>
                            <p className='info-text'>Teaming up with a partner we created this Django application. React, javascript, jsx on the frontend and python on the backend with psql. The app will pull up and desired stock by scraping the web for the most recent stock price, then displaying the trend using plugins. The user can choose to buy/sell and the price, quantity and date are all stored into the database. The app will calculate all gains and losses upon the sale as well using the data stored from the purchase. We added a social aspect as well where you are able to popular stocks among other users, this helps with finding social trends that economics can't. App is still not deployed, check in soon*</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}