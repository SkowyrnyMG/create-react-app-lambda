import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const LambdaDemo = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (api) => (e) => {
    e.preventDefault();
    setLoading(true);
    fetch('/.netlify/functions/' + api + `?vat=${inputValue}`)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setMsg(json.msg);
      });
  };

  return (
    <>
      <form action='submit' onSubmit={handleSubmit('verify')}>
        <input
          id='vatInput'
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>{loading ? 'Loading...' : 'Sprawdź NIP'}</button>
      </form>
      <p>
        <br />
        <span>{msg}</span>
      </p>
    </>
  );
};

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <LambdaDemo />
    </header>
  </div>
);

export default App;
