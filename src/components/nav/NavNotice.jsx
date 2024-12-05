import React from 'react'
import Dropdown from '../../functions/Dropdown'
import data from '../../data/data.json'

const NavNotice = () => {
  return (
    <div>
  <Dropdown icon={<i className="ph ph-bell"></i>} items={data.notifications.map(notification => ({ title: notification.title, text: notification.text, time: notification.time }))} />
    
    </div>
  )
}

export default NavNotice