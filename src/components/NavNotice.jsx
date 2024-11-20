import React from 'react'
import Dropdown from '../functions/Dropdown'
import data from '../data/data.json'
import '../assets/styles/nav.css'

const NavNotice = () => {
  return (
    <div>
  <Dropdown icon={<i className="ph ph-bell"></i>} items={data.notifications.map(notification => ({ title: notification.title, text: notification.text, time: notification.time }))} />
    
    </div>
  )
}

export default NavNotice