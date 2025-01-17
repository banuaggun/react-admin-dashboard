import { useState, useEffect } from 'react'
import CardFilter from '../card-filter/CardFilter'
import './recentactivity.css'
import RecentActivityItem from './RecentActivityItem'

const RecentActivity = () => {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('Today')
  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch('../api/info.json').then(res => res.json()).then(item => {
      setItems(item.recentactivity);
    }).catch(e => console.log(e.message))
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
          <span>Recent Activity | {filter} </span>
        </h5>

        <div className="activity">
          {items && items.length > 0 && items.map(item => (
            <RecentActivityItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentActivity