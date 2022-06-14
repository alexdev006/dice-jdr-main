import React, { useState } from 'react';
import { useStateContext } from '../Context/StateContext';

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
      <div>
        <label class="label">
          <span class="label-text">Dice type :</span>
        </label>
        <select
          class="select select-accent w-full max-w-xs"
          onChange={handleChangeDiceType}
          value={diceType}
        >
          <option selected>Select a dice type</option>
          {diceTypeArray.map((dice, idx) => (
            <option key={idx}>{dice}</option>
          ))}
        </select>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">More dice ?</span>
          <input
            type="checkbox"
            class="toggle toggle-sm toggle-accent"
            checked={isMultidice}
            onChange={handleIsMultidiceSwitch}
          />
        </label>
      </div>
      {isMultidice && (
        <>
          <label class="label">
            <span class="label-text">Dice type (max 15):</span>
          </label>
          <input
            onChange={handleChangeDiceNumber}
            min="1"
            max="15"
            value={diceNumber}
            type="number"
            placeholder="Number of dice"
            class="input input-bordered input-accent w-full max-w-xs"
          />
        </>
      )}
    </div>
  );
};

export default DiceSelection;
