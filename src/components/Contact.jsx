import './pages.css'

export default function Contact() {
    return(
        <div>

        <div className='hero-img'>
            <div className='heading'>
                <h1>Contact</h1>
            </div>
        </div>

        <div className='form'>
            <form action="">
                <label>Your Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="text" />
                <label>Subject</label>
                <input type="text" />
                <label>Message</label>
                <textarea rows="6" placeholder='your message here'></textarea>
                <button className='btn'>Submit</button>
            </form>
        </div>

        </div>
    )
}