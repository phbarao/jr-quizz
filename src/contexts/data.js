import React, { useContext, createContext, useState } from 'react';

// Context
const Context = createContext();

// Provider
export default function DataProvider({ children }) {
  const [amount, setAmount] = useState(0);
  const [counter, setCounter] = useState(1);
  const [score, setScore] = useState(0);

  return (
    <Context.Provider
      value={{
        amount,
        setAmount,
        counter,
        setCounter,
        score,
        setScore,
      }}
    >
      {children}
    </Context.Provider>
  );
}

// Hook
export const useData = () => useContext(Context);
