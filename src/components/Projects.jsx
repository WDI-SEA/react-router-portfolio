// import css
import './Projects.css'

// import images
import spellbook from '../images/project_spellbook.jpg'
import checkers from '../images/project_checkers.jpg'

export default function Projects() {
    return (
        <div>
            <ul>
                <li>
                    <h6><a href="https://spellbook-project.herokuapp.com/">Spellbook</a></h6>
                    <p><a href="https://github.com/Consecratio/project-2-spellbook">GitHub</a></p>
                    <img src={spellbook} className="image" alt="spellbook app" />
                </li>
                <li>
                    <h6><a href="https://consecratio.github.io/Checkers/">Checkers</a></h6>
                    <p><a href="https://github.com/Consecratio/Checkers">GitHub</a></p>
                    <img src={checkers} className="image" alt="checkers app" />
                </li>
            </ul>
        </div>
    )
}