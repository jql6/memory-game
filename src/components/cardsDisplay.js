// cardsDisplay.js
import "./cardsDisplay.css";
import React, { useState, useEffect } from "react";
import AppCard from "./appCard";
import OutcomeScreen from "./outcomeScreen";
import cardDict from "../cardDict";
import sampleArray from "../myFunctions";

function CardsDisplay(props) {
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

  const checkHighScore = (score) => {
    if (props.highScoreValue < score) {
      props.highScoreFunction(score);
    }
  };

  const checkCardInList = (cardName) => {
    if (clickedCards.includes(cardName)) {
      console.log("You lose!");
      // Reset the clicked cards
      setClickedCards([]);
      // Reset scores
      props.currentScoreFunction(0);
    } else {
      // Add the clicked card to the list of clicked cards
      setClickedCards([...clickedCards, cardName]);
      props.currentScoreFunction(props.currentScoreValue + 1);
      checkHighScore(props.currentScoreValue + 1);
    }
  };

  const shuffleCardsDisplay = (n) => {
    return sampleArray(Object.keys(cardDict), n);
  };

  const addCardToList = (e) => {
    const cardName =
      e.target.parentElement.parentElement.querySelector(
        ".card-text"
      ).textContent;
    console.log(cardName);
    // Check if card is in list
    checkCardInList(cardName);
    console.log(`Sample: ${shuffleCardsDisplay(6)}`);
  };

  return (
    <div className="cards-display">
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
      <div className="card-list">
        {clickedCards.map((cardName) => {
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
