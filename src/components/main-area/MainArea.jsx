import React from 'react';
import './mainarea.css';
import Dashboard from '../../pages/dashboard/Dashboard';

const MainArea = ({ isExpanded }) => {
  return (
    <main id="main" className="main">
      <Dashboard isExpanded={isExpanded} />
    </main>
  );
};

export default MainArea;
