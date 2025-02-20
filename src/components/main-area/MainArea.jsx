import React from 'react';
import Blank from '../dashboard/Blank';
import PageTitle from '../page-title/PageTitle';
import './mainarea.css';

const MainArea = ({ isExpanded }) => {
  return (
    <main id="main" className="main">
      <PageTitle page="dashboard" />
      <Blank isExpanded={isExpanded} />
    </main>
  );
};

export default MainArea;
