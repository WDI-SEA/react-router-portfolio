
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import About from './component/About';
import Projects from './component/Projects';
import Blog from './component/Blog';
import Header from './partials/Header';

export default class App extends Component {

  render() {
    const post = [
      {
        title: "James Harden Trade Rumors",
        body: "Nets 'Well Aware' of 76ers as Potential Suitor for Star"
      },
      {
        title: "LeBron Cleared to Play Friday",
        body: "Lakers star clears protocols and will play vs. Clippers after registering multiple negative COVID tests"
      },
      {
        title: "Kerr: We Can Win a Championship",
        body: "Warriors coach feeling confident after hot start (The Athletic)"
      },
      {
        title: "Zion's Rehab Slightly Delayed",
        body: "Pelicans star has soreness in his injured right foot; team optimistic it's not serious"
      }
    ]
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/blog' element={<Blog 
          post={post}
          />}>
          </Route>
        </Routes >
      </BrowserRouter>
    )
  }
}

