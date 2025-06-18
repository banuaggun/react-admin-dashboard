import React from "react";
import './customer-table.css';

const CustomerTable = ({ items }) => {

  return (
      <table className="customer-table">
        <thead className="customer-table-head">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Product</th>
            <th scope="col">Payment</th>
            <th scope="col">Installments</th>
          </tr>
        </thead>
        <tbody>
          {items?.length > 0 && items.map((item) => (
            <tr key={item.id}>
              <td scope="row">
                <span>{item?.customer_name}</span>
              </td>
              <td data-label="spending" scope="row">
                {item?.spending}
              </td>
              <td data-label="product" scope="row">
                {item?.product}
              </td>
              <td data-label="payment_type" scope="row">
                {item?.payment_type}
              </td>
              <td data-label="installments_left" scope="row">
                {item?.installments_left}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default CustomerTable;