import { useState } from "react";
import CardFilter from "../card-filter/CardFilter";
import "./recentactivity.css";
import RecentItem from "./RecentItem";
import useFetchData from "../../../functions/hooks/FetchData"; // Hook'u import et

const RecentActivity = () => {
  const [filter, setFilter] = useState("Today");

  // Hook'u kullanarak veriyi getir
  const { data: items, loading, error } = useFetchData("/api/info.json"); 

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  // Veriyi getirme sürecini yönet
  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  return (
    <div className="recent">
      <div className="recent-activity-body">
        <div className="recent-activity-body-header">
          <div>
            <span className="recent-title">Recent Activity | 
              <span className="recent-filter">{filter}</span>
            </span>
          </div>

          <div className="recent-filter">
            <CardFilter filterChange={handleFilterChange} />
          </div>
        </div>

        <div className="recent-item">
          {items?.recentactivity?.map((item) => (
            <RecentItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;