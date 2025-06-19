import React from "react";
import PageTitle from "../../components/page-title/Pagetitle";
import useFetchData from "../../functions/hooks/FetchData";
import './customers.css';
import CustomerLayout from "../../components/customer-elements/customer-layout/CustomerLayout";

const Customers = ({ isExpanded }) => {
  const { data: items, loading, error } = useFetchData("/api/info.json"); 

  // Veriyi getirme sürecini yönet
  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  return (
    <section aria-label="customers" className={`dashboard ${isExpanded ? "sidebar-close" : "sidebar-open"}`}>
      <div className="row-1 customers-body">
        <PageTitle page="Customers" />
      </div>

      <div className="customers-table">
        <CustomerLayout/>
    
      </div>
    </section>
  );
};

export default Customers;