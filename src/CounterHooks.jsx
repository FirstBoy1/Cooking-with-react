import React, { useState, useContext } from 'react';

import { ThemeContext } from './App';

export default function CounterHooks({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const color = useContext(ThemeContext);

  return (
    <div>
      <button style={color} onClick={() => setCount((prev) => prev - 1)}>
        -
      </button>
      <span>{count}</span>
      <button style={color} onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>
    </div>
  );
}
