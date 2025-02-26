import { useState, useEffect } from 'react'
import CardFilter from '../card-filter/CardFilter'
import './recentsales.css'
import RecentSalesTable from './RecentSalesTable'

const RecentSales = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch('../api/info.json').then(res => res.json()).then(item => {
      setItems(item.recentsales);
    }).catch(e => console.log(e.message))
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='sales'>
      <div className="sales-content">
        <div className="sales-content-filter">
          <CardFilter filterChange={handleFilterChange}/>
        </div>
        <div className="sales-content-body">
          <div className="sales-title">
            <span>Recent Sales | {filter}</span>
          </div>
          <div className="sales-table">
          <RecentSalesTable items={items} />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default RecentSales