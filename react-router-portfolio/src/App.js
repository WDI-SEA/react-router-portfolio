import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Blog from './pages/Blog'
import React, {Component} from 'react'
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './NavBar';

class App extends Component{
  render () {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      </BrowserRouter>
  );
}
}

export default App;
