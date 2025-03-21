import { useState, useEffect } from 'react'
import TopSelling from '../../top-selling/TopSelling'
import Card from '../card/Card'
import RecentActivity from '../recent-activity/RecentActivity'
import RecentSales from '../recent-sales/RecentSales'
import Reports from '../reports/Reports'
import './dashboard.css'

const Dashboard = () => {

  const [cards, setCards] = useState([])

  const fetchData = () => {
    fetch('../api/info.json').then(res => res.json()).then(data => {
      setCards(data.cards);
    }).catch(e => console.log(e.message))
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="dashboard section">
      <div className="row">
      
        <div className="col-lg-8">
        
          <div className="row">
            {
              cards && cards.length > 0 && cards.map(card => <Card key={card._id} card={card} />)
            }
            <div className="col-12">
              <Reports />
            </div>
            <div className="col-12">
              <RecentSales/>
            </div>
            <div className="col-12">
              <TopSelling/>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <RecentActivity />
        </div>
      </div>
    </section>
  )
}

export default Dashboard