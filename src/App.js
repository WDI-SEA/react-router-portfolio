import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/pages/Home'
import About from './component/pages/About'
import Blog from './component/pages/Blog'
import Projects from './component/pages/Projects'
import Header from './component/partials/Header';
import './App.css';

const posts = [
  {
    title: 'Et aliqua amet amet ut sunt culpa cillum esse.',
    body: "Ipsum minim aute sit voluptate do cupidatat qui. Ipsum cillum voluptate voluptate cillum sint do incididunt dolor pariatur magna et excepteur. Eu qui pariatur deserunt consequat tempor Lorem do occaecat enim commodo. Irure quis sunt labore Lorem elit esse incididunt magna sit esse nulla. Cupidatat cillum culpa proident duis veniam veniam sint quis nulla anim ut exercitation quis. Fugiat deserunt velit sit consequat ea incididunt sint incididunt cillum. Ut magna dolore tempor dolore cillum do in enim."
  }
]

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog posts={posts} />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
