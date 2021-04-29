import React from "react";

import Card from "./Card";

function SessionsCards() {
  return (
    <div className="row session-row">
      <div className="session__header">
        <h3>Today</h3>
        <p>Timezone: Asia/Kolkata</p>
      </div>
      <Card />
      <Card />
      <div className="session__header">
        <h3>Tomorrow</h3>
        <p>Timezone: Asia/Kolkata</p>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default SessionsCards;
