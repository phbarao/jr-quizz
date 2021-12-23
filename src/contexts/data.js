import React, { useContext, createContext, useState } from 'react';

// Context
const Context = createContext();

// Provider
export default function DataProvider({ children }) {
  const [amount, setAmount] = useState(0);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Context.Provider
      value={{
        amount,
        setAmount,
        score,
        setScore,
        currentIndex,
        setCurrentIndex,
      }}
    >
      {children}
    </Context.Provider>
  );
}

// Hook
export const useData = () => useContext(Context);
