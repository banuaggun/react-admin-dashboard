import React from 'react'
import Header from './components/header/Header'
import './App.css'
import MainArea from './components/main-area/MainArea'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <>
     <div className="content-header">
      <Header />
     </div>
     <div className="area">
      <div className="content-sidebar">
          <Sidebar/>
        </div>
        <div className="content-main">
          <MainArea/>
        </div>
     </div>
      
      
    </>
  )
}

export default App
