import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Projects from './Projects'

function App() {

  let blogs = [
    { 
      name: 'Salman', 
      about: "Likes to wake up people when they're sleeping. But I heard he's pretty cool.", 
      image: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22228641_10213074701375363_901385773467128542_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=e203fSi0YfQAX9MuAV2&_nc_ht=scontent-sea1-1.xx&oh=45e520522f22387e2ad0b3b3cedae4c0&oe=5F3AAB69"
    },
    { 
      name: 'Nick', 
      about: "Super nice guy probably the nicest in the group",
      image: "https://ca.slack-edge.com/T0351JZQ0-U0141JELV4Y-710a221b9c63-512"
    },
    { 
      name: 'Nicholas', 
      about: "He's the coolest",
      image: "https://ca.slack-edge.com/T0351JZQ0-U013HUG5QHJ-0edcbb728e22-512"
    },
    { 
      name: 'Charles', 
      about: "Youngest of the group, kinda clumsy", 
      image: "https://ca.slack-edge.com/T0351JZQ0-U012X1DNF2T-3950e7b26202-512"
    },
    { 
      name: 'Scott', 
      about: "Loves plants and cats", 
      image: "https://ca.slack-edge.com/T0351JZQ0-UT9HS81T7-5fff524dcf3e-512"
    },
    { 
      name: 'Zack', 
      about: "Very good at CSS, would like to get advice from him some day.",
      image: "https://ca.slack-edge.com/T0351JZQ0-UV0CS3TQF-6394ecdb9322-512" 
    }

  ]

  const addBlog = text => {
    const newBlog = [...blogs, { text }]
    
  }

  return (
    <Router>
      <div className="App">
        <nav className="app-nav">
          <div className="link-container">
            <Link className="home-link" to="/">Home</Link>
            <Link className="home-link" to="/Blog">Blog</Link>
            <Link className="home-link" to="/About">About</Link>
            <Link className="home-link" to="/Projects">Projects</Link>
          </div>
        </nav>
      </div>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/Blog" render={() => <Blog contents={blogs} />} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
