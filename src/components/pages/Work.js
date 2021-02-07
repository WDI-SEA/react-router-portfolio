import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Work extends Component {
    render() {
        console.log(this.props, 'getting data from work')
        if (!this.props.name) return <h1> I don't have that work yet </h1>

        // stating this.props from App
        let dataFromApp =  this.props
        
        // stating this.prop.location.works from Link

        // making list of images
        let imagesList = dataFromApp.images.map((image, i) => {
            let imageLocation = {
                image: `/${image}`
            }
            return (
                <div className='workList' key={`work-key${i}`}>
                    <img src={imageLocation.image} />
                </div>
            )
        })

        // making list of tech
        let techList = dataFromApp.tech.map((tech, i) => (
            <li key={`tech-key${i}`}>{tech}</li>
        ))

        return (
            <main className="worksContainer">
                <div className="workTop">
                    <h1 className="quoteTop">{dataFromApp.name}</h1>
                </div>
                {imagesList}
                <div className="workTask">
                    <h3>Task</h3>
                    <p>{dataFromApp.task}</p>
                </div>
                <div className="workSolution">
                    <h3>Solution</h3>
                    <p>{dataFromApp.solution}</p>
                </div>
                <div className="workType">
                    <h3>Type of work</h3>
                    <p>{dataFromApp.type}</p>
                </div>
                <div className="workTech">
                    <ul>
                        <h3>Skills used</h3>
                        {techList}
                    </ul>
                </div>
                <nav className="bottomNav">
                    <Link to="/">Home</Link>{' | '}
                    <Link to="/about">About</Link>{' | '}
                    <Link to="/news">News</Link>{' | '}
                    <Link to="/works">Works</Link>
                </nav>
            </main>
        )
    }
}

export default Work
