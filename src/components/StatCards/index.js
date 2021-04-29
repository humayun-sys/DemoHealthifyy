import React from "react";
import CalBurnt from "./CalBurnt";
import CalEaten from "./CalEaten";
import GlassesConsumed from "./GlassesConsumed";
import KgLost from "./KgLost";
import Slept from "./Slept";

import "./StatCards.scss";

function StatsCards() {
  return (
    <div className="row stat__cards__row">
      <CalEaten />
      <GlassesConsumed />
      <CalBurnt />
      <KgLost />
      <Slept />
      
    </div>
  );
}

export default StatsCards;
