


const Projects = (props) => {
    const projects = props.posts.map((post, idx) => {
        return (
            <ul>
                key={`data${idx}`}
                projects={post}
            </ul>
        )
    })
    return ( 
        <>
        <h1>Blog</h1>

        {props.posts.projects}
        </>
     )
}
 
export default Projects;