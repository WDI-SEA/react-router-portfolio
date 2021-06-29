// import css
import './Projects.css'
import Carousel from 'react-bootstrap/Carousel'

// import images
import spellbook from '../images/project_spellbook.jpg'
import checkers from '../images/project_checkers.jpg'

export default function Projects() {
    return (
        <Carousel className="project-carousel mt-3" fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={spellbook}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3><a href="https://spellbook-project.herokuapp.com/">Spellbook</a></h3>
                    <p>
                        Full-stack application utilizing Node.js, Express, PostgreSQL, Sequelize, EJS, and Bootstrap.
                        <a href="https://github.com/Consecratio/project-2-spellbook"> GitHub</a>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={checkers}
                alt="Second slide"
                />

                <Carousel.Caption>
                    <h3><a href="https://consecratio.github.io/Checkers/">Checkers</a></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <a href="https://github.com/Consecratio/Checkers"> GitHub</a>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}