import {useState} from 'react'
import data from '../data/data.json'
import '../assets/styles/nav.css'
import { useRef } from 'react'
import { useEffect } from 'react'

const NavNotice = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleClickOutside = (event) => {
    if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
      setDropdownOpen(false);
    }
  }
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
    <li className='nav-item dropdown' onClick={toggleDropdown} ref={dropdownRef}>
      <a href="#" className="nav-item-link nav-item-icon">
        <i className="ph ph-bell"></i>
        <span className="badge badge-number">4</span>
      </a>
     {dropdownOpen && (
       <ul className="dropdown-menu dropdown-open notifications">
         {data.notifications.map(notification => (
           <li key={notification.id}>
             <h4>{notification.title}</h4>
             <p>{notification.text}</p>
             <p>{notification.time}</p>
             <hr/>
            </li>
         ))}
      


       <li>
         <hr className='dropdown-divider' />
       </li>

       <li className="dropdown-footer">
         <a href='#'>Show All Notifications</a>
       </li>


     </ul>
     )}
    </li>

    
    </div>
  )
}

export default NavNotice