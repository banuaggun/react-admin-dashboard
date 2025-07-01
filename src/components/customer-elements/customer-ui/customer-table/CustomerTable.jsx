import React, { useState } from "react";
import CustomerDetail from "../customer-detail/CustomerDetail";
import Pagination from "../pagination/Pagination";
import './customer-table.css';

const CustomerTable = ({ items }) => {
  const [detail, setDetail] = useState('Personal Information');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDetailChange = detail => {
    setDetail(detail);
  };

  // Sayfalama için öğeleri filtreleme
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div>
      <table className="customer-table">
        <thead className="customer-table-header">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Payment</th>
            <th scope="col">Installments</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {paginatedItems.map((item) => (
            <tr key={item.id}>
              <td data-label="name" scope="row">
                <span>{item.customer_name}</span>
              </td>
              <td data-label="spending" scope="row">
                ${item.spending}
              </td>
              <td data-label="payment type" scope="row">
                {item.payment_type}
              </td>
              <td data-label="installments left" scope="row">
                {item.installments_left}
              </td>
              <td>
                <CustomerDetail detailChange={handleDetailChange} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sayfalama bileşeni */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CustomerTable;