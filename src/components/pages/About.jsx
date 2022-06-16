import Pdf from '../resume.pdf'

export default function About() {
    return (
        <div className="about-container">
            <h1>About</h1>
            <p><strong>Interests:</strong> Walks, Interesting Scents, Toys, Treats</p>
            <p><strong>Dislikes:</strong> Fireworks, Mailman</p>
            <a href = {Pdf} target = "_blank">Resume Download</a>
            <hr></hr>
            <h2>Photos</h2>
            <div className="photos-container">
                
                <div className='photo-container'>
                    <img src='https://i.imgur.com/txNitpz.jpg'></img>
                </div>
                <div className='photo-container'>
                    <img src='https://i.imgur.com/uBkkRhb.jpg'></img>
                </div>
                <div className='photo-container'>
                    <img src='https://i.imgur.com/ieXauI5.jpg'></img>
                </div>
                <div className='photo-container'>
                    <img src='https://i.imgur.com/vOhKbKJ.jpg'></img>
                </div>
            </div>
        </div>
    )
}