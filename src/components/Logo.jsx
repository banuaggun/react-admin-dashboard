import React from 'react'
import '../assets/styles/logo.css'

function Logo() {

  const handleToggleSidebar = () => {
    document.body.classList.toggle('toggle-sidebar')
  }
  return (
    <div className='logo-area'>
      <a href='/' className="logo-area-content">
        {/* <img src="" alt="" />*/}
        <i className="ph ph-diamonds-four"></i>
        <span>Admin Dashboard</span>
      </a>
      <i className='ph ph-funnel-simple toggle-sidebar-btn' onClick={handleToggleSidebar}></i>
    </div>
  )
}

export default Logo