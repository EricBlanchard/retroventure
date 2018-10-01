import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      messageFromServer: '',
      modalIsOpen: false
    }
  }
  render() {
    if (this.state.messageFromServer == '') {
      return (
        <div className="login">
          <p>This is the login page!</p>
          <div>
            <Link to={{pathname: '/RetroSelection' }} style={{ textDecoration: 'none' }}>
              <Button bsStyle="danger" bsSize="large" ><p>I AM A BUTTON PRESS ME</p></Button>
            </Link>
            </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <React.Fragment>
            <p>{this.state.messageFromServer}</p>
          </React.Fragment>
        </div>
      )
    }
  }
}
export default Login;