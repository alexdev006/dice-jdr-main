import React, { useContext, createContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [diceResult, setDiceResult] = useState('-');
  return (
    <Context.Provider
      value={{
        diceResult,
        setDiceResult,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
