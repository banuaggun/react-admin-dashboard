import React from 'react';
import Blank from '../dashboard/Blank'
import './mainarea.css';

const MainArea = ({ isExpanded }) => {
  return (
    <main id="main" className="main">
      <Blank isExpanded={isExpanded} />
    </main>
  );
};

export default MainArea;
