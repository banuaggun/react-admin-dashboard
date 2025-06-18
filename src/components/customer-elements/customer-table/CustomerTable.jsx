import React from "react";
import './customer-table.css';

const CustomerTable = ({ items }) => {

  return (
      <table className="customer-table">
        <thead className="customer-table-header">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Payment</th>
            <th scope="col">Installments</th>
          </tr>
        </thead>
        <tbody>
          {items?.length > 0 && items.map((item) => (
            <tr key={item.id}>
              <td data-label="name" scope="row">
                <span>{item?.customer_name}</span>
              </td>
              <td data-label="spending" scope="row">
                ${item?.spending}
              </td>
              <td data-label="payment type" scope="row">
                {item?.payment_type}
              </td>
              <td data-label="installments left" scope="row">
                {item?.installments_left}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default CustomerTable;