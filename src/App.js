import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/partials/Header';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert } from 'react-bootstrap'

let posts = [
  {
    title: "Hello world",
    body: "Goodbye world"
  },
  {
    title: "Cello world",
    body: "silence the violins"
  },
  {
    title: "Ye",
    body: "eeeeet"
  }
]


function App(props) {
  return (
    <div className='container'>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog post={posts}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
