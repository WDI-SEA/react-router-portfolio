import React from 'react'

    const Projects = props => {
        return (
            <div>
                <h1>Welcome to myProjects</h1>
                <h2>Here are some projects from my bootcamp at GA</h2>
                <ul>
                    {props.projects.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }


export default Projects