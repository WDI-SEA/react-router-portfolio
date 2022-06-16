import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homepage from "./components/pages/Homepage"
import Blog from "./components/pages/Blog"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"

import Header from "./components/partials/Header"

const posts = [
  {
    title: 'Hoan Le',
    body: 'Laborum ullamco anim fugiat in veniam elit exercitation enim.'
  },
  {
    title: 'Angelika',
    body: 'In aliquip nulla ex labore non commodo eiusmod fugiat laborum nulla.'
  },
  {
    title: 'Buglly',
    body: 'Incididunt ad aute ullamco ea.'
  },
  {
    title: 'Davis',
    body: 'Cupidatat Lorem minim adipisicing eiusmod.'
  },
  {
    title: 'Emily',
    body: 'Occaecat sit aliqua adipisicing consequat reprehenderit minim Lorem nostrud excepteur dolore veniam mollit nisi.'
  },
  {
    title: 'Jack',
    body: 'Commodo aliqua ex esse nostrud amet labore sit esse laboris esse ullamco.'
  }
]

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blog' element={<Blog posts={posts} />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

