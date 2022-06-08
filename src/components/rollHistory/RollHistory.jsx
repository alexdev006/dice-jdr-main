import React from "react";
import { Fade } from "@mui/material";

import "./RollHistory.css";

const RollHistory = () => {
  return (
    <div className="rollHistory-container">
      <Fade in timeout={{ enter: 1100, exit: 200 }}>
        <p className="rollHistory-container-title">Roll History</p>
      </Fade>
    </div>
  );
};

export default RollHistory;
