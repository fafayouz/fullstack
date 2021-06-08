import React from 'react'
import './Navbar.css'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const NavbarMobile = () => {
  const [burgershow, setBurgershow] = useState(true)
  const [burgerclose, setBurerclose] = useState(false)

  const show = () => {
    setBurerclose(true)
    setBurgershow(false)
  }
  const hide = () => {
    setBurerclose(false)
    setBurgershow(true)
  }
  return (
    <>
      <div className="Navbar-Container-Mobile">
        <div className="Navbar-Container-Logo">
          <span>LOGO</span>
        </div>
        {burgershow && (
          <div onClick={show} className="Navbar-Container-Burger">
            <MenuRoundedIcon fontSize="large" />
          </div>
        )}
        {burgerclose && (
          <div onClick={hide} className="Navbar-Container-Burger">
            <CloseRoundedIcon fontSize="large" />
          </div>
        )}
      </div>
      {!burgershow ? (
        <div className="Navbar-drop-mobile">
          <div className="nav-menu-mobile">
              <div>
                <Link to='' > Accueil </Link>
              </div>
              <div>
              <Link to='/vendre'> Vendre </Link>
              </div>
              <div>
              <Link to='/location'> Location </Link>
              </div>
              <div >
              <Link to='/contact'> Contact </Link>
              </div>
          </div>
        </div>
      ) : (
        <div className="Navbar-drop-mobile active"></div>
      )}
    </>
  )
}

export default NavbarMobile
