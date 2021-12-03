import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, {Component} from 'react'
import Blog from './components/pages/Blog';
import Projects from './components/pages/Projects';
import About from './components/pages/About'
import HomePage from './components/pages/HomePage'
import BLOGPOST from './blogposts'
import Header from './components/partials/Header'
import Resume from './components/pages/Resume'









class App extends Component {
  render() {
    return(
        <div className="App">
          <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog posts={BLOGPOST.posts}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>




          </BrowserRouter>
        </div>
    );

  }
}

export default App;
