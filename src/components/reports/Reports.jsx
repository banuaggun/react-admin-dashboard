import { useState } from 'react'
import CardFilter from '../card-filter/CardFilter'

const Reports = () => {
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  };

  return (
    <div className='card'>
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h6 className="card-title">
          <span>Reports/{filter}</span>
        </h6>
      </div>
    </div>
  )
}

export default Reports