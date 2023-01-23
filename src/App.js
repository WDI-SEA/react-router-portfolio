import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Header from './components/partials/Header';

let posts = [
  {
    title: "Hello world",
    body: "Goodbye world"
  },
  {
    title: "Cello world",
    body: "Silence the violins"
  },
  {
    title: "YE",
    body: "ET"
  },

]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog posts={posts}/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;