import React, { useEffect, useState } from "react";
import Dropdown from "../../functions/dropdown/Dropdown";
import './navbar.css';

function Navuser() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetch("/api/info.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserInfo(data.userInfo);
      })
      .catch((error) => console.error("Error fetching user info data:", error));
  }, []);

  return (
    <div>
      <Dropdown
        icon={
          <div className="icon-container">
            <i className="ph-fill ph-user"></i>
          </div>
        }
        items={userInfo ? [{
          content: (
            <div>
              <p><strong>Name:</strong> {userInfo.name}</p>
              <p><strong>Email:</strong> {userInfo.email}</p>
            </div>
          )
        }] : []}
      />
    </div>
  );
}

export default Navuser;
