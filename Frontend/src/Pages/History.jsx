import React from "react";
import "../styles/LibraryPages.css";

export default function History() {
  const historyVideos = [1, 2, 3, 4];

  return (
    <div className="pageContainer">
      <h2>Watch History</h2>

      <div className="grid">
        {historyVideos.map((video) => (
          <div className="card" key={video}>
            <img src="/icons/branner.png" alt="history" />
            <p>Previously watched video {video}</p>
          </div>
        ))}
      </div>
    </div>
  );
}