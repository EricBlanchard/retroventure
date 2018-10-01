import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Login from './Login'

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}