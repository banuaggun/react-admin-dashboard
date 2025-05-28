import { useState } from "react";
import CardFilter from "../card-filter/CardFilter";
import "./topselling.css";
import TopsellingTable from "./TopsellingTable";
import useFetchData from "../../functions/hooks/FetchData"; // Custom Hook'u import et

const Topselling = () => {
  const [filter, setFilter] = useState("Today");
  const { data: items, loading, error } = useFetchData("/api/info.json"); // Hook'u kullan

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  return (
    <div className="top-selling">
      <div className="top-selling-body">
        <div className="top-selling-body-header">
          <div>
            <span className="top-selling-title">Top Selling | </span>
            <span className="top-selling-filter">{filter}</span>
          </div>
          <div>
            <CardFilter filterChange={handleFilterChange} />
          </div>
        </div>
        <div className="selling-table">
          <TopsellingTable items={items.topselling} />
        </div>
      </div>
    </div>
  );
};

export default Topselling;