// appHeader.js
import React from "react";

function AppHeader(props) {
  return (
    <header className="App-header">
      <h1>Card memory game</h1>
      <p>
        <a href="https://github.com/jql6/memory-game">Link to the repository</a>{" "}
        | <a href="https://jql6.github.io/">Return to homepage</a>
      </p>
      <p>
        Current Score: {props.currentScoreValue} | High score:{" "}
        {props.highScoreValue}
      </p>
    </header>
  );
}

export default AppHeader;
