// External Resources
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// Internal Resources
import "./App.css";
import Resume from "./Resume-MikeKohlberg-2022102.pdf";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  const [show, setShow] = useState(false);
  const emailModalClose = () => setShow(false);
  const emailModalShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={emailModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="https://formsubmit.co/mkohlberg95@gmail.com" method="POST" encType="multipart/form-data">
            <input type="file" name="attachment"></input>
            <br/>
            <input type="text" name="name" placeholder='Enter your name' required/>
            <br/>
            <input type="email" name="email" placeholder='Enter your email' required/>
            <br/>
            <input type="text" name="_subject" placeholder='Enter the subject'></input>
            <br/>
            <textarea name="message" placeholder="Enter your message"></textarea>
            <br/>
            <input type="hidden" name="_autoresponse" value="Thank you, I will be with you shortly!"></input>
            <br/>
            <button type="submit">Send</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={emailModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="header-container">
        <a href={Resume} download>
          Download Resume
        </a>
        <Button onClick={emailModalShow} id="callToActionBtn" variant="primary" size="lg">
          Email Me
        </Button>
        <header>
          <h1>MICHAEL KOHLBERG</h1>
          <h2>Software Engineer</h2>
        </header>
      </div>
      <main>
        <h2 className="section-title">Projects</h2>
        <ProjectsCarousel />
        <Skills />
        <About />
      </main>
    </div>
  );
}

export default App;
