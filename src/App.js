import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Blog from './components/Blog'
import Header from './partials/Header'
import { useState } from 'react'

function App() {
  const [posts, setPosts] = useState([])

  const createPosts = (e, title, content) => {
    e.preventDefault()
    setPosts([...posts, { title, content }])
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            exact
            path='/blog'
            element={<Blog createPosts={createPosts} posts={posts} />}
          />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
