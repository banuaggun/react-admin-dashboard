import React from 'react';
import Dropdown from '../../../../functions/dropdown/Dropdown';
import useFetchData from '../../../../functions/hooks/FetchData';
import './customer-detail.css';

const CustomerDetail = ({ onSelectDetail }) => {
  const { data, loading, error } = useFetchData('/api/info.json');

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  const dropdownItems = data?.details?.map((detail) => ({
    name: detail.name || "Unknown",
    onClick: () => onSelectDetail(detail.name) // sadece tıklamada aksiyon çalışıyor
  })) || [];

  return (
    <div className="filter">
      <Dropdown
        icon={
          <div className="icon-container icon-container-customer">
            <i className="ph-fill ph-circles-three-plus icon-detail"></i>
          </div>
        }
        items={dropdownItems}
      />
    </div>
  );
};

export default CustomerDetail;