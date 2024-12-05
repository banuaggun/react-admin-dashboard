import React from 'react'
import Dropdown from '../../functions/Dropdown'
import data from '../../data/data.json'

function NavAvatar() {
  return (
    <div>
      <Dropdown icon={<i className="ph ph-user"></i>} items={[{ title: 'Name', text: data.userInfo.name }, { title: 'Email', text: data.userInfo.email }]} />
    </div>
  )
}

export default NavAvatar