import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './pages/blog'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Header from './partials/Header'

const posts = [
  {
    title: 'haha',
    body: 'it is a laugh'
  }, 
  {
    title: 'muhaha',
    body: 'evil laugh'
  },
  {
    title: 'bahahaha',
    body: 'laugh that starts with a b'
  },
  {
    title: 'yohohoho',
    body: 'brooks laugh from one piece'
  }
]

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog posts={ posts } />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}