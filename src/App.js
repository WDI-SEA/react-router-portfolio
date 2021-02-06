import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './component/Home'
import About from './component/About'
import Blog from './component/Blog'
import Projects from './component/Projects'
import Header from './component/partials/Header'

class App extends Component {
  render(){
    return (
      <Router>
        <Header />
        <main className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/projects" component={Projects} />
        </main>
      </Router>
    );
  }
}

export default App;
