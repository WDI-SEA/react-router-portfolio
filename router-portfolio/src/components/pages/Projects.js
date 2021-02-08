import React, { Component } from 'react'

let projects = [
    {name: 'name', 
    description: 'description', 
    url: 'url'},
    {name: '2nd name', 
    description: '2nd description',
    url: '2nd url'}
]

class Projects extends Component {
    render() {
        return (
            <div>
                Hello this is the Projects page. This will soon be replaced by functional components when I build out my actual portfolio on my github website.
                <div>
                    <img src="bunny.jpg" />
                </div>
            </div>
        )
    }
}

export default Projects