import React from "react";
import "./personal.css";

const PersonalInfo = ({ customer, onClose }) => {
  if (!customer) {
    return <p>Seçili müşteri bilgisi bulunamadı.</p>;
  }

  const fields = [
    { label: "Email", value: customer.email },
    { label: "Phone", value: customer.phone },
    { label: "Payment Method", value: customer.payment_type },
    { label: "Number of Installments", value: customer.installments_left },
  ];

  return (
    <div className="personal-info-card">
      <div className="personal-info-card-row">
        <div className="personal-info-card-row-1">
          <button>
            <i className="ph-fill ph-pencil-line"></i>
            <span>Edit</span>
          </button>
          <span onClick={onClose} style={{ cursor: "pointer" }}>
            <i className="ph-fill ph-x-circle"></i>
          </span>
        </div>

        <div className="personal-info-card-row-2">
          <input className="name" value={customer.customer_name || "İsim bilinmiyor"} />
          {fields.map((field, index) => (
            <div className="customer-info" key={index}>
              <h5>{field.label}</h5>
              <input value={field.value ?? "Tanımsız"} />
            </div>
          ))}
        </div>

        <div className="personal-info-card-row-3">
          <button>
            <i className="ph-fill ph-trash"></i>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfo;
