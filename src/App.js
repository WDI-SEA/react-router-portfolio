import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Blog from './components/Blog';
import About from './components/About';
import Projects from './components/Projects';
import Nav from './components/Nav';
import './App.css';

const blogPosts = [
  {
    title: "First Post",
    date: "2021-01-01",
    content: "This is the first post. Fun fact about me is I play the cello. It's been awhile since I've practiced but I like to whip it out for Sunday worship at church or for jam sessions with friends.",
    author: "Emily Ryan"
  },
  {
    title: "Second Post",
    date: "2021-01-02",
    content: "This is the second post. I'm finding that I like React the best out of all the frameworks I've tried. I'm excited to learn more about it and see what I can do with it.",
    author: "Emily Ryan"
  },
  {
    title: "Third Post",
    date: "2021-01-03",
    content: "This is the third post. I decided today that the sweet potato is my favorite vegetable. It's the most flexible vegetable and you can put it in literally anything or just cook it by itself and it's amazing. Sweet potato fries are my absolute favorite study snack. Especially if there's some kind of aioli involved.",
    author: "Emily Ryan"
  },
]

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog posts={blogPosts}/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
