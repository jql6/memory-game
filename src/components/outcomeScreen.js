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
      <div className="figure-8-x">
        <div className="figure-8-y">
          <h1 className="spinning">
            {props.win
              ? "You win!"
              : props.lose
              ? "You lose!"
              : "Game in progress"}
          </h1>
        </div>
      </div>
      <p>Click to reset</p>
    </div>
  );
}

export default OutcomeScreen;
