import React from 'react'
import './nav.css'
import NavNotice from './NavNotice'
import NavMessage from './NavMessage'
import NavUser from './NavUser'
import Navlogo from './NavLogo'

function Nav() {
  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <Navlogo/>
      </div>
      <div className="navbar-right">
        <NavNotice />
        <NavMessage />
        <NavUser />
      </div>
        
    </nav>
  )
}

export default Nav