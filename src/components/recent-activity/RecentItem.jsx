import React from "react";
import "./recentactivity.css";

const RecentItem = ({ item }) => {
  return (
    <div className="activity-container">
      <div className="activity-badge">
        <i
          className={`ph-fill ph-circle activity-item-badge ${item.color}`}
        ></i>
      </div>

      <div className="activity-content">
        <div className="activity-text">{item.content}</div>
        <div className="activity-detail">
          <div className="activity-highlight">{item.highlight}</div>
          <div className="activity-time">{item.time}</div>
        </div>
      </div>
    </div>
  );
};

export default RecentItem;
