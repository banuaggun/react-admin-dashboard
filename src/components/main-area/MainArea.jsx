import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import PageTitle from '../page-title/PageTitle'
import './mainarea.css'

const MainArea = () => {
  return (
    <main  id='main' className='main'>
      <PageTitle page="dashboard"/>
      <Dashboard />
    </main>
  )
}

export default MainArea