import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';

import Home from './Home'
import About from './About.jsx'
import Blog from './Blog.jsx'
import Projects from './Projects.jsx'

function App() {
  
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <div>
            <ul>
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/about'>about</Link>
              </li>
              <li>
                <Link to='/blog'>blog</Link>
              </li>
              <li>
                <Link to='/projects'>projects</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1>Portfolio</h1>
          </div>
        </header>

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/projects' component={Projects} />

        
      </div>
    </Router>
  )
}

export default App;
