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
      <div className="dropdown-icon" onClick={toggleDropdown}>
        {icon}
      </div>
      {dropdownOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <div className="dropdown-item" onClick={item.onClick}>
                <div className="dropdown-item-customer">

                  <p>
                    {item.name && <p>{item.name}</p>}
                  </p>

                  <h4>
                    {item.title && <p>{item.title}</p>}
                  </h4>
                  <p>
                    {item.text && <p>{item.text}</p>}
                  </p>
                  <p>
                    {item.time && <small>{item.time}</small>}
                  </p>

                  <h4>
                    {item.sender && <p>{item.sender}</p>}
                  </h4>
                  <p>
                    {item.content && <p>{item.content}</p>}
                  </p>
                 </div>
                
                  
                 
                 
                 
                 
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
