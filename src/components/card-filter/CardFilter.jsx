import React, { useState, useEffect } from 'react';
import Dropdown from '../../functions/dropdown/Dropdown';

const CardFilter = () => {
  const [filters, setFilters] = useState([]);

  // Verileri çekmek için fetch fonksiyonu
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/info.json');
        if (!response.ok) {
          throw new Error('Veri çekme başarısız oldu');
        }
        const data = await response.json();
        setFilters(data.filters); // Gelen veriyi state'e kaydet
        console.log(data.filters); // Debug için loglama
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='filter'>
      <Dropdown
        icon={
          <div className="icon-container">
            <i className="ph-fill ph-circles-three-plus"></i>
          </div>
        }
        items={filters.map((filter) => ({
          name: filter.name
        }))}
      />
    </div>
  );
};

export default CardFilter;
