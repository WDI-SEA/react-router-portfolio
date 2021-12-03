import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Homepage from './components/Homepage';
import Blog from './components/Blog';
import About from './components/About';
import Projects from './components/Projects';
import Header from './partials/Header';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {

  render() {
    let blogs = [{
      title: "My Favorite Book",
      body: "The Lonely City",
      author: "Olivia Laing"
    }, {
      title: "My Favorite Artist",
      body: "Untitled: A painting created by American artist Jean-Michel Basquiat in 1982. The artwork, which depicts a skull, is among the most expensive paintings ever purchased. In May 2017, it sold for $110.5 million at Sotheby's, the highest price ever paid at auction for work by an American artist.",
      author: "Jean Michel Basquiat"
    },
    {
      title: "My Favorite Music Artist",
      body: "The theme song to The Sopranos/Plays in the key of life on my mental piano/Got a strange way of seeing life, like/I'm Stevie Wonder with beads under the do-rag/Intuition is there, even when my vision's impaired, yeah",
      author: "Jay-Z"
    }]
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<Blog blogs={blogs} />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
