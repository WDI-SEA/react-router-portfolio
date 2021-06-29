import headshot from '../images/headshot.jpg'

export const About = () => {
    return (
        <div>
            <h1>About</h1>
            <img src={headshot} alt="headshot" id="headshot"/>
            <p className="about-text">
                Hi! My name's Terry Zhou; I'm a full-stack developer trained at General Assembly in software development. Welcome to my blog!
            </p>
        </div>
    )
}