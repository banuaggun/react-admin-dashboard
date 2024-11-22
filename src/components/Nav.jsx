import React from 'react'
import '../assets/styles/nav.css'
import NavNotice from './NavNotice'
import NavMessage from './NavMessage'
import NavUser from './NavUser'
import Sidebar from './Sidebar'

function Nav() {
  return (
    <nav>
      <div className='nav-left'>
        <Sidebar/>
      </div>
      <div className='nav-right'>
        <NavNotice />
        <NavMessage />
        <NavUser />
      </div>
    </nav>
  )
}

export default Nav