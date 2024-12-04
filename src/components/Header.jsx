import React from 'react'
import '../assets/styles/header.css'
import Logo from './Logo'
import Nav from './Nav'
import Sidebar from './Sidebar'

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