import React, { useContext, createContext, useState } from 'react';

const Context = createContext();

export default function DataProvider({ children }) {
  const [amount, setAmount] = useState(0);
  const [questionsList, setQuestionsList] = useState([]);
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

        questionsList,
        setQuestionsList,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useData = () => useContext(Context);
