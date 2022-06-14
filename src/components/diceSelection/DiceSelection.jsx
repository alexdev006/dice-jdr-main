import React, { useState } from 'react';
import { useStateContext } from '../Context/StateContext';

import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Switch,
  FormControlLabel,
} from '@mui/material';

import './DiceSelection.css';

const DiceSelection = () => {
  const {
    diceType,
    handleChangeDiceNumber,
    handleChangeDiceType,
    diceNumber,
    setDiceNumber,
  } = useStateContext();

  const diceTypeArray = [4, 6, 8, 10, 12, 20, 100];
  const [isMultidice, setIsMultidice] = useState(false);

  const handleIsMultidiceSwitch = () => {
    setIsMultidice((prev) => !prev);
    setDiceNumber(1);
  };

  return (
    <div className="diceSelection-container">
      <p className="diceSelection-container-title">Dice selection</p>
      <FormControl className="formControl">
        <InputLabel id="dice-select-label">Select a dice type</InputLabel>
        <div>
          <Select
            className="select-dice"
            variant="outlined"
            labelId="dice-select-label"
            id="select-dice"
            value={diceType}
            label="Select a dice type"
            onChange={handleChangeDiceType}
          >
            {diceTypeArray.map((dice, idx) => (
              <MenuItem key={idx} value={dice}>
                {dice}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="multi-switch">
          <FormControlLabel
            control={
              <Switch
                checked={isMultidice}
                onChange={handleIsMultidiceSwitch}
                size="small"
              />
            }
            label="Multi dices"
          />
        </div>
        <div className="dice-number">
          {isMultidice && (
            <TextField
              className="dice-number-input"
              variant="outlined"
              onChange={handleChangeDiceNumber}
              id="outlined-number"
              label="Number of dice(s)"
              type="number"
              value={diceNumber}
              InputProps={{ inputProps: { min: 1, max: 20 } }}
            />
          )}
        </div>
      </FormControl>
    </div>
  );
};

export default DiceSelection;
