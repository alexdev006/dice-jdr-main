import './App.css';
import Rolls from './components/rolls/Rolls';

import { StateContext } from './components/Context/StateContext';

function App() {
  return (
    <StateContext>
      <div className="App">
        <Rolls />
      </div>
    </StateContext>
  );
}

export default App;
