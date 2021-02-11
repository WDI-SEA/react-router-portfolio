import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Projects from './components/pages/Projects'
import Header from './components/partials/Header'
// import Widget from './components/pages/Widget'

class App extends Component {
  render() {
    let post = [
      { title: 'Blog #1',
      body: 'Here is Blog #1'
      },
      {
        title: 'Blog #2',
        body: 'Here is Blog #2'
      }
    ]

    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog" render={() => <Blog blog={this.state.posts.title} /> } />
          {/* <Route path="/widget/:id" render={(props) => <Widget {...props} blog={this.state.posts}/>} /> */}
        </div>
      </Router>
    )
  }
}

export default App
