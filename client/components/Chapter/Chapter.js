import React from 'react';
import styled from 'styled-components';

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
        <NormalText>this a chapter template</NormalText>
      </React.Fragment>
    )
  }
}

//  Styles

const NormalText = styled.p`
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