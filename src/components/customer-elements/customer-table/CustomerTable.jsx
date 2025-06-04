import React from "react";

const CustomerTable = ({ customer }) => {
  if (!customer) return null; // Eğer müşteri tanımlı değilse, hiçbir şey render etme

  return (
    <div className="customer-container">
      <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Product</th>
            <th>Payment</th>
            <th>Installments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{customer.customer_name}</td>
            <td>{customer.spending} USD</td>
            <td>{customer.product}</td>
            <td>{customer.payment_type}</td>
            <td>{customer.installments_left}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;