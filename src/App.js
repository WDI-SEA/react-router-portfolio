import Blog from './components/pages/Blog';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/partials/Header';

function App() {
  const posts = [
    {title: 'my favorite snacks', post: 'my favorite snacks are crackers, fruits of all types, expecially watermelon. I also love peanut butter, unitl I find medicine hiding in it. Yuck!'},
    {title: 'my favorite toys', post: 'my favorite toys are super strong chewy toys, expecially whichever ones my sister Luna is playing with. I have like 4 bones that I love to chew on all day. Depending on my mood, I might tear thru a pair of shoes on occasion.' },
    {title: 'my favorite activities', post: 'my favorite activites are being nosy out of the window allllll day long, barking at anyhting and everything that passes by the yeard, and most importantly sleeeping all day.'}
  ]
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog posts={posts} />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
