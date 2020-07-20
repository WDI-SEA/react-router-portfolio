import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  return (
    <Router>
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              Jamo's Portfolio
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
      {/* <div>
        <nav>
          <Link to="/">Go Home!</Link>
          <Link to="/contact">Contact Us!</Link>
          <Link to="/procedures">Procedures</Link>
        </nav>
      </div>
      <div className="App">
        <h1>Dentist Info! </h1>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route
          path="/procedures"
          render={() => <Procedures procedures={procedures} />}
        />
      </div> */}
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
