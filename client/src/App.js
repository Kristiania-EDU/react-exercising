import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import React from "react";

function Test() {
    return (
        <div>
            <h1>Hello World</h1>
            <p>This is a test.</p>
        </div>
    );
}

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/test" element={<Test/>}></Route>
        </Routes>

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
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
