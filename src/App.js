
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './Home';

function App() {
  const [input, setInput] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState([]);
  console.log('rendered')

  useEffect(()=> {
    if(input) setList([])
  }, [input]);

  return (
    <div className="App">
      <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
        />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from official site
        </a>
      </header>
      <h3>@Akhtar</h3>
      <Home />
    </div>
  );
}

export default App;
