import React from 'react'
import '../assets/styles/nav.css'
import NavNotice from './NavNotice'
import NavMessage from './NavMessage'
import NavUser from './NavUser'

function Nav() {
  return (
    <nav>
     
        <NavNotice />
        <NavMessage />
        <NavUser />
    </nav>
  )
}

export default Nav