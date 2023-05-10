import "./Footer.css"
import githubicon from "../assets/githubicon.jpg"

export default function Footer() {

    const githubUrl = "https://github.com/Dxk0ta"
    return (
        <>
            <div className="footer-container">
                <div className="footer-discription">
                    Dakota Campbell's Github
                </div>

                <div className="githubicon">
                    <a href="https://github.com/Dxk0ta" target="_blank" rel="noopener noreferrer">
                        <img src={githubicon} alt="github icon" />
                    </a>
                </div>
            </div>
        </>
    )
}