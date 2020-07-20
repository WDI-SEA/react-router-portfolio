import React, { useState } from 'react';
import './App.css';
import Blog from './Blog'
import About from './About'
import Projects from './Projects'
import Home from './Home'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
        </nav>
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog}/>       
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
      </div>
    </Router>
  );
}

export default App;
