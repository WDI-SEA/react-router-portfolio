import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Nave from './partials/Nave'
class Home extends Component{
    render(){
        return(
            <div  className="myInformation">
               <h1>Welcome to my portfolio you can access to each part of my portfolio by the link on the left side.</h1>
               <form>
                   <p>If you have any feedbakc please let me know</p>
                   <input type="text" placeholder="YOur feedback" id="editBox"></input>
                   <br/>
                   <button type="button">Submit</button>
               </form>
            </div>
        )
    }
}

export default Home