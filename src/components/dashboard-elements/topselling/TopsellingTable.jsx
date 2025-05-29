import React from 'react';
import './topsellingtable.css';

const TopsellingTable = ({items}) => {
  return (
    <table className='top-selling-table'>
        <thead className='top-selling-table-header'>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Price</th>
                <th scope='col'>Sold</th>
            </tr>
        </thead>
        <tbody>
            {items?.length > 0 && items.map((item) => (
                <tr key={item.id}>
               
                    <td data-label="name" scope='row'>
                        {item?.name}
                    </td>
                    <td data-label="price" scope='row'>
                        ${item?.price.toFixed(2)}
                    </td>
                    <td data-label="sold" scope='row'>
                        ${(item?.price * item?.sold).toLocaleString('en-US')} 
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default TopsellingTable