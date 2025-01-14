import React from 'react'
import './recentsales.css'

const RecentSalesTable = ({items}) => {
  const handleStatus = status => {
    switch(status){
      case 'Approved':
      return 'success';
      break;
      case 'Pending':
      return 'warning';
      break;
      case 'Rejected':
      return 'danger';
      break;
      default:
        return 'success';
    }
  };
  return (
    <table className='table table-borderless datatable overflow-auto'>
      <thead className='table-light'>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Customer</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
         {items && items.length > 0 && items.map(item => (
           <tr key={item.id}>
             <th scope="row">
               <a href="#">{item.number}</a>
             </th>
             <td>{item.customer}</td>
             <td>
                <a href="#" className='text-primary'>{item.product}</a>
             </td>
             <td>${item.price.toFixed(2)}</td>
             <td>
               <span className='badge--bg'>
               <span className={`badge-bg bg-${handleStatus(item.status)}`}>
                 {item.status}
               </span>
               </span>
             </td>
           </tr>
         ))}
      </tbody>
    </table>
  )
}

export default RecentSalesTable