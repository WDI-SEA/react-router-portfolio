import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Header from './components/partials/Header';
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  let posts= [
    {
        title: "Stop n Chat",
        body: "Are you a fan of the ever popular 'stop n chat'? Or do you, like the rest of us, dread this annoying occurence and want to get on with your day? Some people just don't understand the way the world should work."
      },
      {
        title: "Chat n Cut",
        body: "Another thing that is superbly rude is the ~effervescent~ chat n cut. When a person enters a line via way of chatting with someone in a more ideal spot in line than them and from there, they presume to hold that place in line as well.",
      },
      {
        title: "Phone Ettiquette",
        body: "What is the proper phone etiquette? What time is the cut off? Is it 10:00? Is it 10:30? Is it 9:30 or even 9:00??? Is it different on each coast? Is it personal preference  or is it a universal rule? We may never know...",
      }
]

    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog posts={posts}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    )
  }


export default App;
