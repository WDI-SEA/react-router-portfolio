import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Homepage from './components/Homepage'
import About from './components/About'
import Blog from './components/Blog'
import Projects from './components/Projects'

function App() {
  const posts = 
  [
    {
      title: "First-Class Functions",
      body: "If you have been learning JavaScript, you may have heard that JavaScript treats functions as first-class citizens. Thats because in JavaScript or any other functional programming languages functions are objects.",
    },
    {
      title: "Higher-Order Functions",
      body: "Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output",
    },
    {
      title: "Array.prototype.filter",
      body: "The filter() method creates a new array with all elements that pass the test provided by the callback function. The callback function passed to the filter() method accepts 3 arguments: element, index, and array.",
    },
    {
      title: "Array.prototype.reduce",
      body: "The reduce method executes the callback function on each member of the calling array which results in a single output value. The reduce method accepts two parameters: 1) The reducer function (callback), 2) and an optional initialValue"
    }
  ]
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About </Link>{" | "}
        <Link to="/blog">Blog</Link>{" | "}
        <Link to="/projects">Projects</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog"
          element={<Blog posts={posts}/>}
        />
        <Route path="/projects"
          element={<Projects />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
