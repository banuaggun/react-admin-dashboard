import React, { useState } from "react";
import CustomerDetail from "../customer-detail/CustomerDetail";
import Pagination from "../pagination/Pagination";
import PersonalInfo from "../customer-actions/PersonalInfo";
import './customer-table.css';

const CustomerTable = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const selectedCustomer = items.find(c => c.id === selectedCustomerId);

  return (
    <div className="customer-table-wrapper">
      <div className="left-panel">
        <table className="customer-table">
          <thead className="customer-table-header">
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Installments</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.customer_name}</td>
                <td>${item.spending}</td>
                <td>{item.payment_type}</td>
                <td>{item.installments_left}</td>
                <td>
                  <CustomerDetail
                    onSelectDetail={(action) => {
                      setSelectedCustomerId(item.id);
                      setSelectedAction(action);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className={`right-panel ${selectedCustomer && selectedAction ? 'open' : ''}`}>
        {selectedAction === 'Personal Information' && selectedCustomer && (
          <PersonalInfo customer={selectedCustomer} />
        )}
      </div>
    </div>
  );
};

export default CustomerTable;