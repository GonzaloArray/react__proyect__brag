import { useLocation, Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid container">
                <a className="navbar-brand fw-bold text-white fs-4" href="#">Brag</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 d-md-flex gap-md-3 ">
                        <li className="nav-item">
                            <Link className={`${location.pathname === '/' ? 'text-primary' : 'text-white'} `} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${location.pathname === '/dashboard' ? 'text-primary' : 'text-white'} `} to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${location.pathname === '/contacto' ? 'text-primary' : 'text-white'} `} to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
