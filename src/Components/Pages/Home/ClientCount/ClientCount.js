import React from "react";
import "./ClientCount.css";
const ClientCount = () => {
  return (
    // our daily progress
    <div>
      <div className="w-100 mx-auto row justify-content-around clients-container p-5 text-white text-center align-items-center">
        <div className="col-md-3">
          <h2>7652</h2>
          <p>Last week</p>
        </div>
        <div className="col-md-3">
          <h2>2000</h2>
          <p>today Serial </p>
        </div>
        <div className="col-md-3">
          <h2>7500</h2>
          <p>happy Patient</p>
        </div>
        <div className="col-md-3">
          <h2>700</h2>
          <p>Re serialed</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCount;
