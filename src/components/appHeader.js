// appHeader.js
import React, { useState } from "react";

function AppHeader() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(1);

  const updateScore = (number) => {
    setCurrentScore(number);
    setHighScore(number);
  };

  console.log(updateScore);

  return (
    <header className="App-header">
      <h1>Card memory game</h1>
      <p>
        <a href="https://github.com/jql6/memory-game">Link to the repository</a>{" "}
        | <a href="https://jql6.github.io/">Return to homepage</a>
      </p>
      <p>
        Current Score: {currentScore} | High score: {highScore}
      </p>
    </header>
  );
}

export default AppHeader;
