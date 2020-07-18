import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Projects from './Projects'

function App() {

  let blogPosts = [{
    title: "Learn how to use React hooks",
    body: "Through utilizing components such as useState and useEffect, we are able to quickly update state of an object to set it value to whatever we need it to. Click the link below to learn more"
  }, {
    title: "Learn my deepest darkest secrets",
    body: "First: hit me up on paypal, then learn what it was like to be in a cult as a young child"
  }, {
    title: "Find out what my plans are post cohort",
    body: "Follow me on all social media platforms so that you can watch my journey of begging my way into a new job position (@zbarovsky)"
  }]

  let listOfSkills = [
    "React (DUH)",
    "JavaScript",
    "HTML",
    "CSS",
    "Phaser",
    "Node",
    "Git",
    "Bootstrap",
    "SQL",
    "MERN Stack",
    "REST API",
    "JSON",
    "I can play a mean guitar",
    "And many more"
  ]
  
  let projectDescription = [{
    title: "Project One: Zombie Survival Video Game",
    img: './img/p1ScreenShot.png',
    description: "Utilizing phaser, I built a zombie slaying survivial game"
  }, {
    title: "Project Two: D&D Encounter Tracker",
    img: './img/p2ScreenShot.png',
    description: "Built a dungeons and dragons encounter tracker app using node and sql. Interested? Go to https://encounter-tracker.herokuapp.com to try it for yourself."
  }]

  let additionalWorks = [
    "Rick and Morty themed Tic-Tac-Toe",
    "Movie description web app with favorites function to track favorite movies",
    "Pokedex that tracked and displayed information about favorited pokemon",
    "Web app to convert temperature between fahrenheit and celsius"
  ]
  

  const [post, setPost] = useState(blogPosts);
  const [skills, setSkills] = useState(listOfSkills)
  const [projects, setProjects] = useState(projectDescription)
  const [works, setWorks] = useState(additionalWorks)



  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home </Link>
          <Link to='/blog'>Blogs </Link>
          <Link to='/about'>About Me </Link>
          <Link to='/projects'>Projects </Link>
        </nav>
      </div>
      <div>
        <h1 className="header">All About Zack</h1>
        <Route exact path='/' component={Home} />
        <Route path='/blog' render={() => <Blog posts={post} /> } />
        <Route path='/about' render={() => <About skills={skills} /> } />
        <Route path='/projects' render={() => <Projects projects={projects} works={works} /> } />
      </div>
    </Router>
  );
}

export default App;
