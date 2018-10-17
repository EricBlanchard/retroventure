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
          <p className="login-title">Adventro</p>
          <p className="login-caption">A space adventure retrospective...</p>
          <img src="../resources/images/bg-moon.png" className="login-moon"></img>
          <img src="../resources/images/rocket.png" className="login-spaceship"></img>
          <Button className="login-button" >
            <Link to={{pathname: '/ChapterSelection' }} style={{ textDecoration: 'none' }}>
              <p className="login-button-text">Begin</p>
            </Link>
          </Button>
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