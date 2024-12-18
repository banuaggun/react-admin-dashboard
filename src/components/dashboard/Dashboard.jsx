import { useState, useEffect } from 'react'
import Card from '../card/Card'
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
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </section>
  )
}

export default Dashboard