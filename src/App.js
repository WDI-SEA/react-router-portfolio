import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Homepage from './Homepage'
import About from './About'
import Projects from './Projects'
import Blog from './Blog'


function App() {
  let projects = [
    {
      image: 'camping-trip-img',
      title: 'Camping Trip',
      url: 'https://campingtrip-starsearch.herokuapp.com/'
    },
    {
      image: 'frog-story-img',
      title: 'Frog Story',
      url: 'https://jdephil.github.io/Frog-Story/'
    }
    
  ]

  let blogPosts = [
    {
      title: 'Front End is Fun',
      content: 'I love to style and create functionality on pages. User experience is a big motivator for me!'
    },
    {
      title: 'Reactions to React',
      content: 'Its cool how React combines everything we have learned so far into one thing.'
    },
    {
      title: 'My Programming Goal',
      content: 'I would love to make websites and apps for kids. I want to make websites that delight and surprise the user.'
    }

  ]

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
      <div className="App">
        
        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={About} />
        <Route path='/projects' render={() => <Projects projects={projects} />} />
  <Route path='/blog' render={() => <Blog blogPosts={blogPosts} /> } />
      </div>
    </Router>
  );
}

export default App;
