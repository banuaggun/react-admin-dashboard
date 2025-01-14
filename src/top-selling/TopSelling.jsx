import {useState, useEffect} from 'react'
import CardFilter from '../components/card-filter/CardFilter';
import './topselling.css'

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
    <div className='card top-selling overflow-auto'>
      <CardFilter filterChange={handleFilterChange}/>
      <div className="card-body pb-8">
        <h5 className="card-title">
          <span>Top Selling | {filter}</span>
        </h5>
      </div>
    </div>
  )
}

export default TopSelling