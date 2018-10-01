import React from 'react';
import { Button } from 'react-bootstrap';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      messageFromServer:''
    }
  }
  render() {
    if (this.state.messageFromServer == '') {
      return (
        <React.Fragment>
          <div>
            <img src='../resources/images/Icon-Placeholder-1.png'></img>
            <img src='../resources/images/Icon-Placeholder-1.png'></img>
            <img src='../resources/images/Icon-Placeholder-1.png'></img>
          </div>
        </React.Fragment>
      )
    }
    else {
      return (
          <React.Fragment>
            <p>{this.state.messageFromServer}</p>
          </React.Fragment>
      )
    }
  }
}
export default Login;