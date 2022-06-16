import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './Blog';
import About from './About';
import Projects from './Projects';
import Header from './partials/Header'
import Home from './Home';

const post = [
  
  {
    title: 'In "Edge of Tomorrow" Cruise acted in a suit that weight up to 130 pounds',
    img: <img src='https://i.insider.com/5384ec9deab8ea5b55f4b401?width=600&format=jpeg&auto=webp'/>,
    body: 'Cruise" character repeats the same day while battling deadly aliens alongside Emily Blunt in the movie. And the armor worn for the film was heavy, with versions weighing between 85 and 130 pounds.'
  },
  {
    title: 'For the cargo-plane crash in the "The Mummy," Cruise did the stunt inside a NASA plane that trains astronauts for zero gravity.',
    img: <img src='https://i.insider.com/593765a5d508f81c008b47f8?width=600&format=jpeg&auto=webp'/>,
    body: 'In 2017s "The Mummy," Cruise finds himself stuck in a cargo plane as it crashes. To pull off a scene like this, actors would typically film it in a controlled setting like a sound stage surrounded by a green screen. '
  }
  
  
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog posts={post}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
