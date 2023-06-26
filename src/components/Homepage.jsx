import { Link } from 'react-router-dom'
import './pages.css'

export default function Homepage() {
    return(
        <div className="home">
            <div className="mask">
                <img src="https://media.istockphoto.com/id/1267044898/photo/photo-of-a-laptop-on-a-white-desk-with-a-green-plant.jpg?b=1&s=612x612&w=0&k=20&c=A9TGki0BM7LaKCdyqHFZ1qlItiGJJbbiOvTxagwh7Qc=" className="into-img" />
            </div>
            <div className="content">
                <p>HI, I'M A  FULLSTACK DEVELOPER</p>
                <h1>Brian Rogers</h1>
                <div>
                    <Link to='/projects' className='btn'>PROJECTS</Link>
                    <Link to='/about' className='btn btn-light'>ABOUT</Link>
                </div>
            </div>
        </div>
    )
}