import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import Blog from './components/Blog'
import Projects from './components/Projects'
import About from './components/About'
import Header from './components/Header'

class App extends Component {
  render () {
    return (
      <Router>
       <div className="App">
         <Header />
         <Route exact path='/' component={Home}/>
         <Route path='/Blog' component={Blog} />
         <Route path='/About' component={About} />
         <Route path='/Projects' component={Projects} />
      </div>
    </Router>
    );
  }
}

export default App;
