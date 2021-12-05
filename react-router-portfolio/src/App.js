import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
import Blog from './components/Blog'
import React, {Component} from 'react'
import About from './components/About';
import Projects from './components/Projects';

class App extends Component{
  render () {
    return (
      <BrowserRouter>
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
