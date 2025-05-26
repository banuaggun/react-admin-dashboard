import React, { useState } from 'react';
import './App.css';
import MainArea from './components/main-area/MainArea';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Customers from './pages/customers/Customers';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="content-header">
        <Navbar/>
      </div>
      
      <BrowserRouter>
        <Routes className='area'>
          <Route path='/' element={<MainArea isExpanded={isExpanded}/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='customers' element={<Customers/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
