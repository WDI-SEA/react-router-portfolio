export default function Portfolio(props) {
  const renderProjects = props.projects.map((project, index) => {
    console.log(props.projects)
    return (
      
      <div key={`project-${index}`}>
        <h3 key={`title-${index}`}>{project.title}</h3>
        <p key={`paragraph-${index}`}>{project.content}</p>
      </div>
    )
  })
  return (
    <div>
      <h1>Portfolio Page 🌊</h1>
      {renderProjects}
    </div>
  )
}

