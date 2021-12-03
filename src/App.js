import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Projects from './components/pages/Projects';
import Header from './components/partials/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  let posts = [
    {title: 'JavaScript..SMH', by:'by: Sleepy', body: 'No. Just, no.'},
    {title: 'I See You, Canvas', by:'by: Grumpy',body: 'Okay, so Canvas, you are pretty cool. Hello, old school games!'},
    {title: 'EJS', by:'by: Dopey', body: 'Even though your tags have cute names, you not cute.'}
  ]
  
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog 
        posts={posts}
        />} 
      />
      <Route path='/projects' element={<Projects />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
