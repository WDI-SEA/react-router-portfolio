import React from 'react';

const Project = (props) => {
    return (
        <div className="card">
            <h3>{props.projectData.name}</h3>
            <p>
                <a href={props.projectData.deployUrl} target='_blank'>{props.projectData.deployUrl}</a>
            </p>
            <p>{props.projectData.description}</p>
            <img className="app-screenshot" src={process.env.PUBLIC_URL + props.projectData.screenshotUrl} alt={`screenshot of ${props.projectData.name} app`} />
            <div className="techs">
                <p className="list-label">Technologies Used:</p>
                <ul>
                    {props.projectData.technologies.map(tech => (
                        <li>{tech}</li>
                    ))}
                </ul>
            </div>
            <p>On Github: <a href={props.projectData.gitHubUrl} target='_blank'>{props.projectData.gitHubUrl}</a></p>
            <style jsx>
                {`
                    .techs {
                        width: 100%;
                    }
                    .app-screenshot{
                        display: block;
                        height: 240px;
                        margin: auto;
                    }
                `}
            </style>
        </div>
    )
}

export default Project;