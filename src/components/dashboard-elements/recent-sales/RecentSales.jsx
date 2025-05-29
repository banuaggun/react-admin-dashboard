import { useState } from 'react'
import CardFilter from '../card-filter/CardFilter'
import './recentsales.css'
import RecentSalesTable from './RecentSalesTable'
import useFetchData from "../../../functions/hooks/FetchData"; // Custom Hook'u import et

const RecentSales = () => {
  const [filter, setFilter] = useState('Today');
  const {data: items, loading, error} = useFetchData("/api/info.json"); // Hook'u kullan

  const handleFilterChange = filter => {
    setFilter(filter);
  };

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  return (
    <div className='sales'>
      <div className="sales-body">
        <div className="sales-body-header">

          <div>
            <span className='sales-title'>Recent Sales | </span>
            <span className="sales-filter">{filter}</span>
          </div>

          <div>
            <CardFilter filterChange={handleFilterChange}/>
          </div>

        </div>
        <div className="sales-table">
          <RecentSalesTable items={items.recentsales} />
        </div>
      </div>
      
    </div>
  )
}

export default RecentSales