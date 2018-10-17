import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

export default class Chapter extends React.Component {
  constructor() {
    super();
    this.state = {
      messageFromServer: ''
    }
  }

  render() {
    return (
      <React.Fragment>
        <ProgressBar></ProgressBar>
        <SpeechText>this a chapter template</SpeechText>
      </React.Fragment>
    )
  }
}

//  Styles

const SpeechText = styled.p`
  width: 668px;
  height: 47px;
  font-family: GTPressuraMono;
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ecc12c;
`;