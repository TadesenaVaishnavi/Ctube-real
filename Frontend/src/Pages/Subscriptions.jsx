import React from "react";
import "../styles/LibraryPages.css";

export default function Subscriptions() {
  const channels = [
    { name: "CodeWithHarry", image: "/icons/branner.png" },
    { name: "Tech Burner", image: "/icons/branner.png" },
    { name: "Apna College", image: "/icons/branner.png" },
  ];

  return (
    <div className="pageContainer">
      <h2>Subscriptions</h2>

      <div className="grid">
        {channels.map((channel, index) => (
          <div className="card" key={index}>
            <img src={channel.image} alt={channel.name} />
            <p>{channel.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}