import React from "react";

import { Badge } from "antd";

import "./Card.scss";
import { Link } from "react-router-dom";

function Card() {
  const sessionId = "xyz-abc-009";

  return (
    <Link to={`/book-your-sessions/session-details/${sessionId}`}>
      <div className="session__card">
        <div className="session__timings">
          <h3>08:00 PM</h3>
          <p className="session__slot">25 slots</p>
        </div>

        <div className="divider"></div>

        <div className="session__details">
          <h3>Strength @ Home</h3>
          <p className="trainer">With Amanda</p>
          <div className="session__info">
            <Badge status="success" text="Beginner" />

            <p>|&nbsp;&nbsp; 60 mins</p>
          </div>
        </div>

        <div className="session__tranier">
          <img src="assets/img/doctors/doctor-01.jpg" alt="Trainer" />
        </div>
      </div>
    </Link>
  );
}

export default Card;
