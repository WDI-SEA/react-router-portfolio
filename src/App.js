import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Homepage from "./components/Homepage"
import Blog from "./components/Blog"
import About from "./components/About"
import Projects from "./components/Projects"

import Header from "./partials/Header"

export default function App() {
  const posts = [
    {
      title:"My end is imminent",
      body:'It is now 2 hours before my usual dinner time. If I don\'t get fed in the next 10 seconds I fear I may wither away to nothing. I have screamed at length to the humans "Feed me! I\'m skin and bones! Do you not see me disappearing before your very eyes?!" but they just laugh and tell me to wait. Such cruel beings.'
    },
    {
      title:"Birb!",
      body:'I saw a birb outside today. If not for the invisible barrier, I would have caught it, but alas it flew away when I pounced against the cursed thing! The humans congratulated me and told me I would have caught it if not for the "window".'
    },
    {
      title:"Annoying Boxes",
      body:'The humans spend so much of the day sitting, staring at strange boxes that have moving pictures. Why do that when they can bask in my glory? They should pay more attention to me. I think I will go scream at them until they come pet me. That feels like the right move.'
    }
  ]

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/blog" element={<Blog posts={posts}/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

