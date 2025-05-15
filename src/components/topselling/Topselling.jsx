import {useState, useEffect} from 'react'
import CardFilter from '../card-filter/CardFilter'
import './topselling.css'
//import TopsellingItem from './TopsellingItem';
import TopsellingTable from './TopsellingTable';

const Topselling = () => {
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
      <div className="top-selling-body">
        <div className="top-selling-body-header">
          <div>
            <span className='top-selling-title'>Top Selling | </span>
            <span className='top-selling-filter'>{filter}</span>
          </div>
          <div>
            <CardFilter filterChange={handleFilterChange}/>
          </div>
          
        </div>
       <div className="selling-table">
        <TopsellingTable items={items} />
       </div>
      </div>
    </div>
  )
}

export default Topselling