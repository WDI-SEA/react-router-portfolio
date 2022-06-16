import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Blog from "./components/pages/Blog"
import Projects from "./components/pages/Projects"

function App() {
  const blogPosts = [
    {
      title: "first post",
      body: "isn't this a great blog post?",
    },
    {
      title: "another post",
      body: "Can you believe it? I posted again!",
    },
    {
      title: "Yooo! Third time's the charm!",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur, tempora cum ducimus doloribus minus tenetur inventore dolore culpa vitae.",
    },
    {
      title: "Crushing it! One more post for you!",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi id a nobis repudiandae, provident minus architecto laudantium temporibus quis magni expedita enim esse optio, consectetur nulla fuga dicta vero cum dolores velit accusamus maiores? Eaque quo voluptatem rem exercitationem beatae tenetur animi dicta, assumenda facilis. In unde enim a error, ducimus dolorem suscipit, provident distinctio excepturi quam assumenda cupiditate necessitatibus impedit. Nobis ex eligendi totam, aut soluta nihil sequi id sapiente, maxime sunt in voluptatum omnis odit qui, molestias similique ea. Nihil iste minima fuga atque corporis cupiditate alias recusandae laudantium magni doloremque maiores odit ea asperiores, harum mollitia nulla!",
    },
  ]

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/about">About</Link>
          {" | "}
          <Link to="/blog">Blog</Link>
          {" | "}
          <Link to="/projects">Projects</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog posts={blogPosts} />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
