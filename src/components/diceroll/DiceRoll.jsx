import React from 'react';
import { useStateContext } from '../Context/StateContext';

import DiceCard from '../diceCard/DiceCard';
import RollHistory from '../rollHistory/RollHistory';
import DiceSelection from '../diceSelection/DiceSelection';

import './DiceRoll.css';

const DiceRoll = () => {
  const { diceNumber, diceType } = useStateContext();

  //todo history roll
  //tailwind css implementation
  return (
    <>
      <span className="roll-title">
        <p>Dice dice baby !</p>
      </span>
      <div className="main-container">
        <div className="left-box">
          <DiceSelection />
        </div>
        <div className="center-box">
          <div className="center-box-cards">
            {diceType &&
              [
                ...Array(
                  parseFloat(diceNumber) >= 1 ? parseFloat(diceNumber) : 1
                ),
              ].map((_, idx) => (
                <DiceCard key={idx} name={idx} diceType={diceType} />
              ))}
          </div>
        </div>
        <div className="right-box">
          <RollHistory />
        </div>
      </div>
    </>
  );
};

export default DiceRoll;
