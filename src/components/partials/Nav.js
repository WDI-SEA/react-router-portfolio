import { Component } from "react"
import { Link } from 'react-router-dom'
import { Button } from 'react-bulma-components';
import { Navbar  } from "react-bulma-components";
import { Heading  } from "react-bulma-components";


export default class Nav extends Component {
    
    render() {
        
        return (
            <Navbar color="light" size="large" >
                <Navbar.Item></Navbar.Item>
                <Navbar.Item></Navbar.Item>
                <Navbar.Item></Navbar.Item>
                <Navbar.Item></Navbar.Item>
                    <Navbar.Item><Button color="danger" to="/" renderAs={Link}>Home</Button></Navbar.Item>
                    <Navbar.Item><Button to="/blog" renderAs={Link}>Blog</Button></Navbar.Item>
                    <Navbar.Item><Button to="/about" renderAs={Link}>About</Button></Navbar.Item>
                    <Navbar.Item><Heading size={1} >Christos Miltiadou</Heading></Navbar.Item>
                    
                    <Navbar.Item><Button to="/projects" renderAs={Link}>Projects</Button></Navbar.Item>
                <Navbar.Item><Button href="https://github.com/cmiltiadou" target="_blank" renderAs='a' color="link">gitHub</Button></Navbar.Item>
                <Navbar.Item><Button href="https://www.linkedin.com/in/christos-miltiadou/" renderAs='a' target="_blank" color="info">LinkedIn</Button></Navbar.Item>
            </Navbar>

        )
    }
}