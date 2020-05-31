import React, { useState } from 'react';

import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('red');

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Without Hooks
      <Counter initialCount={0} />
      Hooks
      <CounterHooks initialCount={0} />
      <button
        onClick={() => setTheme((prev) => (prev === 'red' ? 'blue' : 'red'))}
      >
        Toggle Color
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
