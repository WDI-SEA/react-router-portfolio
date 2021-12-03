import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter, 
  Routes, 
  Route
} from 'react-router-dom';

import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Projects from './components/pages/Projects'
import Header from './components/partials/Header';

export default class App extends Component {
  
  render () {
    let posts = [

      { title: 'Today was cold',
      author: 'Author: Finn Miller',
      body: 'Not quite sure why my whole body was shaking today but I noticed that the humans were also shaking. This must be normal.'},
  
      { title: 'The grass was wet',
      author: 'Author: Nina Miller',
      body: 'The grass was wet. Why did my owner think there was even a remote possibilty of me stepping off-path to do my business this morning?!'}
    ]
    
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/blog' element={<Blog posts={posts}/>} />
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}