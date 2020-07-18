import React from 'react';
import Project from './Project.js'

const Projects = () => {
    const projectsData = [
        {
            name: "Coop Accounts",
            description: "An app to keep track of coop shareholder HOA accounts",
            technologies: ["Node", "Postgresql", "Sequelize", "Express", "EJS", "CSS", "Bootstrap 4.5"],
            screenshotUrl: "/images/coopAccSS.png",
            deployUrl: "https://coop-accounts.herokuapp.com",
            gitHubUrl: "https://github.com/fussypuppet/p2_coop_accounts",
        },
        {
            name: "Oh No!",
            description: "A game inspired by Rogue",
            technologies: ["Javascript", "HTML", "CSS Grid"],
            screenshotUrl: "/images/ohNoSS.png",
            deployUrl: "https://fussypuppet.github.io/project_1",
            gitHubUrl: "https://github.com/fussypuppet/project_1"
        }
    ];
    return (
        <div>
            <h2>Projects</h2>
            {projectsData.map(project => (
                <Project projectData={project} />
            ))}
        </div>
    )
}

export default Projects;