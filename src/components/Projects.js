import React, { Component } from 'react'
import pic from '../Screen Shot 2021-12-05 at 8.52.16 PM.png'
import picTwo from '../Screen Shot 2021-12-03 at 8.52.41 AM.png'

const Projects = props => {

        return (
            <div class="container">
                {/* <h1>Projects</h1> */}
                <form>
        <fieldset>
          <legend id="instructions">Apartment Buddy</legend>
            <div>
              <label id="aboutProject">I created a NYC based app called Apartment Buddy. The purpose of this app is to connect renters and rentees. This app will allow people to post their apartments online with the hopes of finding a roommate or someone to take over their apartment via rent or sublease. The image below is a screenshot of an apartment listing.
              
                
              I used a Cloudinary API to add an image to apartment listings. This API allows the capabilty for people to add images to their post. It's one of my favorite pieces of code from this app. This was also my first full-stack app using PostgreSQL and EJS.</label>

              <div class="aboutProject">
              <img src={pic} alt="an image" height="250px"></img>
              </div>

              <div class="aboutProject">
              <img src={picTwo} alt="an image" height="250px"></img>
              </div>
            </div>
        </fieldset>
</form>
            </div>
        )
}

export default Projects


