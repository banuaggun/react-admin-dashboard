import React from 'react'
import './topsellingitem.css'

const TopSellingItem = ({items}) => {
  return (
    <table className="top-selling-table">
      <thead className='top-selling-table-header'>
        <tr>
          <th scope='col'>Preview</th>
          <th scope='col'>Product</th>
          <th scope='col'>Price</th>
          <th scope='col'>Sold</th>
          <th scope='col'>Revenue</th>
        </tr>
      </thead>
      <tbody>
      {items && items.length > 0 && items.map((item) => (
        <tr key={item.id}>
          <th scope='row'>
          <a href='#'>
            <img className='top-selling-img' src={item.preview} alt="" />
          </a>
          </th>
          <td data-label="product" scope='row'>
            <a href='#' className='text-primary fw-bold'>
              {item.name}
            </a>
          </td>
          <td data-label="price" scope='row'>
            ${item.price.toFixed(2)}
          </td>
          <td data-label="sold" scope='row' className="fw-bold">
            {item.sold}
          </td>
          <td data-label="revenue" scope='row'>
            ${(item.price * item.sold).toLocaleString('en-US')}  
          </td>
        </tr>
      ))}
      </tbody>
    </table>

  )
}

export default TopSellingItem