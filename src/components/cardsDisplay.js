// cardsDisplay.js
import "./cardsDisplay.css";
import React, { useState, useEffect } from "react";
import AppCard from "./appCard";
import OutcomeScreen from "./outcomeScreen";
import cardDict from "../cardDict";
import sampleArray from "../myFunctions";

function CardsDisplay(props) {
  // Create a card list
  const [cardPool] = useState([
    "Ace of Spades",
    "Two of Spades",
    "Three of Spades",
    "Four of Spades",
    "Five of Spades",
    "Six of Spades",
    "Seven of Spades",
    "Eight of Spades",
    "Nine of Spades",
    "Ten of Spades",
    "Ace of Hearts",
    "Two of Hearts",
    "Three of Hearts",
    "Four of Hearts",
    "Five of Hearts",
    "Six of Hearts",
    "Seven of Hearts",
    "Eight of Hearts",
    "Nine of Hearts",
    "Ten of Hearts",
  ]);

  const [cardList, setCardList] = useState(sampleArray(cardPool, 6));

  const [clickedCards, setClickedCards] = useState([]);

  const [loseState, setLoseState] = useState(false);

  const [winState, setWinState] = useState(true);
  // Cheat mode for debugging (you get to see clicked cards)
  const [cheat] = useState(false);

  // Function used to update score values for parent component
  const checkHighScore = (score) => {
    // If the current score is higher than high score, update high score
    if (props.highScoreValue < score) {
      props.highScoreFunction(score);
    }
  };

  const handleCardClick = (e) => {
    // Name of the card that was clicked
    const cardName =
      e.target.parentElement.parentElement.querySelector(
        ".card-text"
      ).textContent;
    // Check if card has been clicked
    if (clickedCards.includes(cardName)) {
      setLoseState(true);
      // Reset scores
      props.currentScoreFunction(0);
    } else {
      const newClickedCards = [...clickedCards, cardName];
      setClickedCards(newClickedCards);
      const nonClickedCards = cardPool.filter(
        (card) => !newClickedCards.includes(card)
      );
      // Update scores
      props.currentScoreFunction(props.currentScoreValue + 1);
      checkHighScore(props.currentScoreValue + 1);

      // Generate a valid, shuffled card list
      let shuffledCardList = sampleArray(cardPool, cardList.length);
      // Check that the shuffled card list is valid
      let possible = false;
      // If there is a non clicked card, then it's possible to guess correctly
      shuffledCardList.forEach((card) => {
        if (nonClickedCards.includes(card)) {
          possible = true;
        }
        // Could use cardPool.filter((card) => !clickedCards.includes(card))
        // if state is lagging behind
      });

      if (!possible) {
        // Choose a random index in card list
        let sampledIndex = sampleArray(Object.keys(cardList), 1);
        // Choose a card from nonclicked cards
        // This should always be possible because the else is handled in
        // the useEffects portion to display win screen
        if (nonClickedCards.length == 0) {
          setWinState(true);
          // Exit if win
          return;
        } else {
          let sampledValidCard = sampleArray(nonClickedCards, 1)[0];
          shuffledCardList = [
            ...shuffledCardList.slice(0, sampledIndex),
            sampledValidCard,
            ...shuffledCardList.slice(sampledIndex + 1),
          ];
        }
      }
      // Shuffle the card list
      setCardList(shuffledCardList);
    }
  };

  // componentDidUpdate
  useEffect(() => {
    // Display lose screen if state is losing
    if (loseState) {
      // Display lose screen
      // Lose screen should trigger reset when clicking outside of box or
      // something
    } else if (winState) {
      // Show win screen
    } else {
      // Make a shuffled card list
      // Display clicked cards
    }
  });

  const resetGame = () => {
    // Reset lose state
    setLoseState(false);
    setWinState(false);
    // Reset cardList and clickedCards
    setClickedCards([]);
    // Shuffle the cards and reset cardList
    setCardList(sampleArray(cardPool, cardList.length));
  };

  return (
    <div className="cards-display">
      <OutcomeScreen
        lose={loseState}
        win={winState}
        resetFunction={resetGame}
      />
      <div className="card-list">
        {cardList.map((cardName) => {
          return (
            <AppCard
              key={cardName}
              cardSymbol={cardDict[cardName]}
              cardText={cardName}
              clickFunction={handleCardClick}
            />
          );
        })}
      </div>
      <div
        className="clicked-cards card-list"
        style={{ display: cheat ? "grid" : "none" }}
      >
        {clickedCards.map((cardName) => {
          return (
            <AppCard
              key={`clicked-${cardName}`}
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
