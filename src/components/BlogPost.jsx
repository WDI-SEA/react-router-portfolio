export default function BlogPost(props){
    if(!props.name) return <h3> {`Hmm I have never heard of a service called ${props.match.params.id} before 🤔`}</h3>
    return(
        <div>
            <h3>{props.name}</h3>
            <h5>${props.body}</h5>
            
        </div>
    )
}