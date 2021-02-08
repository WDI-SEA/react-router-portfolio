import React, { Component } from 'react' 

class Widget extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.posts[this.props.match.params.id]}</h1>
            </div>
        )
    }
}

export default Widget
