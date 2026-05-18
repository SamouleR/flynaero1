import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Equipe.css'; // Reusing the css that has the .navbar-equipe styling

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    return (
        <nav className="navbar-equipe">
            <div className="nav-logo">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <img src="/logo.png" alt="Flynaero" style={{ height: '50px', objectFit: 'contain' }} />
                </Link>
            </div>

            <ul className={`nav-links ${navActive ? 'active' : ''}`} id="navLinks">
                <li className="nav-item"><Link to="/">Accueil</Link></li>

                <li className="nav-item">
                    <Link to="/equipe">Entreprise</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/histoire">Notre histoire</Link></li>
                        <li><Link to="/equipe">Équipe</Link></li>
                        <li><Link to="/actualites">Actualités</Link></li>
                        <li><a href="#">Objectifs</a></li>
                        <li><a href="#">Bureau d'études</a></li>
                    </ul>
                </li>

                <li className="nav-item">
                    <a href="#">Nos Technologies</a>
                    <ul className="dropdown-menu">
                        <li><Link to="/dpsm">La méthode DPSM</Link></li>
                        <li><a href="#">Notre logiciel</a></li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/partenaires">Partenariats</Link></li>
                        <li><a href="#">Recrutement</a></li>
                        <li><Link to="/contact">Mon projet avec Flynaero</Link></li>
                    </ul>
                </li>
            </ul>

            <div className="hamburger" id="hamburger" onClick={toggleNav}>
                <span></span><span></span><span></span>
            </div>
        </nav>
    );
};

export default Navbar;