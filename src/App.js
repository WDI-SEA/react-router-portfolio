import { BrowserRouter ,Routes, Route} from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Header from "./components/partials/Header";

const posts = [
{
  title: 'here is a post',
  body: 'here is the body'
  },
  {
  title: 'here is another post',
  body: 'here is another body'
}
]

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog posts={posts}/>} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
