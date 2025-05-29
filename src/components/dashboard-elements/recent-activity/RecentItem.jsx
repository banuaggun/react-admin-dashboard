import React from "react";
import "./recentactivity.css";

const RecentItem = ({ item }) => {
  if (!item) return null; // Eğer item tanımlı değilse, hiçbir şey render etme

  return (
    <div className="activity-container">
      {/* Badge Bölümü */}
      <div className="activity-badge">
        <i
          className={`ph-fill ph-circle activity-item-badge ${
            item.color || "default-color"
          }`}
        ></i>
      </div>

      {/* İçerik Bölümü */}
      <div className="activity-content">
        <div className="activity-text">
          {item.content || "No content available"}
        </div>

        <div className="activity-detail">
          <div className="activity-highlight">
            {item.highlight || "No highlight"}
          </div>
          <div className="activity-time">
            {item.time || "Unknown time"}
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default RecentItem;