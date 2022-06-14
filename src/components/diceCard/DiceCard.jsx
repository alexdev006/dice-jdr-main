import React, { useState, useEffect } from 'react';

import { GiRollingDices } from 'react-icons/gi';

import './DiceCard.css';

export default function DiceCard({ diceType }) {
  const [diceResult, setDiceResult] = useState('-');

  const getRandomRoll = (diceType) => {
    setDiceResult(Math.floor(Math.random() * diceType) + 1);
  };

  useEffect(() => {
    setDiceResult('-');
  }, [diceType]);

  return (
    <span className="card-container">
      <span className="card-content">
        <span class="inline-flex items-center m-2 px-2 py-1 bg-accent rounded-full text-sm font-semibold text-stone-50">
          <GiRollingDices size="2em" /> <span class="ml-1">{diceType}</span>
        </span>
        <p>{diceResult}</p>
      </span>
      <span className="card-action">
        <button
          class="btn btn-sm btn-outline btn-accent"
          onClick={() => getRandomRoll(diceType)}
        >
          Roll
        </button>
      </span>
    </span>
  );
}
