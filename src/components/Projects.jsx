export default function Projects(props) {
  const projects = props.projects.map((project, index) => {
    return (
        <div key={`project-${index}`}>
          <h3 key={`title-${index}`}> { project.title } </h3>
          <p key={`paragraph-${index}`}> { project.content } </p>
        </div>
      )
    }) 
  return (
    <div>
      <h1>Projects</h1>
      { projects }
    </div>
  )
}