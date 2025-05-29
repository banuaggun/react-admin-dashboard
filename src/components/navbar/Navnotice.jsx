import React from "react";
import Dropdown from "../../functions/dropdown/Dropdown";
import './navbar.css';
import useFetchData from "../../functions/hooks/FetchData";

function Navnotice() {
  const {data, loading, error} = useFetchData("/api/info.json");
  
  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  return (
    <div className="navbar-notice">
      <Dropdown 
        icon={
          <div className="icon-container">
            <i className="ph-fill ph-bell"></i>
            <span className="badge badge-notice">4</span>
          </div>
        }
        items={data?.notices?.map((notice) => ({
          title: notice.title || "No title", 
          text: notice.text || "No content available",  time: notice.time || "Unknown time",
        })) || []}
      />
    </div>
  );
}

export default Navnotice;
