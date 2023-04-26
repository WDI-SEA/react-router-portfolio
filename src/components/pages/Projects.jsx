function Projects(props) {
    const allProjects = props.projectData.map(project => (
        <div class="container">
			<article class="card">
				<div class="card-img">
					<img src={project.imageUrl} alt={`Screenshot of ${project.title}`} />
				</div>
				<div class="card-info">
					<h2 class="card-title">{project.title}</h2>
					<span class="card-subtitle">{project.tech}</span>
					<p class="card-description">{project.info}</p>
					<a href={project.repoUrl} target="_blank" class="card-footer" rel="noreferrer"> GitHub Repo <span>&rarr;</span> </a>
					<a href={project.demoUrl} target="_blank" class="card-footer" rel="noreferrer"> Live Demo <span>&rarr;</span> </a>
				</div>
			</article>
		</div>

    ))

    return (
        <div className="container">
            <h1>Projects</h1>

            {allProjects}
        </div>
    );
}

export default Projects;