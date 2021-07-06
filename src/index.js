import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GA4React from "ga-4-react";
const ga4react = new GA4React("G-GMERWLB8B0");

(async () => {
  await ga4react.initialize();

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
})();
