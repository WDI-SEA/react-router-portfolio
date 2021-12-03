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

    const posts = [
      {title: 'General Assembly so far...', body: 'Its cool'},
      {title: 'Its time to drink more water', body: 'Quench your thirst'},
      {title: 'Why you should wear ear plugs at concerts', body: 'Yeah I dont but really should...'}
  ]


    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/blog" element={<Blog 
          posts={ posts }
          />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    );

  }
}

