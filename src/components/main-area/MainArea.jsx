import React from 'react'
import Blank from '../dashboard/Blank'
import PageTitle from '../page-title/PageTitle'
import './mainarea.css'

const MainArea = () => {
  return (
    <main  id='main' className='main'>
      <PageTitle page="dashboard"/>
      <Blank/>
    </main>
  )
}

export default MainArea