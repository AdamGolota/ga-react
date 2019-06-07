import React from 'react';
import ReactGA from 'react-ga'
import './App.css';

ReactGA.initialize('UA-138302548-2');
ReactGA.pageview('/homepage');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Google Analytics Is Simple!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
