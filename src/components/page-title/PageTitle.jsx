import React from 'react'
import './pagetitle.css'

const PageTitle = ({page}) => {
  return (
    <div className='page-title'>
      <h1>{page}</h1>
        <ol className='breadcrumb'>
          <li className="breadcrumb-item">
            <a>
              <i className='ph-fill ph-house'></i>
              </a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li className="breadcrumb-item active">
            {page}
          </li>
        </ol>
    </div>
  )
}

export default PageTitle