import React from 'react';
import logo from './logo.svg';
import Screenshot1 from './Screenshot1.JPG'
import CalmTheBomb from './CalmTheBomb.JPG'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Homepage from './Homepage'
import Blog from './Blog'
import About from './About'
import Projects from './Projects'

function App() {

  let blogposts = [
    {title: 'What I did the day of 7/16/2020', body: 'School grind'},
    {title: 'What I did the day of 7/17/2020', body: 'More of a school grind'},
    {title: 'What I did the day of 7/18/2020', body: 'I actually got out of the house for once'},
  ]

  let projects = [
    {screenshot: {Screenshot1}, info : 'NBA Database to view current teams and their rosters. Create a team and fill it with players'},
    {screenshot: {CalmTheBomb}, info : 'Clicking game to defuse bombs! Keep clicking until you lose!'},
  ]



  return (
    <Router>
      <div>
        <br></br>
        <nav>
          <Link to ="/">Home</Link>
          <Link to ="/about">About</Link>
          <Link to ="/blog">Blog</Link>
          <Link to ="/projects">Projects</Link>
        </nav>
      </div>
      <div>
        <Route exact path ="/" component = {Homepage} />
        <Route path = "/About" component = {About} />
        <Route path = "/Blog" render={()=> <Blog blogposts={blogposts} />} />
        <Route path = "/Projects" render={()=> <Projects projects={projects} />} />
      </div>
    </Router>
  );
}

export default App;
