//U99796912

import React, { useState } from 'react';
import RateMovieButton from './components/RateMovieButton';
import UploadButton from './components/UploadButton';
import './App.css';

const movies = ['Movie 1', 'Movie 2', 'Movie 3'];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Media Toolbar</h1>
        <div className="toolbar">
          <select 
            value={selectedMovie} 
            onChange={(e) => setSelectedMovie(e.target.value)}
          >
            {movies.map((movie) => (
              <option key={movie} value={movie}>{movie}</option>
            ))}
          </select>
          <RateMovieButton movie={selectedMovie} />
          <UploadButton />
        </div>
      </header>
    </div>
  );
}

export default App;