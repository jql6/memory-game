// appCard.js
import "./appCard.css";
import React from "react";

function AppCard(props) {
  const classifyCardColor = (cardText) => {
    const cardWords = cardText.split(" ");
    const cardSuit = cardWords.slice(-1)[0];
    let cardClass = "card";

    if ((cardSuit == "Spades") | (cardSuit == "Clubs")) {
      cardClass = "black card";
    } else if ((cardSuit == "Hearts") | (cardSuit == "Diamonds")) {
      cardClass = "red card";
    } else {
      throw `Error, '${cardSuit}' in '${cardText}' is not a suit!`;
    }

    return cardClass;
  };

  return (
    <div className="app-card">
      <div className="card-background">
        <p className={classifyCardColor(props.cardText)}>{props.cardSymbol}</p>
      </div>
      <p>{props.cardText}</p>
    </div>
  );
}

export default AppCard;
