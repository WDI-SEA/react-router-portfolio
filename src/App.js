import { Outlet, Link } from "react-router-dom"

let blogs = [
  {
    name: "Ihop",
    id: 1,
    amount: "$5.69",
  },
  {
    name: "Primavera",
    id: 2,
    amount: "$5.00",
  },
  {
    name: "McDonald's",
    id: 3,
    amount: "$4.89",
  },
  {
    name: "Clinton St. Baking Company",
    id: 4,
    amount: "$16.00",
  },
  {
    name: "Bubby's",
    id: 5,
    amount: "$22.00",
  }
];
  
export default function App() {
  return (
    <div className="App">
      <h1>Homepage!</h1>
      <h2>This is the homepage to person's Blog!</h2>
      <nav style={{borderBottom: 'solid 1px', paddingBottom: '1rem'}}
      >
      <Link to='/blog'>Blog</Link> |{' '}
      <Link to='/about'>About</Link> |{' '}
      <Link to='/projects'>Projects</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export function getPancakes() {
  return blogs;
}

export function getPancake(id) {
  return blogs.find(blog => blog.id === Number(id)) || {}
}