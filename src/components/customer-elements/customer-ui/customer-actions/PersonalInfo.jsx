import React from 'react';
import './personal.css';

const PersonalInfo = ({ customer }) => {
  if (!customer) {
    return <p>Seçili müşteri bilgisi bulunamadı.</p>;
  }

  const fields = [
  { label: "Email", value: customer.email },
  { label: "Telefon", value: customer.phone },
  { label: "Ödeme Türü", value: customer.payment_type },
  { label: "Taksit", value: customer.installments_left }
];

  return (
      <div className="personal-info-card">
    <h4>{customer.customer_name || "İsim bilinmiyor"}</h4>
    {fields.map((field, index) => (
      <p key={index}><strong>{field.label}:</strong> {field.value ?? "Tanımsız"}</p>
    ))}
  </div>
  );
};

export default PersonalInfo;