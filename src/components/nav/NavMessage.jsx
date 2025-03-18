import { useEffect, useState } from "react";
import Dropdown from "../../functions/Dropdown";
import "./nav.css";

function NavMessage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/api/info.json")
      .then((response) => response.json())
      .then((data) => setMessages(data.messages))
      .catch((error) => console.error("Error fetching messages data:", error));
  }, []);

  return (
    <div className="navbar-message">
      <Dropdown
        icon={
          <div className="icon-container">
            <i className="ph-fill ph-chat"></i>
            <span className="badge badge-message">2</span>
          </div>
        }
        items={messages.map((message) => ({
          title: message.sender,
          text: message.content,
          time: message.time,
        }))}
      />
    </div>
  );
}

export default NavMessage;
