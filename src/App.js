import './App.scss';
import Home from './component/Home';
import About from './component/About';
import Blog from './component/Blog';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Header from './component/partials/Header';
// import Footer from './component/partials/Footer';
import {Routes, Route} from 'react-router-dom'
import Sidebar from './component/partials/Sidebar';

function App() {
  const posts = [
    {title: 'Aliqua ullamco ea id tempor.', 
    content:'Consectetur incididunt mollit aliquip enim anim magna cupidatat deserunt ipsum cupidatat id nostrud. Sit ex enim magna tempor et tempor aliquip. Esse dolore ipsum pariatur exercitation amet qui velit deserunt adipisicing. Ipsum non cupidatat non enim consequat sit commodo in non elit qui.',
    tags: ['lorem', 'ipsum', "Magna et deserunt cupidatat aliqua dolore deserunt."]},
    {title: 'Aliqua ullamco ea id tempor.', 
    content:'Consectetur incididunt mollit aliquip enim anim magna cupidatat deserunt ipsum cupidatat id nostrud. Sit ex enim magna tempor et tempor aliquip. Esse dolore ipsum pariatur exercitation amet qui velit deserunt adipisicing. Ipsum non cupidatat non enim consequat sit commodo in non elit qui.',
    tags: ['lorem', 'ipsum', "Magna et deserunt cupidatat aliqua dolore deserunt."]},
    {title: 'Aliqua ullamco ea id tempor.', 
    content:'Consectetur incididunt mollit aliquip enim anim magna cupidatat deserunt ipsum cupidatat id nostrud. Sit ex enim magna tempor et tempor aliquip. Esse dolore ipsum pariatur exercitation amet qui velit deserunt adipisicing. Ipsum non cupidatat non enim consequat sit commodo in non elit qui.',
    tags: ['lorem', 'ipsum', "Magna et deserunt cupidatat aliqua dolore deserunt."]},
  ]


  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/about' element={<About />}/>
        <Route path='/blog' element={<Blog post={posts}/>}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
