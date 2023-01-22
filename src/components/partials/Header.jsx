import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand to='/home'>Navbar</Navbar.Brand>
            <Nav.Link href='/' className='nav'>Home Page</Nav.Link>
            <Nav.Link href='/blog' className='nav'>Blogs</Nav.Link>
            <Nav.Link href='/projects' className='nav'>Projects</Nav.Link>
            <Nav.Link href='/about' className='nav'>About Page</Nav.Link>
        </Container>
        </Navbar>
        </>
    )
}

export default Header