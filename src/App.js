import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from "./components/Home"
import Blog from "./components/Blog"
import About from "./components/About"
import Projects from "./components/Projects"
import Layout from './partials/Layout'
import BlogPost from './components/BlogPost'

import blogPost from './post'
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
        <Routes>
          <Route 
          path='/'
          element={<Home />}
          />
          <Route 
          path='/blog'
          element={<Blog blogPost={blogPost}/>}
          />
          <Route 
          path='/blog/:id'
          element={<BlogPost blogPost={blogPost}/>}
          />
          <Route
          path='/about'
          element={<About />}
          />
          <Route 
          path='/projects'
          element={<Projects />}
          />
        </Routes>
        </Layout>
      </Router>
      
    </div>
  );
}

export default App;
