// cardList.js
import "./cardList.css";
import React, { useState } from "react";
import AppCard from "./appCard";
import cardDict from "../cardDict";

function CardsDisplay() {
  // Create a card list
  const [cardList] = useState([
    "Ace of Spades",
    "Ace of Hearts",
    "Two of Spades",
    "King of Hearts",
  ]);

  return (
    <div className="card-list-container">
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
    </div>
  );
}

export default CardsDisplay;
