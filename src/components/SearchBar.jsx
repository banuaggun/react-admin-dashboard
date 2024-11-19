import React from 'react'
import '../assets/styles/search-bar.css'

function SearchBar() {
  return (
    <div className='search-bar'>
      <form action='#' method='POST' className='search-bar-form'>
        <input type='text' name='query' placeholder='Search' title='Enter search keyword' />
        <button type='submit' title='Search'>
        <i className="ph ph-magnifying-glass"></i> 
        </button>
      </form>
    </div>
  )
}

export default SearchBar