import React from 'react';
import Dictionary from './Dictionary.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
