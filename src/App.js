import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Homepage from './components/Homepage'
import About from './components/About'
import Blog from './components/Blog'
import Projects from './components/Projects'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>

        {" | "}

        <Link to="/about">About Me</Link>

        {" | "}

        <Link to="/blog">Blog</Link>

        {" | "}

        <Link to="/projects">Projects</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog"
          element={<Blog />}
        />
        <Route path="/Projects"
          element={<Projects />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
