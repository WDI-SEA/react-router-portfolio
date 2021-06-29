import './App.css'
import { useState } from 'react'
import Portfolio from './Components/Portfolio'
import About from './Components/About'
import Blog from './Components/Blog'
import Homepage from './Components/Homepage'
import Header from './Components/Header'
import blogPosts from './blogPosts'
import projects from './projects'


import {
  BrowserRouter as Router, // alias BrowserRouter as Router
  Route,

} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1> Welcome to my portfolio</h1>
        <Router>
            <Header />
            <br></br>
            <Route exact path='/' component={Homepage} />
            <Route 
              path='/blog'
              render={() => <Blog blogPosts={blogPosts}/>}
              />
            <Route
              path='/portfolio'
              render={() => <Portfolio projects={projects}/>}
             
            />
              
            <Route path='/about' component={About} />
            
        </Router>
    </div>
  );
}

export default App;
