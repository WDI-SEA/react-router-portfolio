import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';


import Homepage from './Routes/Homepage';
import Blog from './Routes/Blog';
import About from './Routes/About';
import Projects from './Routes/Projects';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
        <About />
<Blog />
<Homepage />
<Projects />
        </main>
      
      </Router>
    )
  }
}

export default App;