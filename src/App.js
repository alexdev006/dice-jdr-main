import "./App.css";

import { StateContext } from "./components/Context/StateContext";
import DiceRoll from "./components/Diceroll/DiceRoll";

function App() {
  return (
    <StateContext>
      <div className="App">
        <DiceRoll />
      </div>
    </StateContext>
  );
}

export default App;
