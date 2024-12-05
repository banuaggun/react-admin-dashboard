import React from 'react'
import './header.css'
import Logo from '../logo/Logo'
import Nav from '../nav/Nav'
import Sidebar from '../sidebar/Sidebar'

function Header() {
  return (
    <header id='header' className='header'>
       <div>
        <Sidebar />
      </div>

      <div className="header-mobile-area">
        <div>
          <Logo />
        </div>

        <div>
          <Nav />
        </div>
      </div>

      <div className="header-tablet-area">
        <div className='left'>
          <Logo />
        </div>
        
        <div className='right'>
          <Nav />
        </div>
      </div>
      
     
    </header>
  )
}

export default Header