import React from 'react'
import Dropdown from  '../functions/Dropdown'
import data from '../data/data.json'

function NavMessage() {
  return (

    <div>
      <Dropdown icon={<i className="ph ph-chat"></i>} items={data.messages.map(message => ({ title: message.sender, text: message.content, time: message.time }))} />
    </div>
  )
}

export default NavMessage