import React from 'react'
import '../assets/styles/header.css'
import Logo from './Logo'
import SearchBar from './SearchBar'

function Header() {
  return (
    <header id='header' className='header'>
      {/* Logo Area */}
      <Logo />
      {/* Search Bar Area */}
      <SearchBar/>
    </header>
  )
}

export default Header