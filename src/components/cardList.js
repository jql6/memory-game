// cardList.js
import React, { useState } from "react";
import AppCard from "./appCard";
import cardDict from "../cardDict";

function CardsDisplay() {
  // Create a card list
  const [cardList] = useState(["Ace of Spades"]);

  return (
    <div className="card-list">
      {cardList.map((cardName) => {
        return (
          <AppCard
            key={cardName}
            cardSymbol={cardDict[cardName]}
            cardText={cardName}
          />
        );
      })}
    </div>
  );
}

export default CardsDisplay;
