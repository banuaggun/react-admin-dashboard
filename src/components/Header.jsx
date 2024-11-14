import React from 'react'
import '../assets/styles/header.css'
import Logo from './Logo'

function Header() {
  return (
    <header id='header' className='header'>
      {/* Logo Area */}
      <Logo />
    </header>
  )
}

export default Header