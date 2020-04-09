import React from 'react';
import './css/App.css';
import Tracker from './Tracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Call of Duty: Modern Warfare Battlepass Tracker <br />
          Season 3
        </p>
        <Tracker />
      </header>
    </div>
  );
}

export default App;
