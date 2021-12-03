import React, { Component } from "react"
import "./App.css"
import Header from "./components/partials/Header"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Blog from "./components/pages/Blog"
import Projects from "./components/pages/Projects"

import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

import "./App.css"

class App extends Component {
  changePage = (e) => {
    this.setState({
      pageToRender: e.target.innerText,
    })
  }

  getPage = () => {
    if (this.state.pageToRender === "Home") {
      return <Home />
    } else if (this.state.pageToRender === "About") {
      return <About />
    } else if (this.state.pageToRender === "Blog") {
      return <Blog />
    } else if (this.state.pageToRender === "Projects") {
      return <Projects />
    }
  }

  render() {
    const posts = [
      "Bacon ipsum dolor amet turkey porchetta pork loin, meatball chuck salami fatback shankle pancetta corned beef. Prosciutto tail kielbasa shankle. Swine t-bone beef drumstick hamburger tail buffalo tenderloin boudin porchetta cow chislic strip steak short ribs pork loin. Andouille sausage picanha, chicken buffalo shank short loin ground round fatback meatball ball tip ham hock cow. Tongue andouille shankle ground round kevin ball tip short loin bresaola ham hock meatball sirloin burgdoggen. Pastrami cupim meatball, hamburger chicken frankfurter ribeye pork loin burgdoggen t-bone sirloin prosciutto boudin.",
      "Burgdoggen spare ribs corned beef jowl. Venison porchetta ribeye doner, corned beef ham frankfurter andouille sirloin flank spare ribs kevin tongue bresaola. Turducken corned beef buffalo chuck, beef prosciutto brisket. Cupim ribeye andouille, picanha hamburger shank beef ribs alcatra meatball chicken filet mignon. Ham hock biltong chicken, turkey shank shankle ball tip. Tail hamburger jowl biltong.",
      "Strip steak prosciutto rump, ham buffalo biltong jerky ball tip. Cupim beef kielbasa bresaola turkey pancetta pork loin jowl chislic shankle landjaeger. Cow beef ribs alcatra, hamburger ball tip pork belly doner meatloaf picanha filet mignon. Venison cow frankfurter turducken, meatloaf drumstick swine pork belly chicken filet mignon buffalo bacon pig tail landjaeger. Fatback chislic turkey jowl. Ball tip pork chop hamburger pastrami beef ribs capicola.",
    ]
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog posts={posts} />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
