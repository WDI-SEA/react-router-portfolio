import React, { Component } from 'react'
// import pic from 'src/Screen Shot 2021-12-03 at 8.52.41 AM.png'
// Error message saying 'Failed to compile' ...This is the relative path

export default class Projects extends Component {
    render() {
        return (
            <div class="container">
                <h1>Projects</h1>
                {/* <img src={pic} alt="an image" height="200px"></img> */}
                <p> This is a NYC based apartment and roommate seeking app. The purpose of this app is to connect renters and rentees. This app will allow people to post their apartments online with the hopes of finding a roommate or someone to take over their apartment via rent or sublease. <br></br> The image above is a screenshot of my Cloudinary API implementation. This API allows the capabilty for people to add images to their post. It's one of my favorite piece of code from this app. This was also my first full-stack app using PostgreSQL and EJS.</p>
            </div>
        )
    }
}
