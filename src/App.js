// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homepage from './components/Homepage';
import Blog from './components/Blog';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';

const posts = [
  {
    id: 1,
    title: "Lorem",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis ante quis ligula hendrerit congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat, mi id volutpat convallis, dui nisi condimentum ipsum, vel eleifend arcu magna vel metus. Suspendisse potenti. Cras purus metus, sodales eget elit non, efficitur egestas purus. Aliquam varius varius leo, vitae varius ipsum imperdiet eleifend. Vivamus non augue rhoncus sem efficitur dictum. In efficitur tincidunt ipsum in finibus. Vivamus sit amet placerat elit. Vestibulum nibh lorem, fermentum at pellentesque id, volutpat non felis. Curabitur sit amet tincidunt neque, in varius turpis. Vestibulum dignissim, erat quis ullamcorper ultrices, dolor felis dictum enim, et lacinia arcu ligula non quam. Praesent non felis ac felis scelerisque tincidunt id sit amet justo. Nunc arcu lectus, dapibus nec ex sit amet, sollicitudin tincidunt quam. Nam justo elit, vulputate vel consequat vitae, rutrum ornare risus. Quisque scelerisque libero tempus metus molestie, quis varius elit feugiat."
  },
  {
    id: 2,
    title: "ipsum",
    body: "Praesent lorem tortor, tincidunt id dolor id, finibus sodales elit. Cras posuere lectus a ipsum sollicitudin, non feugiat ligula luctus. Nulla maximus dui turpis, ut lacinia diam egestas quis. In commodo dolor eget erat bibendum scelerisque. Morbi accumsan elit at laoreet fringilla. Integer efficitur nec urna et ullamcorper. Pellentesque ac consectetur erat. Aenean elit leo, elementum eget mollis ut, sodales dictum tellus. Etiam sollicitudin a lorem et ullamcorper."
  },
  {
    id: 3,
    title: "dolor",
    body: "Nunc dictum nisl sed urna viverra, eget congue velit faucibus. Nam vel placerat nisl. Donec consequat nisi at ipsum lobortis, vitae efficitur nunc mollis. Nulla augue ipsum, mattis eget condimentum id, auctor sed quam. Vestibulum vel libero tellus. Proin lobortis sem et arcu ultricies, sed iaculis arcu volutpat. Integer pellentesque consequat orci, vel imperdiet ante placerat et. Nullam sed turpis accumsan, consectetur eros eu, semper erat."
  },
  {
    id: 4,
    title: "sit amet",
    body: "Vivamus id diam turpis. Ut cursus turpis quis turpis lobortis finibus. Proin a purus eget metus posuere mollis. Vestibulum in dignissim purus, sit amet mattis nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sed risus maximus, placerat nunc sit amet, bibendum ipsum. Nullam aliquet laoreet libero, at dignissim est rutrum non."
  },
]


function App() {
  return (
    <>
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/blog" element={<Blog
          posts = {posts}
          />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
