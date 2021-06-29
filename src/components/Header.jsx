import {
  Navbar,
  Container,
  Nav,
  Jumbotron
} from 'react-bootstrap'

export default function Header() {
    return (
      <>
        <Jumbotron className="mb-0 text-center">
          <h1 class="display-4">Jorge Casique</h1>
          <p class="lead">Welcome to my portfolio.</p>
        </Jumbotron>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Jorge Casique</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" defaultActiveKey="/home">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
}