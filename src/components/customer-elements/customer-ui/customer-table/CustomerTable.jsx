import React, { useState } from "react";
import CustomerDetail from "../customer-detail/CustomerDetail";
import Pagination from "../pagination/Pagination";
import PersonalInfo from "../customer-actions/PersonalInfo";
import "./customer-table.css";
import ColumnSelector from "../column-selector/ColumnSelector";

const CustomerTable = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState("amount");

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const selectedCustomer = items.find((c) => c.id === selectedCustomerId);

  return (
    <div className="customer-table-wrapper">
      <div className="left-panel">
        <table className="customer-table">
          <thead className="customer-table-header">
            <tr>
              <th>Name</th>
              <th>
                <ColumnSelector
                  selectedColumn={selectedColumn}
                  onSelectColumn={setSelectedColumn}
                />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.customer_name}</td>
                <td colSpan={3}>
                  {selectedColumn === "amount" && `$${item.spending}`}
                  {selectedColumn === "payment" && item.payment_type}
                  {selectedColumn === "installment" && item.installments_left}
                </td>
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

      <div
        className={`right-panel ${
          selectedCustomer && selectedAction ? "open" : ""
        }`}
      >
        {selectedAction === "Personal Information" && selectedCustomer && (
          <PersonalInfo customer={selectedCustomer} />
        )}
      </div>
    </div>
  );
};

export default CustomerTable;
