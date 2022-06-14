import React from 'react';
import { useStateContext } from '../Context/StateContext';

import './RollHistory.css';

const RollHistory = () => {
  const { diceResult } = useStateContext();
  console.log('result : ', diceResult);
  return (
    <div className="rollHistory-container">
      <p className="rollHistory-container-title">Roll History</p>
      <div>Result: {diceResult}</div>
    </div>
  );
};

export default RollHistory;
