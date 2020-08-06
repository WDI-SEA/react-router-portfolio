import React, { useState } from 'react';
import './App.css';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import About from './Components/About'
import Blog from './Components/Blog'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {

  let blogPosts = [
    "Magna gochujang irure banjo twee vice photo booth church-key. Consequat mlkshk keytar poutine enim adipisicing venmo cray occupy dolor eiusmod. Thundercats sed pickled synth. Knausgaard drinking vinegar butcher excepteur letterpress trust fund man bun celiac health goth.",
    "Ethical disrupt vinyl 90's shaman butcher. Small batch synth cold-pressed kombucha pork belly. Listicle farm-to-table ea disrupt. La croix chicharrones vaporware sriracha VHS magna. Nostrud blue bottle enim, locavore next level art party nulla disrupt actually.",
    "Photo booth taiyaki ethical gochujang you probably haven't heard of them readymade. Microdosing kinfolk brunch, migas craft beer hoodie af tumblr sriracha. Art party nulla dolore messenger bag authentic. +1 neutra aliquip shabby chic squid, kogi before they sold out cliche pour-over ea letterpress intelligentsia vexillologist vegan. Est excepteur plaid banjo adipisicing ethical. Officia cloud bread four dollar toast listicle pour-over, celiac culpa PBR&B."
  ]

  const [blog, setBlog] = useState(blogPosts)

  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" render={() => <Blog blogPosts={blogPosts} />} />
      <Route path="/projects" component={Projects} />
    </Router>
  );
}

export default App;
