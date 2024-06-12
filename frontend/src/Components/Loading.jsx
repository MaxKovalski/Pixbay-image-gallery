import React from "react";
import "./Loading.css";

function Loading() {
  // Render the loading spinner
  return (
    <div className="loading">
      <div className="line"></div>
      <div className="line d1"></div>
      <div className="line d2"></div>
      <div className="line d3"></div>
      <div className="line d4"></div>
      <div className="line d5"></div>
      <br />
      <div className="caption">
        <p style={{ display: "inline-block" }}>Loading</p>
        <div className="dot">.</div>
        <div className="dot">.</div>
        <div className="dot">.</div>
      </div>
    </div>
  );
}

export default Loading;
