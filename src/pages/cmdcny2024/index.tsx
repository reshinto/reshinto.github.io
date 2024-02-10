import React, { useEffect } from "react";

import "./styles.css";
import StarsCanvas from "./StarsCanvas";
import FireworksCanvas from "./FireworksCanvas";
import Card from "./Card";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="card-page">
      <StarsCanvas />
      <FireworksCanvas />
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
}

export default App;
