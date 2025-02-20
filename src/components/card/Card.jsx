import { useState } from 'react'
import CardFilter from '../card-filter/CardFilter'
import './card.css'

const Card = ({card}) => {

  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const iconClasses = {
    Sales: 'ph-fill ph-shapes',
    Revenue: 'ph-fill ph-bell',
    Customers: 'ph-fill ph-users-three'
  };

  return (
    <div className='cards'>
      <div className="cards-content">
        <div className="cards-content-filter">
          <CardFilter filterChange={handleFilterChange} />
        </div>
        
        <div className="cards-content-body">
          <span className="cards-title">
          <span className='title-name'>{card.name} | </span> <span className='title-filter'> {filter}</span>
          </span>
          <div className="cards-details">
            <div className="details-icon">
            {iconClasses[card.name] && <i className={iconClasses[card.name]}></i>}
            </div>
            <div className="details-right">
              <h6>
                {card.name === 'Revenue' ? '$' + card.amount.toLocaleString('en-US') : card.amount.toLocaleString('en-US')}
              </h6>
              <div className='details-percent'>
              <span className={`${card.percantage > 0 ? 'success' : 'danger'} details-number`}>
                {card.percantage > 0 ? card.percantage * 100 : -card.percantage*100}%
              </span>
              <span className={`${card.percantage > 0 ? 'success' : 'danger'} details-arrow`}>
                <i className={card.percantage > 0 ? "ph-fill ph-arrow-circle-up" : "ph-fill ph-arrow-circle-down"}></i>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card