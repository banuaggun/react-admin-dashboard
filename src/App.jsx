import React from 'react'
import Header from './components/header/Header'
import './App.css'
import MainArea from './components/main-area/MainArea'
import Sidebar from './components/sidebar/Sidebar'

function App({isExpanded}) {

  return (
    <>
     <div className="content-header">
      <Header />
     </div>
     <div className="area">
      <div className="content-sidebar">
          <Sidebar/>
        </div>
        <div className={isExpanded ? "content-main" : "content-main-out"}>
          <MainArea/>
        </div>
     </div>
      
      
    </>
  )
}

export default App
