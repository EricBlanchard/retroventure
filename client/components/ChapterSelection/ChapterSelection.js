import React from 'react';
import ChapterSelectionButton from '../ChapterSelection/ChapterSelectionButton'
import styled from 'styled-components';

export default class ChapterSelection extends React.Component {
  constructor() {
    super();
    this.state = {
      messageFromServer: ''
    }
  }

  render() {
    let props = {
      img1: {
        imageUrl: "../../resources/images/icon-planet1.png",
        buttonText: "This is button 1",
        chapterTitle: "Chapter 1"
      },
      img2: {
        imageUrl: "../../resources/images/icon-planet2.png",
        buttonText: "This is button 2",
        chapterTitle: "Chapter 2"
      },
      img3: {
        imageUrl: "../../resources/images/icon-planet3.png",
        buttonText: "This is button 3",
        chapterTitle: "Chapter 3"
      }
    }
    return (
      <React.Fragment>
        <ChapterSelectionBackground>
          <Title>Where we were last?</Title>
          <ChapterSelectionButton {...props.img1}></ChapterSelectionButton>
          <ChapterSelectionButton {...props.img2}></ChapterSelectionButton>
          <ChapterSelectionButton {...props.img3}></ChapterSelectionButton>
        </ChapterSelectionBackground>
      </React.Fragment>
    )
  }
}

//  Styles

const Title = styled.p`
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

const ChapterSelectionBackground = styled.div`
  width: 1440px;
  height: 1024px;
  background-blend-mode: darken;
  background-image: linear-gradient(to bottom, rgba(4, 8, 43, 0.7), rgba(4, 8, 43, 0.7));
`;