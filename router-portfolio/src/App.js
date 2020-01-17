import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import About from './About'
import Blog from './Blog'
import Home from './Home'
import Projects from './Projects'
import './App.css';

function App() {
  
  let blogs = [
    "blog it up",
    "blog it to the ceiling",
    "I neva sleep, cuz sleep is the cousin of death",
    "Seattle state of mind"
  ]

  let projects = [
      'project',
      'project2',
      'project3',
      'project4'
  ]

  return (
    <Router>
      <div className = 'app'>
        <div className = 'nav'>
          <Link className='link' to = '/'>Home Page</Link>
          <Link className='link' to = '/about'>About</Link>
          <Link className='link' to = '/blog'>Blog</Link>
          <Link className='link' to = '/projects'>Projects</Link>
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About}/>
        <Route path='/blog' render={() => 
          <Blog blogs={blogs}/>
        } />
        <Route path='/projects' render={() =>  <Projects projects={projects} /> } />
      </div>
    </Router>
  )
}

export default App;