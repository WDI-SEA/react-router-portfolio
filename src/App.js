import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Header from './components/partials/Header'
import BlogPost from './components/BlogPosts'
import ProjectInfo from './components/ProjectInfo'
import Footer from './components/partials/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog posts={BlogPost.posts} />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects projects={ProjectInfo.projects} /> } />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App;