import React from 'react'
import Dropdown from '../../../../functions/dropdown/Dropdown'
import { data } from 'react-router-dom'
import useFetchData from '../../../../functions/hooks/FetchData'

const CustomerDetail = () => {
  const {data, loading, error} = useFetchData('/api/info.json');
  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;
  return (
    <div className='filter'>
      <Dropdown
        icon={
          <div className="icon-container">
            <i className="ph-fill ph-dots-three-circle icon-detail"></i>
          </div>
        }
        items={data?.details?.map((detail) => ({
          name: detail.name || "Unknown Filter"
        })) || []} // Eğer filtreler boşsa varsayılan boş array
      />
    </div>
  )
}

export default CustomerDetail