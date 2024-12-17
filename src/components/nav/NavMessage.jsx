import React from "react";
import Dropdown from "../../functions/Dropdown";
import data from "../../data/data.json";
import './nav.css'

function NavMessage() {
    return (
        <div>
            <Dropdown
                icon={
                    <div className="icon-container">
                        <i className="ph ph-chat"></i>
                        <span className="badge badge-message">2</span>
                    </div>
                }
                items={data.messages.map((message) => ({
                    title: message.sender,
                    text: message.content,
                    time: message.time,
                }))}
            />
        </div>
    );
}

export default NavMessage;
