import React from "react";
import Dropdown from "../../functions/Dropdown";
import data from "../../data/data.json";
import "./nav.css";

const NavNotice = () => {
    return (
        <div>
            <Dropdown
                icon={
                    <div className="icon-container">
                        <i className="ph ph-bell"></i>
                        <span className="badge badge-notice">4</span>
                    </div>
                }
                items={data.notifications.map((notification) => ({
                    title: notification.title,
                    text: notification.text,
                    time: notification.time,
                }))}
            />
        </div>
    );
};

export default NavNotice;
