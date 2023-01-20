export default function Project(props) {
  const projects = props.projects.map((project, index) => {
    return (
      <div key={index}>
        <h2>{project.title}</h2>
        <a href={project.link}>Github Link</a>
      </div>
    )
  })

  return (
    <div>
      {projects}
    </div>
  )
}
