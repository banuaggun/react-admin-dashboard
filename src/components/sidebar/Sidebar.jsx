import React, { useState, useEffect, useRef } from 'react';
import './sidebar2.css';
import './close.css';
import './open.css';
import './tooltip.css';
import data from '../../data/data.json'

const Sidebar = () => { 
  
  const [isOpen, setIsOpen] = useState(false); 
  const sidebarRef = useRef(null); 
  
  const toggleSidebar = () => { setIsOpen(!isOpen); };
  
  const handleClickOutside = (event) => { 
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) { 
      setIsOpen(false); 
    } 
  }; 
  
  useEffect(() => { 
    document.addEventListener('mousedown', handleClickOutside); 
    return () => { 
      document.removeEventListener('mousedown', handleClickOutside); 
    }; 
  }, []); 
  
  return ( 
    <div className="sidebar-container"> 
      <button className="toggle-button" onClick={toggleSidebar} ref={sidebarRef}> 
        <i className='ph ph-funnel-simple'></i> 
      </button> 
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}> 
        <ul> 
          {data.sidebar.map(item => ( 
            <li key={item.id}> 
            <a href={item.id}>
                <i className={item.icon}></i> 
                <div className="tooltip">
                <span className="tooltiptext">{item.text}</span>
                </div>
                
              <span>{item.text}</span> 
              </a>
            </li> 
          ))}
          
        </ul> 
      </div> 
    </div> 
  ); 
};

export default Sidebar
