import {
  Routes,
  Route,
  BrowserRouter,
  Link
} from 'react-router-dom'


//pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Project from './pages/Project';

//partials
import Header from './partials/Header';

export default function App() {
  const posts = [

    {
      title: 'Ispum Dolor ',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Who said Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.'
    
    },
    {  
      title: 'Lorem Dolor',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Wow Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.'
    },
    {
      title: 'Provident Nulla Odio',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.'
    }

  ]

  return (
    <>
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/blog' element={ <Blog posts={posts}/> } />
            <Route path='/projects' element={ <Project /> } />
            <Route path='/about' element={ <About /> } />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}


