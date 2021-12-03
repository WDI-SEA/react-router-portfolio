import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './components/partials/Header';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Projects from './components/pages/Projects'



export default class App extends Component {

  state = {
    posts: [
      { title: 'Ipsum',
      author: 'Author: Lindsay Haigh',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat imperdiet sed euismod nisi.',
      comments: ['Get better at coding.', 'Hmmmm wow, very interesting!', 'A comment is what I am!'] },

      { title: 'Lorem',
      author: 'Author: Megan Barber',
      body: 'Tincidunt vitae semper quis lectus nulla at. Semper eget duis at tellus at urna condimentum. Magna ac placerat vestibulum lectus.',
      comments: ['Your skills are impeccable.', 'Can you write more?', 'You are the best! Great writing.'] }
    ]
  }

  render () {
    return (
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/blog' element={<Blog posts={this.state.posts} comments={this.state.posts.map(postComments => postComments.comments)}/>} />
      <Route path='/projects' element={<Projects />}/>
      </Routes>
      </BrowserRouter>
    )
  }
}

    




