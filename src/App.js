import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Blog from './Blog';
import About from './About';
import Projects from './Projects';

function App() {
  const [posts, setPosts] = useState([
    {
      title: "First Blog Post",
      body: "Hey!  This is my first blog post for React.  I'm excited to learn more about this framework that's been taking over!"
    },
    {
      title: "Second Blog Post",
      body: "Yup, so this is the second post and that's awesome"
    }
  ])
  const [projects, setProjects] = useState([
    {
      title: "Flappy Bird",
      img: "https://raw.githubusercontent.com/noanonoa/flappy-bird/master/img/001-screenshot.png",
      info: "A simple side-scrolling game where the player controls a bird to fly between pipes without hitting them. Flying between each set of pipes scores 1 point and hitting them or the ground ends the game.",
      link:"https://noanonoa.github.io/flappy-bird/" 
    },
    {
      title: "Yes-Mi-Lord",
      img: "https://raw.githubusercontent.com/noanonoa/yes-mi-lord/master/public/01-screenshot.png",
      info: "A Lord of the Rings fanpage that allows users to browse all characters from the epic trilogy and build a team. The design is meant for fans to explore their favorite characters and build their own team for the mission to destroy The One Ring. Users are able to comment on their choices and share their story.",
      link:"https://yes-mi-lord.herokuapp.com/" 
    }
  ])

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Homepage</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </div>
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/blog" render={ () => <Blog posts={posts} />} />
        <Route path="/about" component={About} />
        <Route path="/projects" render={ () => <Projects projects={projects} />} />
      </div>
    </Router>
  )
}

export default App;
