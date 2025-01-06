import { useState } from 'react'
import CardFilter from '../card-filter/CardFilter'
import ReportCharts from './ReportCharts';

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
        <ReportCharts/>
      </div>
    </div>
  )
}

export default Reports