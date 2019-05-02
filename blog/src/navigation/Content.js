import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Custom Components
import About from '../pages/About'
import Blog from '../pages/Blog'
import Home from '../pages/Home'
import Projects from '../pages/Projects'

class Content extends Component {
  render() {
    let blogs = [{blog: 'She Ran Away', desc:'Sandy?! Sandy?!?! SANDY!!!!!'}]
    let projects = [{project: 'Wheel of Fortune', desc: 'Can you guess the phrase?'}]
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" render={
          () => (<Blog blogs={blogs} />)
        } />
        <Route path="/projects" render={
          () => (<Projects projects={projects} />)
        } />
      </div>
    )
  }
}

export default Content