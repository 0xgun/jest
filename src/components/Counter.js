import React from "react";
import { useState } from "react";
const Counter = () => {
  const [Counter, setCounter] = useState(1);
  const incrementCount = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decrementCount = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <div>
      <p data-testid="counter">Count:{Counter}</p>
      <button data-testid="increment" onClick={incrementCount}>
        +
      </button>
      <button data-testid="decrement" onClick={decrementCount}>
        -
      </button>
    </div>
  );
};

export default Counter;
