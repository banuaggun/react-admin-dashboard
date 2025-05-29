import React from "react";
import Dropdown from "../../functions/dropdown/Dropdown";
import './navbar.css';
import useFetchData from "../../functions/hooks/FetchData";

function Navmessage() {
    const { data, loading, error } = useFetchData("/api/info.json"); 

    if (loading) return <p>Yükleniyor...</p>;
    if (error) return <p>Hata: {error.message}</p>;

    return (
        <div className="navbar-message">
            <Dropdown
                icon={
                    <div className="icon-container">
                        <i className="ph-fill ph-chat"></i>
                        <span className="badge badge-message">{data?.messages?.length || 0}</span>
                    </div>
                }
                items={data?.messages?.map((message) => ({
                    title: message.sender,
                    text: message.content,
                    time: message.time,
                })) || []} // Eğer mesajlar boşsa varsayılan boş array
            />
        </div>
    );
}

export default Navmessage;
