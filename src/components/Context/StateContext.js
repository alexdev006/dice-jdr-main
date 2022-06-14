import React, { useContext, createContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [diceType, setDiceType] = useState('');
  const [diceNumber, setDiceNumber] = useState(1);

  const handleChangeDiceNumber = (e) => {
    setDiceNumber((v) => (e.target.validity.valid ? e.target.value : v));
  };

  const handleChangeDiceType = (event) => {
    setDiceType(parseFloat(event.target.value) > 1 ? event.target.value : 1);
  };

  return (
    <Context.Provider
      value={{
        diceType,
        diceNumber,
        handleChangeDiceNumber,
        handleChangeDiceType,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
