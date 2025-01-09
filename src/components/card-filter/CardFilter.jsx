import React from 'react'
import Dropdown from '../../functions/Dropdown'
import data from '../../data/data.json'

const CardFilter = () => {
  console.log(data.filters); // Bu satırı ekleyin
  return (
    
    <div className='filter'>
      <Dropdown
                icon={
                    <div className="icon-container">
                        <i className="ph ph-bell"></i>
                    </div>
                }
                items={data.filters.map((filter) => ({
                  name: filter.name
                }))}
            />
     
   
    </div>
  )
}

export default CardFilter