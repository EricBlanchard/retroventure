import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export default class Login extends React.Component {
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
          <StyledProgressBar>
            <ProgressBarImage src="../../resources/images/rocket.png"></ProgressBarImage>
            <Planet></Planet>
          </StyledProgressBar>
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

// Styles

const StyledProgressBar = styled.div`
  width: 1129px;
  height: 40px;
  border-radius: 22.5px;
  background-color: #fffbe5;
`;

const ProgressBarImage = styled.img`
  width: 150px;
  height: 150px;
  transform: rotate(-270deg);
`;