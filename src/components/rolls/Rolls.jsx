import React, { useState } from "react";
import DiceCard from "../diceCard/DiceCard";
import RollHistory from "../rollHistory/RollHistory";
import DiceSelection from "../diceSelection/DiceSelection";
import { Fade } from "@mui/material";

import "./Rolls.css";

const Dice = () => {
  const diceTypeArray = [4, 6, 8, 10, 12, 20, 100];
  const diceNumberArray = [];
  const [diceType, setDiceType] = useState("");
  const [diceResult, setDiceResult] = useState("");
  const [diceNumber, setDiceNumber] = useState("1");
  const [isMultidice, setIsMultidice] = useState(false);

  const handleChangeDiceType = (event) => {
    setDiceType(event.target.value);
    setDiceResult("-");
  };

  const handleChangeDiceNumber = (e) => {
    setDiceNumber((v) => (e.target.validity.valid ? e.target.value : v));
    console.log(diceNumberArray);
  };

  const handleIsMultidiceSwitch = () => {
    setIsMultidice((prev) => !prev);
    setDiceNumber(1);
  };

  //todo history roll
  return (
    <>
      <span className="roll-title">
        <Fade in={true} timeout={{ enter: 900, exit: 400 }}>
          <p>Dice dice baby !</p>
        </Fade>
      </span>
      <div className="main-container">
        <div className="left-box">
          <DiceSelection
            diceType={diceType}
            handleChangeDiceNumber={handleChangeDiceNumber}
            handleChangeDiceType={handleChangeDiceType}
            diceTypeArray={diceTypeArray}
            isMultidice={isMultidice}
            handleIsMultidiceSwitch={handleIsMultidiceSwitch}
            diceNumber={diceNumber}
          />
        </div>
        <div className="center-box">
          {diceType &&
            Array.from({ length: diceNumber }, () => (
              <DiceCard
                setDiceResult={setDiceResult}
                diceType={diceType}
                diceResult={diceResult}
              />
            ))}
        </div>
        <div className="right-box">
          <RollHistory />
        </div>
      </div>
    </>
  );
};

export default Dice;
