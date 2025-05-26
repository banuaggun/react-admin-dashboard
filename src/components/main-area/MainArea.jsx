import React, { useState } from 'react';
import './mainarea.css';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const MainArea = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

   console.log("MainArea isExpanded:", isExpanded);
  return (
    <main id="main" className="main">
       <div className="content-header">
        <Navbar />
      </div>
      <div className="area">
        <div className="content-sidebar">
          <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
        </div>
        <div className={isExpanded ? "content-main" : "content-main-out"}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default MainArea;
