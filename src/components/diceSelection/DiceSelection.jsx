import React from 'react';
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

const DiceSelection = ({
  diceType,
  handleChangeDiceNumber,
  handleChangeDiceType,
  diceTypeArray,
  isMultidice,
  handleIsMultidiceSwitch,
  diceNumber,
}) => {
  //const classes = useStyles();
  return (
    <div className="diceSelection-container">
      <p className="diceSelection-container-title">Dice selection</p>
      <FormControl className="formControl">
        <InputLabel id="dice-select-label">Select a dice type</InputLabel>
        <div>
          <Select
            // sx={{
            //   backgroundColor: '#CD8F73',
            //   width: '100%',
            //   opacity: '1',
            //   '& .MuiSelect-select': { border: 'yellow' },
            // }}
            outlined
            className="Select"
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
                inputProps={{ 'aria-label': 'controlled' }}
                size="small"
              />
            }
            label="Multi dices"
          />
        </div>
        <div className="dice-number">
          {isMultidice && (
            <TextField
              fullWidth
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
