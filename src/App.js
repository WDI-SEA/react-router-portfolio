import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
function App() {
  const posts = [
    {    
      title: 'Scientists make a great snack!',
      author: 'Trex from Jurassic park',
      body: 'They are crunchy, delicious and healthy for the dino trying to watch their weight',
      comments: [
        'True!',
        'I love Scientists for breakfast and lunch!',
        'Great Post!',
        'I like anthropologists in particular to eat'
      ]
    },
    {
      title: 'Dinosaurs are neat',
      author: 'Mr. T-Rex',
      body: 'I pity the fool that doesn\'t think dinosaurs are neat!',
      comments: [
        'Wow!',
        'Amazing!',
        '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'
      ]
    }
  ]
  return (
    <div>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog posts={posts}/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
