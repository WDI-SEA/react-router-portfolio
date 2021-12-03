import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/partials/Header'
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import Projects from './components/pages/Projects'
import About from './components/pages/About'

function App() {
  const posts = [
    {
      id: 1,
      date: '10/11/2021',
      title: 'Starting My SEI Journey',
      body: 'Today I started the General Assembly Software Engineering Immersive. I\'m super excited to finally change careers and improve my life.'
    },
    {
      id: 2,
      date: '10/26/2021',
      title: 'First Project Completed!',
      body: 'We spent the first two weeks drilling HTML, CSS and JS dom manipulation. It all came together in making our first project, a game! Mine is a Space Invaders clone called Omicron. I\'m very happy with how it turned out!'
    },
    {
      id: 3,
      date: '11/18/2021',
      title: 'Project #2 Down!',
      body: 'EJS is the devil. It\'s ugly and I hate it. But I was able to use it to complete Pescador, my fishing journal and weather app. I\'m starting to feel like a real programmer!'
    },
    {
      id: 4,
      date: '12/01/2021',
      title: 'React Reactions',
      body: 'The switch into React has been really exciting. I like it a lot more than EJS/Express and I\'m looking forward to building some bigger projects.'
    },
  ]

  const projects = [
    {
      id: 1,
      title: 'Omicron',
      stack: 'HTML Canvas, CSS, Vanilla JS',
      description: 'A Futurama themed Space Invaders clone',
      img: ''
    },
    {
      id: 2,
      title: 'Pescador',
      stack: 'EJS, Express, PostgresQL',
      description: 'A journal and conditions dashboard for fishermen',
      img: ''
    },
  ]

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog posts={posts}/>} />
          <Route path="/projects" element={<Projects projects={projects}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
