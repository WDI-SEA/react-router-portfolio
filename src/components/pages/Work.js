import React, { Component } from 'react'

class Work extends Component {
    render() {
        console.log(this.props, 'getting data from work')
        console.log(this.props.location.works, 'this is data????')
        if (!this.props.name) return <h1> I don't have that work yet </h1>

        // stating this.props from App
        let dataFromApp =  this.props
        
        // stating this.prop.location.works from Link
        let dataFromLink = this.props.location.works

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

        return (
            <main className="works">
                <div className="workTop">
                    <h1 className="quoteTop">{dataFromApp.name}</h1>
                </div>
                {imagesList}
                <div className="workTask">
                    <p>{dataFromApp.task}</p>
                </div>
                <div className="workSolution">
                    <p>{dataFromApp.solution}</p>
                </div>
                <div className="workType">
                    <p>{dataFromApp.type}</p>
                </div>
                <div className="workTech">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
                <div className="bottomNav">
                    <ul>
                        <li>all works</li>
                        <li>work1</li>
                        <li>work2</li>
                    </ul>
                </div>
            </main>
        )
    }
}

export default Work
