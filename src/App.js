import "./App.css";
import React, { useState } from "react";
import AppHeader from "./components/appHeader";
import CardsDisplay from "./components/cardsDisplay";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <AppHeader currentScoreValue={currentScore} highScoreValue={highScore} />
      <CardsDisplay
        currentScoreFunction={setCurrentScore}
        currentScoreValue={currentScore}
        highScoreFunction={setHighScore}
        highScoreValue={highScore}
      />
    </div>
  );
}

export default App;
