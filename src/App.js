import './App.css';
import Homepage from './components/pages/Homepage';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Header from './components/partials/Header';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

const posts = [
  {
  title: 'Bacon Ipsum', 
  post: 'Dolor amet filet mignon porchetta burgdoggen, pastrami beef brisket sausage chuck short loin spare ribs short ribs jerky pork shankle. Spare ribs frankfurter hamburger filet mignon, kevin short loin salami capicola swine flank beef. Salami bresaola ribeye turkey shoulder. Short ribs alcatra beef, brisket turkey porchetta cow ball tip burgdoggen pancetta. Fatback cow ground round pork chop. Jowl burgdoggen tongue, ham chuck pastrami short loin sirloin pork loin picanha pork capicola. Pork chop swine tri-tip, alcatra kielbasa frankfurter chuck ball tip turducken meatloaf strip steak pastrami' 
},
  {
  title: 'Rump Prosciutto', 
  post: 'Porchetta, ribeye short loin turkey t-bone jowl ground round. Tail rump strip steak, sausage ham t-bone hamburger fatback ground round short loin. Ball tip pork beef, biltong ham hock shoulder meatloaf chislic tail sausage prosciutto sirloin pork chop tri-tip chicken. Beef ribs chuck pork loin ham hock short ribs chicken. Salami meatball kielbasa, shoulder porchetta tongue ham frankfurter short loin filet mignon pancetta.' 
},
  {
  title:'Doner strip', 
  post:'Steak ham, jerky spare ribs rump shank cow buffalo meatloaf salami jowl cupim venison tongue. Kielbasa salami beef ribs andouille landjaeger pork chop tail hamburger short ribs fatback alcatra rump meatball. Shankle tenderloin kielbasa brisket sausage shoulder. Porchetta andouille short loin frankfurter, pork cow cupim. Bresaola leberkas meatball turkey burgdoggen sausage shoulder pig short ribs filet mignon shank. Cupim frankfurter jerky alcatra.'
  },
  {
    title:'Buffalo Porchetta', 
    post:'Andouille, tail leberkas prosciutto corned beef pork shank tenderloin venison brisket bresaola pastrami tongue. Frankfurter tail cupim andouille sausage, short ribs beef ribs. Ribeye boudin landjaeger tail, brisket picanha flank swine hamburger shoulder. Alcatra tri-tip chicken leberkas capicola kevin jowl pig. Ground round tail bacon meatloaf filet mignon fatback turkey corned beef prosciutto tri-tip buffalo pig.'
  },
  {
    title: 'Bresaola Meatlof',
    post: 'turkey, cow ham hock hamburger ribeye spare ribs pastrami porchetta pork rump bacon shankle capicola. Drumstick strip steak short loin bresaola swine fatback shoulder chislic. Tri-tip drumstick turducken jowl chislic corned beef. Chicken boudin kevin, meatloaf hamburger shankle alcatra jerky prosciutto tenderloin pork loin. Leberkas cow jowl corned beef ham chislic tongue meatball alcatra fatback buffalo swine flank. Drumstick strip steak brisket rump turkey, ball tip prosciutto frankfurter boudin chuck bresaola swine bacon. Ground round burgdoggen chislic biltong cupim sausage flank.'
  }
]

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/blog" element={<Blog />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
