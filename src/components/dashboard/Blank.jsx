import { useState, useEffect } from 'react';
import './dashboard.css';
import Card from '../card/Card';
import RecentActivity from '../recent-activity/RecentActivity';

const Blank = ({ isExpanded }) => {
  const [cards, setCards] = useState([]);

  const fetchData = () => {
    fetch('../api/info.json')
      .then((res) => res.json())
      .then((data) => {
        setCards(data.cards);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("isExpanded:", isExpanded); // Debugging için eklendi

  return (
    <section aria-label="dashboard" className={`dashboard ${isExpanded ? 'sidebar-close' : 'sidebar-open'}`}>
      <div className="dashboard-row">
        <div className="dashboard-row-left">
          <div className="dashboard-row-left-card">
            {cards && cards.length > 0 && cards.map((card) => <Card key={card._id} card={card} />)}
          </div>
        </div>
        <div className="dashboard-row-right">
          <RecentActivity />
        </div>
      </div>
    </section>
  );
};

export default Blank;
