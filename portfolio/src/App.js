import React, { Component } from 'react'
import './App.css';
import { BrowserRouter  as Router, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Header from './components/partials'
import Newblog from './components/pages/Newblog';

class App extends Component  {
      state = {
        title: ['MutherFucking Placeholder Text!',  'asdfasdf', 'title Second'],
        body: ["Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass."]
      }


      addBlog = () => {
        
      }

      

  render () {
    return( 
      <Router>

      <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/blog" render={ () => <Blog title={this.state.title} body={this.state.body} /> }/>
      <Newblog />
      <Route path ="/about" component={About} />
      <Route path ="/projects" component={Projects} />
      </div>
      </Router>
    )
    }
  }

export default App;
