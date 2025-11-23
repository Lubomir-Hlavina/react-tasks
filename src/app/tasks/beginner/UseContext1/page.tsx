'use client';

import React, { createContext } from 'react';
import { useContext } from 'react';

const ThemeContext = createContext();

const Component = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>Aktuálna téma je: {theme}</p>
    </div>
  );
};

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Component />
    </ThemeContext.Provider>
  );
};

export default App;
