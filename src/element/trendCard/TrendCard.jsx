import React from "react";
import "./trendCard.css";
import { API_URL } from "../../constant";

function TrendCard({ slide }) {
  return (
    <>
      <div className="trend-card">
        <img
          src={`${API_URL}poster/${slide.poster}`}
          alt="Preview Image"
          className="img-fluid"
        />

        <a href="#">
          Add to calender <ion-icon name="calender-outline"></ion-icon>
        </a>
      </div>
    </>
  );
}

export default TrendCard;
