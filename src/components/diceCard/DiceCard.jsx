import React, { useState, useEffect } from 'react';

import { Button, Badge, Fade } from '@mui/material';

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
    <Fade in={true} timeout={{ enter: 1500, exit: 400 }}>
      <span className="card-container">
        <span className="card-content">
          <Badge badgeContent={diceType} color="primary" max={100}>
            <GiRollingDices size="2em" />
          </Badge>
          <p>{diceResult}</p>
        </span>
        <span className="card-action">
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => getRandomRoll(diceType)}
          >
            Roll
          </Button>
        </span>
      </span>
    </Fade>
  );
}
