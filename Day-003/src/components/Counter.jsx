import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button className="button increment" onClick={increment}>
          +
        </button>
        <button className="button decrement" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
