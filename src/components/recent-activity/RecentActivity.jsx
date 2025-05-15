import { useState, useEffect } from "react";
import CardFilter from "../card-filter/CardFilter";
import "./recentactivity.css";
import RecentItem from "./RecentItem";

const RecentActivity = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch("../api/info.json")
      .then((res) => res.json())
      .then((item) => {
        setItems(item.recentactivity);
      })
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recent">
      <div className="recent-activity-body">
        <div className="recent-activity-body-header">
          <div>
            <span className="recent-title">Recent Activity | <span className="recent-filter">
            {filter} </span>  </span>
          </div>

          <div className="recent-filter">
            <CardFilter filterChange={handleFilterChange} />
          </div>
        </div>

        <div className="recent-item">
          {items &&
            items.length > 0 &&
            items.map((item) => <RecentItem key={item._id} item={item} />)}
           
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;