import React from 'react';
import { useStateContext } from '../Context/StateContext';

import DiceCard from '../diceCard/DiceCard';
import RollHistory from '../rollHistory/RollHistory';
import DiceSelection from '../diceSelection/DiceSelection';
import { Fade } from '@mui/material';

import './DiceRoll.css';

const DiceRoll = () => {
  const { diceNumber, diceType } = useStateContext();

  //todo history roll
  //tailwind css implementation
  return (
    <>
      <span className="roll-title">
        <Fade in={true} timeout={{ enter: 2900, exit: 400 }}>
          <p>Dice dice baby !</p>
        </Fade>
      </span>
      <div className="main-container">
        <Fade in timeout={{ enter: 2000, exit: 400 }}>
          <div className="left-box">
            <DiceSelection />
          </div>
        </Fade>
        <Fade in timeout={{ enter: 2000, exit: 400 }}>
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
        </Fade>
        <Fade in timeout={{ enter: 2000, exit: 400 }}>
          <div className="right-box">
            <RollHistory />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default DiceRoll;
