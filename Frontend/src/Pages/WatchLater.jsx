import React from "react";
import "../styles/LibraryPages.css";

export default function WatchLater() {
  return (
    <div className="pageContainer">
      <h2>Watch Later</h2>

      <div className="grid">
        <div className="card">
          <img src="/icons/branner.png" alt="watch later" />
          <p>Saved video for later</p>
        </div>
      </div>
    </div>
  );
}