import Project from './Project'

export default function Projects() {

  const projects = [
    {
      title: 'The Great Escape',
      link: 'https://github.com/tylersb/project1'
    },
    {
      title: 'Workout Tracker',
      link: 'https://github.com/tylersb/workout-tracker'
    }
  ]

  return (
    <div>
      <h1>Projects</h1>
      <Project projects={projects} />
    </div>
  )
}
