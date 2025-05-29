import React from 'react';
import Dropdown from '../../../functions/dropdown/Dropdown';
import useFetchData from '../../../functions/hooks/FetchData';

const CardFilter = () => {
  
  const {data, loading, error} = useFetchData('./api/info.json');

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  return (
    <div className='filter'>
      <Dropdown
        icon={
          <div className="icon-container">
            <i className="ph-fill ph-circles-three-plus"></i>
          </div>
        }
        items={data?.filters?.map((filter) => ({
          name: filter.name || "Unknown Filter"
        })) || []} // Eğer filtreler boşsa varsayılan boş array
      />
    </div>
  );
};

export default CardFilter;
