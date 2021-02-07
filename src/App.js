import React, { Component } from 'react'
import './App.css'
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './components/partials/Header'
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Projects from './components/pages/Projects'

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Header />
        </div>
      </Router>
    )
  }
}

export default App