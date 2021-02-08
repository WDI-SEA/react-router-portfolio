import React, { Component } from 'react'

class Projects extends Component{
    render(){
        return(
            <div className="myInformation">
                {this.props.infos.map((info,i)=>{
                    return <div > 
                        <h3><a href={info.url}>{info.name}</a></h3>
                        <p>{info.description}</p>
                        {console.log("ehllo")}
                        {console.log(info.images[0])}
                        
                        
                    </div>
                })}
            </div>
        )
    }
}

export default Projects