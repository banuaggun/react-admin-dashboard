import React from 'react';
import Dropdown from '../../../../functions/dropdown/Dropdown';
import useFetchData from '../../../../functions/hooks/FetchData';

const ColumnSelector = ({ selectedColumn, onSelectColumn }) => {
  const { data, loading, error } = useFetchData('/api/info.json');

  if (loading) return <span>Yükleniyor...</span>;
  if (error) return <span>Hata: {error.message}</span>;

  const dropdownItems = data?.columns?.map((col) => ({
    name: col.name || "Bilinmeyen",
    onClick: () => onSelectColumn(col.value)
  })) || [];

  const selectedLabel =
    data?.columns?.find((col) => col.value === selectedColumn)?.name || "";

  return (
    <Dropdown
      icon={
        <div className="icon-container dropdown-label">
             <span className="selected-column-label">{selectedLabel}</span>
          <i className="ph-fill ph-caret-down icon-detail"></i>
         
        </div>
      }
      items={dropdownItems}
    />
  );
};

export default ColumnSelector;
