import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Recents extends Component {
    render() {
        console.log(this.props, 'getting data from recents')
        let blogPosts = this.props.recData.map((post, i) => {
            let blogImageStyle = {
                backgroundImage: `url(${post.bgImg})`
            }
            return (
                <div className="blogPostpost"   key={`blog=key${i}`}>
                    <div className="blogThumbContainer">
                        <div className="blogThumb" style={blogImageStyle}>
                            <Link to={`/recent/${post.id}`}></Link>
                        </div>
                        <div className="blogThumbTitle">
                            <p>{post.title}</p>
                        </div>
                        <div className="blogThumbDate">
                            <p>{post.date} • {post.type}</p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="Blog">
                    <h1 className="quoteTop">Daily inspiring stuffs</h1>
                <div className="blogContainer">
                    {blogPosts}
                </div>
            </div>
        )
    }
}

export default Recents