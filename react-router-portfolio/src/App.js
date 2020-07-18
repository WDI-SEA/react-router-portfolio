import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Projects from './Projects';

function App() {
  return (
  <Router>
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
      </nav>
    </div>
    <div className="App">
      <h1>Welcome to Caitlin Smith's Porfolio</h1>
      <Route path='/' component={Home} />
      <Route path='/Blog' component={Blog} />
      <Route path='/About' component={About} />
      <Route path='/Projects' component={Projects} />
    </div>
  </Router>
  );
}

export default App;
