import React from "react";
import "../styles/LibraryPages.css";

export default function LikedVideos() {
  return (
    <div className="pageContainer">
      <h2>Liked Videos</h2>

      <div className="grid">
        <div className="card">
          <img src="/icons/branner.png" alt="liked" />
          <p>Liked video</p>
        </div>
      </div>
    </div>
  );
}