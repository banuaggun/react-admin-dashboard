import {useState, useEffect} from 'react'
import CardFilter from '../components/card-filter/CardFilter';
import './topselling.css'
import TopSellingItem from './TopSellingItem';

const TopSelling = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  }

  const fetchData = () => {
    fetch('../api/info.json').then(res => res.json()).then(item => {
      setItems(item.topselling);
    }).catch(e => console.log(e.message))
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='top-selling'>
      <div className="top-selling-content">
        <div className="top-selling-content-filter">
          <CardFilter filterChange={handleFilterChange}/>
        </div>
        <div className="top-selling-content-body">
          <div className="top-selling-title">
            <span>Top Selling | {filter}</span>
          </div>
          <div className="top-selling-table">
            <TopSellingItem items={items} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSelling