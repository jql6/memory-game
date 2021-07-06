import "./App.css";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import AppHeader from "./components/appHeader";
import CardsDisplay from "./components/cardsDisplay";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <Helmet>
        <title>Memory game</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
      </Helmet>
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
