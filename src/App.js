import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Blog from './components/Blog'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {
  const posts = [
    {
      title: 'My First Post',
      body: 'Content'
    }
  ]

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Blog posts={posts} />} path="/blog" />
          <Route element={<About />} path="/about" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
