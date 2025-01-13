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
    <div className='card recent-sales'>
      <CardFilter filterChange={handleFilterChange}/>

      <div className="card-body">
        <h5 className="card-title">
         <span>Recent Sales | {filter}</span>
        </h5>
        <RecentSalesTable items={items} />
      </div>
    </div>
  )
}

export default RecentSales