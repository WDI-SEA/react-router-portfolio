import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Projects from './components/pages/Projects'
import Header from './components/partials/Header'
// import Header from './components/partials/Header'

function App() {
  let posts = [
    {title: 'Three things I love about Austin Powers',
     body: '1. his hair 2. his teeth 3. his jokes'
  },
  {
    title: 'Why tuna is better than cat food',
     body: 'it is has more nutrients'
  }
  ]
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog posts={posts}/>} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
