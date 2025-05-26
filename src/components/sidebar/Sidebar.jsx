import { useEffect, useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  
  const [isExpanded, setIsExpanded] = useState(false)
  const [items, setItems] = useState([])

  const fetchData = async () => {
    try{
      const res = await fetch('../api/info.json');
      const data = await res.json();
      setItems(data.sidebar);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className={isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-nx"}>
      <div className="nav-upper">
        <div className="nav-heading">
          
          <button className={isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"} onClick={() => setIsExpanded(!isExpanded)}>
            <i className={isExpanded ? 'ph-fill ph-caret-left' : 'ph ph-funnel-simple'}></i>
          </button>
        </div>
      </div>
      <div className="nav-menu">
        {items.map(({id, icon, text}) => (
          <Link to={text} key={id} className={isExpanded ? "menu-item" : "menu-item menu-item-nx"}>
            <i className={icon}></i>
            {isExpanded && <span>{text}</span>}
            {!isExpanded && <p>{text}</p>}
          </Link>
        ))}
      </div>
    </div>

    </>
  )
}

export default Sidebar