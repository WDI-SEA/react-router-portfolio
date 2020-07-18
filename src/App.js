import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './NavBar';
import Home from './Home';
import Blog from './Blog';
import Projects from './Projects';
import About from './About';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={ Home } />
        <Route path="/blog" component={ Blog } />
        <Route path="/projects" component={ Projects } />
        <Route path="/about" component={ About } />
      </div>
    </Router>
  );
}

export default App;
