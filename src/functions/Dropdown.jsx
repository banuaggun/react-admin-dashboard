import React, { useState, useEffect, useRef } from 'react';
import './dropdown.css';

const Dropdown = ({ icon, items }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="icon" onClick={toggleDropdown}>
        {icon}
      </div>
      {dropdownOpen && (
        <div className="dropdown-menu">
          <ul>
            {items.map((item, index) => (
              <li key={index}> 
                <h4>{item.title || item.sender}</h4> 
                <p>{item.text || item.content}</p> 
                {item.time && <small>{item.time}</small>} 
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
