import React, { useState, useEffect, useRef } from 'react';
import './sidebar.css';

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
          <li>
            <i className='ph ph-door'></i>
            <span>Dashboard</span>  
          </li> 
          <li>
            <i className='ph ph-door'></i>
            <span>Dashboard</span>   
          </li> 
          <li>
            <i className='ph ph-door'></i>
            <span>Dashboard</span> 
          </li> 
          <li>
              <i className='ph ph-door'></i>
            <span>Dashboard</span>   
          </li> 
        </ul> 
      </div> 
    </div> 
  ); 
};

export default Sidebar
