import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Blog from './Blog'

const Homepage = (props) => {
    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to='/'>Home</Link>|
                    <Link to="/Blog">Blog</Link>|
                    <Link to="/About">About</Link>|
                    <Link to="/Projects">Projects</Link>
                    {/* <h1>Welcome Home Nerds!</h1> */}
                </nav>
                <hr/>
            </div>
            <div className="App"><h1>Henlo</h1>
            <p>Welcome to the fake portfolio page im making becuase it was a homework! ;)</p>

            {/* <p>Please navagate the site to see if it works!</p> */}
            </div>
            <div>
                {/* //YOu do not need to Route to home here */}
                {/* component acts as a render function */}
                <Route path="/blog" render={ () => <Blog posts={props.posts} /> }/>
                <Route path='/Projects' component={Projects} /> 
                <Route path='/About' component={About} />
                
            </div>
        </Router>
    );
};

export default Homepage;