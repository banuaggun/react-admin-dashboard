import { useState } from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import useFetchData from "../../functions/hooks/FetchData"; // Hook'u import et

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data: items, loading, error } = useFetchData("/api/info.json"); // Hook'u kullan
  const location = useLocation(); // Mevcut URL'yi al

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-nx"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <i
              className={
                isExpanded ? "ph-fill ph-caret-left" : "ph ph-funnel-simple"
              }
            ></i>
          </button>
        </div>
      </div>
      <div className="nav-menu">
        {items?.sidebar?.map(({ id, icon, text }) => (
          <Link
            to={`/${text}`}
            key={id}
            className={`menu-item ${isExpanded ? "" : "menu-item-nx"} 
              ${
                location.pathname === `/${text}` ||
                (location.pathname === "/" &&
                  text.toLowerCase().includes("dashboard"))
                  ? "active"
                  : ""
              }`}
          >
            <i className={icon}></i>
            {isExpanded && <span>{text}</span>}
            {!isExpanded && <p>{text}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;