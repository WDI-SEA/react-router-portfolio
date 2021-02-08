import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class Blog extends Component {
    render() {
        return (
            <div>
                <h3>Recent Blog Posts</h3>
                {/* <ul>
                    {this.props.blog.map((blog, i) => {
                        return <li key={`key is ${i}`}><Link to={`/widget/${i}`}>{blog}</Link></li>
                    })}
                </ul> */}
            </div>
        )
    }
}

export default Blog