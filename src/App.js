import React from 'react';
import RateMovieButton from './components/RateMovieButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Media Toolbar</h1>
        <div className="toolbar">
          <RateMovieButton movie="Example Movie" />
        </div>
      </header>
    </div>
  );
}

export default App;