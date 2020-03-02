import React, { useState, useEffect, usePromise } from "react";
import { createPortal } from "react-dom";
const MAX_PIZZAS = 20;

function Controlled() {
  let [pizza, setPizza] = useState(10);
  function eatPizza() {
    if (pizza < MAX_PIZZAS) {
      return (pizza += 1);
    } else {
      return null;
    }
  }

  function handle() {
    setPizza(eatPizza);
  }

  return (
    <button onClick={handle}>
      I've eaten {pizza} {pizza === 1 ? "pizza" : "pizzas"}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      {/* <Portals />
      <ErrorMaker /> */}
      <Controlled />
    </div>
  );
}

export default App;
