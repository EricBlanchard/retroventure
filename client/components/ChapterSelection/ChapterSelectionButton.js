import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export default class ChapterSelectionButton extends React.Component {
  constructor() {
    super();
    this.state = {
      messageFromServer: '',
      redirect: false
    }
  }
  render() {
    if (!this.state.redirect)
      return (
        <ChapterListItem
          onClick={(event) => {this.setState({redirect: 'true'})}} 
          backgroundImage={this.props.imageUrl}
          backgroundPositionX={this.props.backgroundPositionX}
          backgroundPositionY={this.props.backgroundPositionY}
          backgroundSize={this.props.backgroundSize}>
          {this.props.chapterTitle}
          <ChapterSelectionText>{this.props.buttonText}</ChapterSelectionText>
        </ChapterListItem>
      )
    else{
      return(
        <Redirect to={this.props.pathURL} />
      )
    }
  }
}

//  Styles

const ChapterSelectionText = styled.span`
  display: block;
  font-weight: normal;
  text-align: left;
`;

const ChapterListItem = styled.li`
  color: #0E1126;
  width: 200px;
  border: 2px solid #ECC12C; 
  display: block;
  list-style: none;
  margin: 20px;
  border-radius: 4px;
  font-weight: bold;
  text-align: left;
  padding: 12px 10px 12px 90px;
  background: #fff url(${props => props.backgroundImage}) no-repeat;
  background-position: ${props => props.backgroundPositionX} ${props => props.backgroundPositionY}; 
  background-size: ${props => props.backgroundSize};
`;