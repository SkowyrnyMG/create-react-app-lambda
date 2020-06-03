import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  // fetch('https://example.com/profile', {
  //   method: 'POST', // or 'PUT'
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // })
  // .then(response => response.json())
  // .then(data => {
  //   console.log('Success:', data);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });

  handleClick = (api) => (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch('/.netlify/functions/' + api)
      .then((response) => response.json())
      .then((json) => this.setState({ loading: false, msg: json.msg }));
  };

  // this.setState({ loading: false, msg: json.msg })
  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        {/* <button onClick={this.handleClick('hello')}>
          {loading ? 'Loading...' : 'Call Lambda'}
        </button>
        <button onClick={this.handleClick('async-dadjoke')}>
          {loading ? 'Loading...' : 'Call Async Lambda'}
        </button> */}
        <input id='vatInput' type='text' />
        <button onClick={this.handleClick('verify')}>
          {loading ? 'Loading...' : 'Sprawdź NIP'}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
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
  }
}

export default App;
