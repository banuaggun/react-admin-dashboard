import { useState } from 'react'
import './reports.css'
import CardFilter from '../card-filter/CardFilter'
import ReportCharts from './ReportCharts';

const Reports = () => {
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  };

  return (
    <div className='reports'>
      <div className="reports-body">
        <div className="reports-body-header">

          <div>
            <span className='reports-title'>Reports | </span>
            <span className='reports-filter'>{filter}</span>
          </div>

          <div>
            <CardFilter filterChange={handleFilterChange} />
          </div>

        </div>

        <div className="reports-chart">
          <ReportCharts/>
        </div>

      </div>
    </div>
  )
}

export default Reports