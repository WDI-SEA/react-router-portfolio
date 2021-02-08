import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/partials/Header'
import Home from './components/pages/Home'
import Recents from './components/pages/Recents'
import About from './components/pages/About'
import Works from './components/pages/Works'
import Work from './components/pages/Work'

import recentData from './data/recentData'
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
          <Route 
            path="/works/:id"
            render={(props) => {
              let work = workDetails.find(({ id }) => id.toString() === props.match.params.id)
              props = {...work, ...props}
              return <Work {...props} />
            }} />
          {/* <Route path="/works/" component={Work} /> */}
          <Route exact path="/recents" render={() => <Recents recData={recentData} />} />
          {/* add blog posts :id */}
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App