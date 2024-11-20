import React from 'react'
import '../assets/styles/nav.css'
import NavNotice from './NavNotice'
import NavMessage from './NavMessage'
import NavAvatar from './NavAvatar'

function Nav() {
  return (
    <nav>
      <ul>
        <NavNotice />
        <NavMessage />
        <NavAvatar />
      </ul>
    </nav>
  )
}

export default Nav