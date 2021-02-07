import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/partials/Header'
import Home from './components/pages/Home'
import News from './components/pages/News'
import About from './components/pages/About'
import Works from './components/pages/Works'
import Work from './components/pages/Work'

import workDetails from './data/workDetails'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/works" render={() => <Works works={workDetails} />} />
          {/* add individual work :id */}
          {/* <Route path="/works/" component={Work} /> */}
          <Route exact path="/news" component={News} />
          {/* add blog posts :id */}
          <Route exact path="/about" component={About} />
          <Route exact path="/works/work" component={Work} />
        </div>
      </Router>
    )
  }
}

export default App