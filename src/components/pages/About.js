import React, { Component } from 'react'

class About extends Component{
    render(){
        return(
            <>
                <div className="myInformation">
                    <img src={require('../../images/linkdin1.jpg').default} width={100} height={100}/>
                    <h1>Yasaman Forouzesh</h1>
                    <h5>Los Angeles. (818)213-3350 . yasamanforouzesh93@gmail.com</h5>
                    <p>I am a full stack developer who is creative and a quick problem solver.
                     My strong communication skills were developed as a computer science tutor, 
                     and I believe in the value of teamwork to find solutions quickly and to 
                     complete projects on time. The difficulty of a challenge inspires me to 
                     find the best solutions. I love errors and obstacles because of the energy 
                     and satisfaction I feel when I solve them.</p>
                </div>
            </>
        )
    }
}

export default About