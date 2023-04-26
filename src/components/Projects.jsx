

export default function Projects() {
    return(
        <>
        <h1>Projects</h1>
        <div className='projectContainer'>
            <h2><a href='https://powwow84.github.io/project-1/' className='link'>Runner</a></h2>
            <h3>Runner is a 2d survival maze where the user needs to find the exit before the time runs out. There are traps and time extensions. All the player needs to do is survive!</h3>
            <div>
            <img src='https://i.imgur.com/r6gEhA3.png' className='projectImages'/>
            <img  src='https://i.imgur.com/VGfksGL.png' className='projectImages'/>
            </div>
            <div className='projectInfo'>
            <li>Built with JavaScript, HTML, CSS, and Canvas</li>
            <li> learned how to render a 2 dimensional maze game in canvas using loops and 2d arrays with JavaScript
            </li>
            <li>Created Boundaries, difficulties, and animations with JavaScript </li>
            <li>Polished the app and enhanced user experience with the addition of music files and smoother transitions with JavaScript and CSS</li>
            </div>
        </div>
        <div className='projectContainer'>
            <h2><a href='https://finda.herokuapp.com/users/bucketlists' className='link'>Finda</a></h2>
            <h3>Join Finda! The newest social media app for people who love to fish. Share photos, share stories, share your experiences that you wqont forget</h3>
            <div>
            <img src='https://i.imgur.com/QnKz8W8.png' className='projectImages'/>
            <img  src='https://i.imgur.com/Hf0O8iX.png' className='projectImages'/>
            </div>
            <div className='projectInfo'>
            <li>Built with Node.js leveraging several libraries such as Express, Axios, CryptoJs, Postgres, Sequelize, UploadCare and many others.</li>
            <li> Included the use of third party API’s to seed data tables and enhance user experience.
            </li>
            <li>Styled with CSS and secured with User authentication the user has a great social media experience.</li>
            <li>The user can upload post and images, see other users post and even add to their own bucket list</li>
            </div>
        </div>
        </>
    )
}