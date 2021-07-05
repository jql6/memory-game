// outcomeScreen.js
import "./outcomeScreen.css";
import React from "react";

function OutcomeScreen(props) {
  return (
    <div
      id="lose-screen"
      style={{ display: props.lose | props.win ? "block" : "none" }}
      onClick={props.resetFunction}
    >
      <h1>
        {props.win ? "You win!" : props.lose ? "You lose!" : "Game in progress"}
      </h1>
      <p>Click to reset</p>
    </div>
  );
}

export default OutcomeScreen;
