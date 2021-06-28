import './App.css'
import { useState } from 'react'
import Portfolio from './Components/Portfolio'
import About from './Components/About'
import Blog from './Components/Blog'
import Homepage from './Components/Homepage'

import {
  BrowserRouter as Router, // alias BrowserRouter as Router
  Route,

} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Portfolio />
        <About />
        <Blog />
        <Homepage />
    </Router>
  );
}

export default App;
