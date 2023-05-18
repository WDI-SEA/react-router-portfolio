import "./Footer.css"
import githubicon from "../assets/githubicon.jpg"
import linkedinicon from "../assets/linkedinbtn.png"

export default function Footer() {

    const githubUrl = "https://github.com/Dxk0ta"
    return (
        <>
            <div className="footer-container">
                <div className="footer-discription">
                    Dakotas Github
                </div>

                <div className="githubicon">
                    <a href="https://github.com/Dxk0ta" target="_blank" rel="noopener noreferrer">
                        <img src={githubicon} alt="github icon" />
                    </a>
                </div>

                <div className="footer-discription2">
                    Dakotas LinkedIn
                </div>

                <div className="linkedinicon">
                    <a href="https://www.linkedin.com/in/dxk0ta/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinicon} alt="linkedin icon" />
                    </a>
                </div>
            </div>
        </>
    )
}