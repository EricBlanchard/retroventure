import React from 'react';
import { Button } from 'react-bootstrap';
import ProgressBar from './ProgressBar';
import { LogoutButton } from './LogoutButton';

export default class RetroSelection extends React.Component {
  constructor() {
    super();
    this.state = {
      messageFromServer: ''
    }
  }
  render() {
    return (
      <React.Fragment>
        <ProgressBar />
      </React.Fragment>
    )
  }
}