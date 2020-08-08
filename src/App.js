import React, {useState} from 'react';
import CoasterSVG from './CoasterSVG'
import './App.css';

function App() {
  let [height, setHeight] = useState(350);
  let [loop, setLoop] = useState(100);
  let [mass, setMass] = useState(50);
  return (
    <div className="App">
      <h1>Does the coaster make it around the loop?</h1>
      <CoasterSVG height={height} loop={loop} mass={mass} />
      <form>
        <label>Height:</label>
        <input
          type="range"
          min="50"
          max="350"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <label>Loop height:</label>
        <input
          type="range"
          min="40"
          max="170"
          value={loop}
          onChange={(e) => setLoop(e.target.value)}
        />
        <label>Mass:</label>
        <input
          type="range"
          min="1"
          max="1000"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
