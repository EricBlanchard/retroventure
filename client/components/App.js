import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Title from '../components/Title/Title'

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title />
      </div>
    );
  }
}