import React from "react";
import "./recentsalestable.css";

const RecentSalesTable = ({ items }) => {
  const handleStatus = (status) => {
    switch (status) {
      case "Approved":
        return "success";
        break;
      case "Pending":
        return "warning";
        break;
      case "Rejected":
        return "danger";
        break;
      default:
        return "success";
    }
  };
  return (
    <table className="recent-sales-table">
      <thead className="recent-sales-table-header">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Customer</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <tr key={item.id}>
              <th scope="row">
                <span>{item.number}</span>
              </th>
              <td data-label="customer" scope="row">
                {item.customer}
              </td>
              <td data-label="product" scope="row">
                  {item.product}
              </td>
              <td data-label="price" scope="row">
                ${item.price.toFixed(2)}
              </td>
              <td data-label="status" scope="row">
                <span className="badge--bg">
                  <span className={`badge-bg bg-${handleStatus(item.status)}`}>
                    {item.status}
                  </span>
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default RecentSalesTable;