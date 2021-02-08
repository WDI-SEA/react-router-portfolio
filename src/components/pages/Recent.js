import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Recent extends Component {
    render() {
        console.log(this.props, 'getting data from recent')
        if (!this.props.title) return <h1>I don't have that post yet.</h1>

        // stating this.props from App
        let dataFromApp = this.props

        // making list of images
        let imagesList = dataFromApp.images.map((image, i) => {
            let imageLocation = {
                image: `/${image}`
            }
            return (
                <div className="imageHolder" key={`img-key${i}`}>
                    <img src={imageLocation.image} />
                </div>
            )
        })
        return (
            <div className="recentContainer">
                <div className="workTop">
                    <h1 className="quoteTop">{dataFromApp.title} <span id="quoteBottom">{dataFromApp.date}</span></h1>
                </div>
                {imagesList}
                <div className="workTask">
                    <p>{dataFromApp.content}</p>
                </div>
                <div className="commentContainer">
                    <p>comment here</p>
                </div>
                <nav className="bottomNav">
                    <Link to="/">Home</Link>{' | '}
                    <Link to="/about">About</Link>{' | '}
                    <Link to="/recent">Recent</Link>{' | '}
                    <Link to="/works">Works</Link>
                </nav>
            </div>
        )
    }
}
export default Recent