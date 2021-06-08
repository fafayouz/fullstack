import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('token')
  return (
    <>
    {!isLoggedIn && (
      <div className='Nav-menu'>
        <nav className="nav-menu">
          <div className="head-logo">
            <span>Real Estate</span>
          </div>
          <ul>
            
            <li>
              <NavLink exact activeClassName="current" to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="current" to="/About">Présentation</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="current" to="/location">Location</NavLink>
              <ul>
                <li>
                  <NavLink to="/location/Appartement">Appartement</NavLink>
                </li>
                <li>
                  <NavLink to="/location/Villa">Villa</NavLink>
                </li>
                <li>
                  <Link to="">Terrain</Link>
                </li>
                <li>
                  <Link to="">Locaux</Link>
                </li>
                <li>
                  <Link to="">Hangars</Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink exact activeClassName="current" to="/Vente">Vente</NavLink>
              <ul>
                <li>
                  <NavLink to="/Vente/Appartement">Appartement</NavLink>
                </li> 
                <li>
                  <NavLink to="/Vente/Villa">Villa</NavLink>
                </li>
                <li>
                  <Link to="">Terrain</Link>
                </li>
                <li>
                  <Link to="">Locaux</Link>
                </li>
                <li>
                  <Link to="">Hangars</Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink exact activeClassName="current" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )}
    {isLoggedIn &&(
      <div className='Nav-menu'>
      <nav className="nav-menu">
        <div className="head-logo">
          <span>Real Estate</span>
        </div>
        <ul>
          
          <li>
            <NavLink exact activeClassName="current" to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/About">Présentation</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/location">Location</NavLink>
            <ul>
              <li>
                <NavLink to="/location/Appartement">Appartement</NavLink>
              </li>
              <li>
                <NavLink to="/location/Villa">Villa</NavLink>
              </li>
              <li>
                <Link to="">Terrain</Link>
              </li>
              <li>
                <Link to="">Locaux</Link>
              </li>
              <li>
                <Link to="">Hangars</Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/Vente">Vente</NavLink>
            <ul>
              <li>
                <NavLink to="/Vente/Appartement">Appartement</NavLink>
              </li> 
              <li>
                <NavLink to="/Vente/Villa">Villa</NavLink>
              </li>
              <li>
                <Link to="">Terrain</Link>
              </li>
              <li>
                <Link to="">Locaux</Link>
              </li>
              <li>
                <Link to="">Hangars</Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/contact">Contact</NavLink>
          </li>
          <li>
              <NavLink   to="/Admin-dashbord">Admin</NavLink>
            </li>
        </ul>
      </nav>
    </div>
    )}
      
    </>
  )
}

export default Navbar
