import React, { Component } from 'react'

class About extends Component {
    render () {
        return (
            <div className="pageDiv">
                <h1 className="pageTitle">Bob the Buthcher</h1>
                <div className="post" id="aboutMe">
                    <h3 className="postTitle">TLDR: A meatlover from my first bite, I have turned my passion into a career.</h3>
                    <p className="postText" style={{fontSize: 30, fontWeight: 'normal' }}>Bacon ipsum dolor amet shank tri-tip tenderloin, brisket shoulder doner pork chop prosciutto cow kielbasa landjaeger ball tip. Ball tip pastrami alcatra pancetta sirloin shankle. Pork chop ribeye fatback turkey. Kielbasa swine strip steak biltong sausage tongue</p>
                </div>
            </div>
        )
    }
}

export default About