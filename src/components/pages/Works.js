import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Works extends Component {
    
    render() {
        // console.log(this.props, 'getting data from works')

        let workPost = this.props.works.map((work, i) => {
            let workImageStyle = {
                backgroundImage: `url(${work.bgImg})`
            }
            return (
                <div className="workImage" style={workImageStyle} key={`work-key${i}`}>
                    <Link to={{
                        pathname: `/works/${work.id}`,
                        works: this.props
                    }}>{work.name}</Link>
                </div>
            )
        })

        return (
            <div className="works">
                <h1 className="quoteTop">"Form follows function" <span id="quoteBottom">Sullivan, Louis H. (1896)</span></h1>
                <div className="wrapper">
                    {workPost}
                </div>
            </div>
        )
    }
}

export default Works