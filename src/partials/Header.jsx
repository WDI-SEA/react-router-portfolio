import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
           <div class="container-fluid">
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <ul class="navbar-nav">
                <li class="nav-item"><Link to='/' class="nav-link">Home</Link></li>
                <li class="nav-item"><Link to='/about' class="nav-link">About</Link></li>
                <li class="nav-item"><Link to='/blog' class="nav-link">Blog</Link></li>
                <li class="nav-item"><Link to='/projects' class="nav-link">Projects</Link></li>
            </ul>
            </div> 
        </nav>
    )
}