import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <main>
                <div className='title'>
                    <h1>About Me</h1>
                </div>
                <div className='main'>
                    <section>
                        <h3>Skills</h3>
                        <p>HTML | CSS | JavaScript | React.js</p>
                        <p>Express | EJS | PostgresQL</p>
                    </section>
                    <section>
                        <h3>Bio</h3>
                        <p>I started my career in the large format printing industry, working at a small sign shop in Salem, MA. After 10 years in the industry,
                            I decided it was time to find something new. I am currently completing the Software Engineering Immersive course with General Assembly.
                            When not working, you can find me fishing, hiking with my dogs, or traveling with my girlfriend.
                        </p>
                    </section>
                </div>
            </main>
        )
    }
}