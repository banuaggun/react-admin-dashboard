import React from "react";
import Dropdown from "../../functions/dropdown/Dropdown";
import './navbar.css';
import useFetchData from "../../functions/hooks/FetchData";

function Navuser() {
  const { data, loading, error } = useFetchData("/api/info.json");

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  return (
    <div>
      <Dropdown
        icon={
          <div className="icon-container">
            <i className="ph-fill ph-user"></i>
          </div>
        }
        items={data?.userInfo ? [{
          content: (
            <div>
              <p><strong>Name:</strong> {data.userInfo.name || "Unknown"}</p>
              <p><strong>Email:</strong> {data.userInfo.email || "No email provided"}</p>
            </div>
          )
        }] : []}
      />
    </div>
  );
}

export default Navuser;
