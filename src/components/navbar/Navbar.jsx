import React from 'react'
import './navbar.css'
import Navmessage from './Navmessage'
import Navlogo from './Navlogo'
import Navnotice from './Navnotice'
import Navuser from './Navuser'

const Topbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <Navlogo />
      </div>
      <div className="navbar-right">
        <Navnotice />
        <Navmessage />
        <Navuser />
      </div>
    </nav>
  )
}

export default Topbar