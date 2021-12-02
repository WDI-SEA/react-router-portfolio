
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Component } from 'react';
import Header from './components/partials/Header';
import Homepage from './components/pages/Homepage';
import Blog from './components/pages/Blog';
import Projects from './components/pages/Projects';
import About from './components/pages/About';


export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    );

  }
}

