import React, { useState } from 'react';
import './App.css';
import MainArea from './components/main-area/MainArea';
import Sidebar from './components/sidebar/Sidebar';
import Nav from './components/nav/Nav';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="content-header">
        <Nav/>
      </div>
      <div className="area">
        <div className="content-sidebar">
          <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
        </div>
        <div className={isExpanded ? "content-main" : "content-main-out"}>
          <MainArea isExpanded={isExpanded} />
        </div>
      </div>
    </>
  );
}

export default App;
