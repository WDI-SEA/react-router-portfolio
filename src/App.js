import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./comps/Home";
import Blog from "./comps/Blog";
import About from "./comps/About";
import Projects from "./comps/Projects";
import Header from "./comps/Header";


const posts = [
  {
    title: 'Beep Boop',
    desc: 'We out here, beepin and boopin'
  },
  {
    title: 'Cat Gang',
    desc: 'Nothing to see here, just a gang of cats'
  },
  {
    title: 'Grandma with the gat',
    desc: 'She got a glock, no cap'
  }
]

export default function App() {
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
