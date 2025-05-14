import { useState, useEffect } from 'react';
import CardFilter from '../card-filter/CardFilter';
import './card.css';

const Card = ({ card }) => {
  const [filter, setFilter] = useState('Today'); // Initial filter state
  const [filters, setFilters] = useState([]); // Filters fetched dynamically

  // Fetch filters dynamically from CardFilter
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/info.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFilters(data.filters); // Set filters dynamically
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const iconClasses = {
    Sales: 'ph-fill ph-shapes',
    Revenue: 'ph-fill ph-bell',
    Customers: 'ph-fill ph-users-three',
  };

  return (
    <div className='cards'>
      <div className="cards-content">
        {/* Filter dropdown */}
        <div className="cards-content-filter">
          <CardFilter filterChange={handleFilterChange} filters={filters} />
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
