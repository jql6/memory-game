import "./App.css";
import React from "react";
import AppHeader from "./components/appHeader";
import CardsDisplay from "./components/cardList";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <CardsDisplay />
    </div>
  );
}

export default App;
