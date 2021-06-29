import './Homepage.css';

import {Link} from 'react-router-dom'

export default function Homepage(){
    return(
        <div>
           <h2>Hello I'm Jackie 🙋‍♀️ I'm a web developer</h2>
        
           <p>Have a webpage idea? Let me help you bring your design to life</p>
            <button>
                <Link to='/projects' className='btn-link'>Check out my work</Link>
            </button>
        </div>
    )
}