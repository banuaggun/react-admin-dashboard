import { useState } from 'react'
import CardFilter from '../card-filter/CardFilter'
import './card.css'

const Card = ({card}) => {

  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  };

  return (
    <div className='col-xxl-4 col-md-6'>
      <div className="card info-card sales-card">
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
          <h5 className="card-title">
          <span>{card.name} | {filter}</span>
          </h5>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className='ph ph-bell'></i>
            </div>
            <div className="ps-3">
              <h6>
                {card.name === 'Revenue' ? '$' + card.amount.toLocaleString('en-US') : card.amount.toLocaleString('en-US')}
              </h6>
              <span className={`${card.percantage > 0 ? 'text-success' : 'text-danger'} small pt-1 fw-bold`}>
                {card.percantage > 0 ? card.percantage * 100 : -card.percantage*100}%
              </span>
              <span className="text-muted small pt-2 ps-1">
                {card.percantage > 0 ? 'increase' : 'decrease'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card