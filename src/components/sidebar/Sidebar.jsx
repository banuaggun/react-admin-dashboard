import { useState } from 'react'
import './sidebar.css'
import data from '../../data/data.json'

const Sidebar = () => {
  
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
    <div className={isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-nx"}>
      <div className="nav-upper">
        <div className="nav-heading">
          
          <button className={isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"} onClick={() => setIsExpanded(!isExpanded)}>
            <i className={isExpanded ? 'ph ph-funnel-simple' : 'ph ph-door'}></i>
          </button>
        </div>
      </div>
      <div className="nav-menu">
        {data.sidebar.map(({id, icon, text}) => (
          <a href={id} className={isExpanded ? "menu-item" : "menu-item menu-item-nx"}>
            <i className={icon}></i>
            {isExpanded && <span>{text}</span>}
            {!isExpanded && <p>{text}</p>}
          </a>
        ))}
      </div>
    </div>
    <div className="nav-footer">
      
    </div>
    </>
  )
}

export default Sidebar