import React, { Component } from 'react'

class Recents extends Component {
    render() {
        console.log(this.props, 'getting data from recents')
        return (
            <div className="Blog">
                <div className="blogContainer">
                    <h2>Daily inspiring stuffs</h2>
                    <div className="recentPost">
                        <h2>blog Thumbnail</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recents