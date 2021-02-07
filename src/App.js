import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Posts from './components/pages/Posts'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'

import blogPosts from './data/blogPosts'
import projectDetails from './data/projectDetails'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' render={() => <Blog blogPosts={blogPosts} />} />
          <Route path='/blog/:id' render={(props) =>{
            let post = blogPosts.find(({ id }) => id.toString() === props.match.params.id)
            props = {...post, ...props}
            return <Posts {...props}/>
          }} />
          <Route path='/projects' render={() => <Projects projectDetails={projectDetails} />} />
          <Route path='/project/:id' render={(props)=>{
            let project = projectDetails.find(({ id })=> id.toString() === props.match.params.id)
            props = {...project, ...props}
            return <Project {...props} />
          }} />
        </main>
        <Footer />
      </Router>
    )
  }
}

export default App;
