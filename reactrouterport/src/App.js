import React from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
import './App.css';
import About from './About'
import Home from './Home'
import Blog from './Blog'
import Projects from './Projects'

function App() {


  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30
  };
  if (hours < 12) {
    timeOfDay = "Morning";
    styles.color = "#04756F";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
    styles.color = "#2E0927";
  } else {
    timeOfDay = "Night";
  }

  const data = {
          imgUrl: "http://placekitten.com/300/200", 
          name: "This is a great blog ! " ,
          phone:"This is some content for the blog and we really like it. Please like or share us on Facebook and Instagram",
          date: "July 17th, 2020",
  }

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Homepage </Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/About">About</Link>
          <Link to="/Projects">Projects</Link>
        </nav>
      </div>
      <div className="App">
      <h1>Good {timeOfDay}!</h1>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />

        {/* <Route path="/Blog" component={Blog} /> */}

        {/* <Blog
          imgUrl ="http://placekitten.com/300/200" 
          name = "This is a great blog ! " 
          phone="This is some content for the blog and we really like it. Please like or share us on Facebook and Instagram"
          date="July 17th, 2020"
          /> */}

     <Route path="/Blog" render={() => <Blog blog={data} />} />  

      </div>
    </Router>
  );
}

export default App;
