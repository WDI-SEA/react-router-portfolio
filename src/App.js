import './App.css'
import About from './components/About';
import React, { Component } from 'react';
import Blog from './components/Blog'
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Header from './partials/header';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

class App extends Component {
  render () {
    let skills = [
      'HTML/CSS',
      'JavaScript',
      'SQL(PostgresSQL & NoSQL',
      'Node.js',
      'Express.js',
      'Sequelize',
      'React.js',
      'RESTful APIs',
      'Bootstrap',
      'jQuery',
      'JSON',
      'O Auth',
      'Python',
      'EJS',
      'Git/GitHub',
      'Heroku',
      'Netlify',
    ]
    return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/about' element={<About skills={skills}/>} />
      <Route path='/projects' element={<Projects/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
