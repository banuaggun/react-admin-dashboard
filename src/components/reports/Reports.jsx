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
      <div className="reports-content">

        <div className="reports-content-filter">
          <CardFilter filterChange={handleFilterChange} />
        </div>

        <div className="reports-content-body">

          <div className="reports-title">
            <span>Reports/{filter}</span>
          </div>

          <div className="reports-chart">
            <ReportCharts/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Reports