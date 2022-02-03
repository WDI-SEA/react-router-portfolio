// External Resources
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Internal Resources
import './App.css';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Header from './components/shared/Header';

function App() {

  const posts = [
    {
      title: 'Engineer',
      body: "I've known I wanted to be an engineer since I was a junior in high school. I was always good at math and I am very okay with feeling likeI don't know what I'm doing which I have always said is the most important thing for a developer."
    },{
      title: 'Baller',
      body: "I like to play sports in my free time. We can be best friends afterwards; but between whistles, it's war."
    },{
      title: 'Student',
      body: "I love learning a new subject and then really groncking it. Another reason why I love coding."
    }
  ]

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog posts={posts}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
