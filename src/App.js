import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';

import About from './About'
import Blog from './Blog'
import Projects from './Projects'

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

        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/projects' component={Projects} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
