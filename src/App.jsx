import React, { useState } from 'react';
import Header from './components/header/Header';
import './App.css';
import MainArea from './components/main-area/MainArea';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="content-header">
        <Header />
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
