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
          <RecentSalesTable items={items} />
        </div>
      </div>
      
    </div>
  )
}

export default RecentSales