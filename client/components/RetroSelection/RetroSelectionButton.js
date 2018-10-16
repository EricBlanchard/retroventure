import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class RetroSelectionButton extends React.Component {
  constructor() {
    super();
    this.state = {
      messageFromServer: ''
    }
  }
  render() {
    return (
      <React.Fragment>
          <RetroSelectionButtonWrapper>
            <Link to={{pathname: '/Chapter' }} style={{ textDecoration: 'none' }}>
              <RetroSelectionImageWrapper>
                  <RetroSelectionImage src={this.props.imageUrl}></RetroSelectionImage>
              </RetroSelectionImageWrapper>
              <RetroSelectionButtonTextWrapper>
                  <RetroSelectionChapterText>{this.props.chapterTitle}</RetroSelectionChapterText>
                  <RetroSelectionText>{this.props.buttonText}</RetroSelectionText>
              </RetroSelectionButtonTextWrapper>
            </Link>
          </RetroSelectionButtonWrapper>
      </React.Fragment>
    )
  }
}

//  Styles

const RetroSelectionChapterText = styled.p`
  width: 379px;
  height: 29px;
  font-family: Helvetica;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0e1126;
`;

const RetroSelectionText = styled.p`
  width: 379px;
  height: 22px;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0e1126;
`;

const RetroSelectionButtonWrapper = styled.button`
  display: flex;
  width: 668px;
  height: 112px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 #261e37;
  border: solid 3px #ecc12c;
  background-color: #ffffff;
`;

const RetroSelectionButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
`;

const RetroSelectionImage = styled.img`
`;

const RetroSelectionImageWrapper = styled.div`
    height: 80px;
    width: 108px;
`;