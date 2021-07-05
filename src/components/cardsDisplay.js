// cardsDisplay.js
import "./cardsDisplay.css";
import React, { useState, useEffect } from "react";
import AppCard from "./appCard";
import cardDict from "../cardDict";
import sampleArray from "../myFunctions";

function CardsDisplay() {
  // Create a card list
  const [cardList] = useState([
    "Ace of Spades",
    "Ace of Hearts",
    "Two of Spades",
    "King of Hearts",
    "Jack of Clubs",
    "Three of Diamonds",
  ]);

  const [clickedCards, setClickedCards] = useState([]);

  // componentDidUpdate
  useEffect(() => {
    console.log(clickedCards);
  }, [clickedCards]);

  const checkCardInList = (cardName) => {
    if (clickedCards.includes(cardName)) {
      console.log("You lose!");
      // Reset the clicked cards
      setClickedCards([]);
    } else {
      // Add the clicked card to the list of clicked cards
      setClickedCards([...clickedCards, cardName]);
    }
  };

  const addCardToList = (e) => {
    const cardName =
      e.target.parentElement.parentElement.querySelector(
        ".card-text"
      ).textContent;
    console.log(cardName);
    // Check if card is in list
    checkCardInList(cardName);
    console.log(`Sample: ${sampleArray(cardList)}`);
  };

  return (
    <div className="card-list-container">
      <div className="card-list">
        {cardList.map((cardName) => {
          return (
            <AppCard
              key={cardName}
              cardSymbol={cardDict[cardName]}
              cardText={cardName}
              clickFunction={addCardToList}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardsDisplay;
