import {useState} from 'react'
import '../assets/styles/nav.css'

const NavNotice = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }
  return (
    <div>
    <li className='nav-item dropdown' onClick={toggleDropdown}>
      <a href="#" className="nav-item-link nav-item-icon">
        <i className="ph ph-bell"></i>
        <span className="badge badge-number">4</span>
      </a>
     {dropdownOpen && (
       <ul className="dropdown-menu dropdown-open notifications">
       <li className="dropdown-menu-header">
         You have 4 notifications
         <a href='#'>
           <span className="badge">
             View All
           </span>
         </a>
       </li>

       <li>
         <hr className='dropdown-divider' />
       </li>
       <li className="notification-item">
         <i className="ph ph-warning-circle text-warning"></i>
         <div>
           <h4>Lorem İpsum</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <p>30 min. ago</p>
         </div>
       </li>

       <li>
         <hr className='dropdown-divider' />
       </li>
       <li className="notification-item">
         <i className="ph ph-warning-circle text-warning"></i>
         <div>
           <h4>Lorem İpsum</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <p>50 min. ago</p>
         </div>
       </li>

       <li>
         <hr className='dropdown-divider' />
       </li>
       <li className="notification-item">
         <i className="ph ph-warning-circle text-warning"></i>
         <div>
           <h4>Lorem İpsum</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <p>1 hr. ago</p>
         </div>
       </li>

       <li>
         <hr className='dropdown-divider' />
       </li>
       <li className="notification-item">
         <i className="ph ph-warning-circle text-warning"></i>
         <div>
           <h4>Lorem İpsum</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <p>2 hr. ago</p>
         </div>
       </li>

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