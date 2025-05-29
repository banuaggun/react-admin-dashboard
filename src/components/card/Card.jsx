import { useState, useEffect } from 'react';
import CardFilter from '../card-filter/CardFilter';
import './card.css';
import useFetchData from '../../functions/hooks/FetchData';

const Card = ({ card }) => {
  const [filter, setFilter] = useState('Today'); // Initial filter state
  const {data, loading, error} = useFetchData('/api/info.json');

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const iconClasses = {
    Sales: 'ph-fill ph-shapes',
    Revenue: 'ph-fill ph-bell',
    Customers: 'ph-fill ph-users-three',
  };

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  return (
    <div className='cards'>
      <div className="cards-content">
        {/* Filter dropdown */}
        <div className="cards-content-filter">
          <CardFilter filterChange={handleFilterChange} filters={data?.filters || []} />
        </div>

        {/* Card body */}
        <div className="cards-content-body">
          <span className="cards-title">
            <span className='title-name'>{card.name} | </span>
            <span className='title-filter'>{filter}</span>
          </span>
          <div className="cards-details">
            <div className="details-icon">
              {iconClasses[card.name] && <i className={iconClasses[card.name]}></i>}
            </div>
            <div className="details-right">
              <h6>
                {card.name === 'Revenue'
                  ? '$' + card.amount.toLocaleString('en-US')
                  : card.amount.toLocaleString('en-US')}
              </h6>
              <div className='details-percent'>
                <span className={`${card.percantage > 0 ? 'success' : 'danger'} details-number`}>
                  {card.percantage > 0
                    ? card.percantage * 100
                    : -card.percantage * 100}
                  %
                </span>
                <span className={`${card.percantage > 0 ? 'success' : 'danger'} details-arrow`}>
                  <i
                    className={
                      card.percantage > 0
                        ? 'ph-fill ph-arrow-circle-up'
                        : 'ph-fill ph-arrow-circle-down'
                    }
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
