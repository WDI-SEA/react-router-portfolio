import React, { Component } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="d-flex justify-content-center">
                <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/blog">Blog</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/projects">Projects</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/about">About</Link></Breadcrumb.Item>
                </Breadcrumb>
            </header>
        )
    }
}