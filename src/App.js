import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './component/pages/Home';
import Blog from './component/pages/Blog';
import About from './component/pages/About';
import Projects from './component/pages/Projects';
import Header from './component/Header';

export default function App() {
 const posts = [
  {title:'Lorem ipsum'  , body: 'Dolor sit amet dolor sit amet' },
  {title:'Id diam vel quam'  , body: 'Nec feugiat nisl pretium fusce id velit' },
  {title:'Ornare suspendisse'  , body: 'Tincidunt nunc pulvinar sapien' },
 ]



  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path='/'
          element={<Home  />}
        />
        <Route 
          path='/blog'
          element={<Blog posts={posts} /> } 
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
    </Router>
  )
}
