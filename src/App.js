import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Homepage from './Homepage'
import About from './About'
import Projects from './Projects'
import Blog from './Blog'


function App() {
  let projectLinks = [
    'camping-trip-img',
    'frog-story-img'
  ]

  let blogPosts = [

  ]

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
      <div className="App">
        
        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={About} />
        <Route path='/projects' render={() => <Projects projectLinks={projectLinks} />} />
        <Route path='/blog' component={Blog} />
      </div>
    </Router>
  );
}

export default App;
