import './App.css';
import About from './components/pages/About'
import Blog from "./components/pages/Blog"
import BlogPost from './components/BlogPost';
import Homepage from './components/pages/Homepage';
import Projects from './components/pages/Projects'
import ProjectDetail from './components/ProjectDetail';
import Header from './partials/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog posts={BlogPost.posts} />} />
          <Route path="/projects" element={<Projects projects={ProjectDetail.projects} />} />
        </Routes>
    </BrowserRouter>
  )
};

export default App
