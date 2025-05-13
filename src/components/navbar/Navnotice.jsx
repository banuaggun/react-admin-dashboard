import React, { useEffect, useState } from "react";
import Dropdown from "../../functions/dropdown/Dropdown";
import './navbar.css';

function Navnotice() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch("/api/info.json")
      .then((response) => response.json())
      .then((data) => setNotices(data.notices))
      .catch((error) => console.error("Error fetching notices data:", error));
  }, []);

  return (
    <div className="navbar-notice">
      <Dropdown 
        icon={
          <div className="icon-container">
            <i className="ph-fill ph-bell"></i>
            <span className="badge badge-notice">4</span>
          </div>
        }
        items={notices.map((notice) => ({
          title: notice.title,
          text: notice.text,
          time: notice.time,
        }))}
      />
    </div>
  );
}

export default Navnotice;
