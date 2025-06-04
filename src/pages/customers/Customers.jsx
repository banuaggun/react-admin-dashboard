import React from "react";
import PageTitle from "../../components/page-title/Pagetitle";
import CustomerTable from "../../components/customer-elements/customer-table/CustomerTable"; 
import useFetchData from "../../functions/hooks/FetchData"; // Hook'u import et

const Customers = ({ isExpanded }) => {
  const { data: customers, loading, error } = useFetchData("/api/info.json"); 

  // Veriyi getirme sürecini yönet
  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  return (
    <section aria-label="customers" className={`dashboard ${isExpanded ? "sidebar-close" : "sidebar-open"}`}>
      <div className="row-1">
        <PageTitle page="Customers" />
      </div>

      <div className="row-2">
        {customers?.customers?.map((customer) => ( // Müşteri listesini CustomerItem'a gönderiyoruz
          <CustomerTable key={customer.id} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Customers;