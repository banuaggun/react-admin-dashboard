import {useEffect, useState} from "react";
import "./dashboard.css";
import PageTitle from "../../components/page-title/Pagetitle";
import Card from "../../components/dashboard-elements/card/Card";
import RecentActivity from "../../components/dashboard-elements/recent-activity/RecentActivity";
import Reports from "../../components/dashboard-elements/reports/Reports";
import RecentSales from "../../components/dashboard-elements/recent-sales/RecentSales";
import Topselling from "../../components/dashboard-elements/topselling/Topselling";

const Dashboard = ({ isExpanded }) => {
  const [cards, setCards] = useState([]);

  const fetchData = () => {
    fetch("../api/info.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.cards);
      })
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

 
  return (
    <section aria-label="dashboard" className={`dashboard ${isExpanded ? "sidebar-close" : "sidebar-open"}`}>
      <div className="row-1">
        <PageTitle page="dashboard" />
      </div>
      <div className="row-2">
        <div className="col-1">
          {cards && cards.length > 0 && cards.map((card) => <Card key={card._id} card={card} />)}
        </div>
        <div className="col-2">
          <RecentActivity />
        </div>
      </div>

      <div className="row-3">
        <div className="col-1">
          <Reports />
        </div>
      
        <div className="col-2">
          <RecentSales />
        </div>
        
      </div>
    
      <div className="row-4">
        <div className="col-1">
          <Topselling/>
        </div>
      </div>
      
    </section>
  );
};

export default Dashboard;
