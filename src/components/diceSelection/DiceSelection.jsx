import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Switch,
  FormControlLabel,
  Fade,
} from "@mui/material";

import "./DiceSelection.css";

const DiceSelection = ({
  diceType,
  handleChangeDiceNumber,
  handleChangeDiceType,
  diceTypeArray,
  isMultidice,
  handleIsMultidiceSwitch,
  diceNumber,
}) => {
  return (
    <div className="diceSelection-container">
      <Fade in timeout={{ enter: 1100, exit: 200 }}>
        <p className="diceSelection-container-title">Dice selection</p>
      </Fade>
      <FormControl className="formControl">
        <InputLabel id="dice-select-label">Select a dice type</InputLabel>
        <div>
          <Select
            className="select-dice-type"
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
                inputProps={{ "aria-label": "controlled" }}
                size="small"
              />
            }
            label="Multi dices"
          />
        </div>
        <div className="dice-number">
          {isMultidice && (
            <Fade in={true} timeout={{ enter: 500, exit: 400 }}>
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
            </Fade>
          )}
        </div>
      </FormControl>
    </div>
  );
};

export default DiceSelection;
