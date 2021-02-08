import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        let blogPosts = [
            {
                title: 'Had a bit of a scare over the weekend',
                body: 'Over the course of a few weeks, my computer slowly started losing its ability to charge. It finally died completely on friday night. My instincts told me that it was probably just the AC adaptor, but there were also symptoms of a bad motherboard. I ordered a new adaptor, and while I waited for it to arrive, I tried downloading the Unreal Engine onto my Macbook, but it kept crashing after compiling the shaders. Fortunately, the adaptor came and it worked fine. I was terribly releived. I cannot afford a new computer right now.'
            },
            {
                title: 'Sometimes less is more',
                body: 'After weeks of trying to make the portal in Prodrome look dope with particle effects, I still just was not feeling it. And it was making the frame rate lag like crazy. So I took a new approach. Instead of using dozens of tiny spheres orbiting around a nucleus, I just placed two larger spheres side by side and made them oscilate at slightly different frequencies. It is economical and looks totally badass. I cant wait to put sound to it.'
            },
            {
                title: 'Took the Silent Hill approach',
                body: 'The trees just have too many polygons, and low-poly trees clash too much with the rest of the meshes. So I took the Silent Hill approach and just draped the whole environment in fog, which allowed me to tone the LOD way down. It looks super spooky.'
            }
        ]
        return(
            <header>
                <nav>
                    <Link to="/">Home</Link>{' | '}
                    <Link to="/about">About</Link>{' | '}
                    <Link to="/blog">Blog</Link>{' | '}
                    <Link to="/projects">Projects</Link>
                </nav>
            </header>
        )
    }
}

export default Header