import React, { Component} from 'react'

class Home extends Component{
    render(){
        return(
            <div className="homepage">
                <h1>Hello!</h1> 
                    <h2>Welcome to my Portfolio</h2>
                <img className="helloImg" src="https://img.freepik.com/free-vector/word-hello-speech-bubble-vector_53876-60258.jpg?size=626&ext=jpg" />
            </div>
        )
    }
}

export default Home