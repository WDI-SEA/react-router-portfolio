import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/partials/Header';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Projects from './components/pages/Projects';

const post = [
  {title: 'passing class?', body: 'I have no idea how I am passing these projects'},
  {title: 'I\'m ngmi', body: 'I\'m so behind and these concepts are going over my head HELP SEND HELP SEEK HELP REACH HELP SOS HELP'},
  {title: 'Lost Ark is so lost in the sauce', body: 'RNGesus please give me strength to overcome these honing chances. Give us each day our daily level 5 tripod'}
]

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog posts={post} />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
