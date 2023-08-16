import React from 'react';
import './App.css';
import mockTrains from './mockData';

function App() {
  return (
    <div className="App">
      <h1>Train Schedule</h1>
      <ul>
        {mockTrains.map(train => (
          <li key={train.id}>
            <h2>{train.name}</h2>
            <p>TrainNumber: {train.Number}</p>
            <p>Schedule: {train.schedule}</p>
            <p>Sleeper Seats Available: {train.sleeperSeats}</p>
            <p>AC Seats Available: {train.acSeats}</p>
            <p>Sleeper Price: ${train.sleeperPrice}</p>
            <p>AC Price: ${train.acPrice}</p>
            <p>delayedBy: {train.delayedBy}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
