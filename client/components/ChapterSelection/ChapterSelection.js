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
        backgroundPositionX: "10px", 
        backgroundPositionY: "10px",
        backgroundSize: "60px",
        buttonText: "This is button 1",
        chapterTitle: "Chapter 1",
        pathURL: "/"
      },
      img2: {
        imageUrl: "../../resources/images/icon-planet2.png",
        backgroundPositionX: "25px", 
        backgroundPositionY: "10px",
        backgroundSize: "40px",
        buttonText: "This is button 2",
        chapterTitle: "Chapter 2",
        pathURL: "/"
      },
      img3: {
        imageUrl: "../../resources/images/icon-planet3.png",
        backgroundPositionX: "25px", 
        backgroundPositionY: "10px",
        backgroundSize: "40px",
        buttonText: "This is button 3",
        chapterTitle: "Chapter 3",
        pathURL: "/"
      }
    }
    return (
      <div className="flex-container planet">
        <div className="flex-content">
          <h3>Where did we leave off?</h3>
          <Chapters>
            <ChapterSelectionButton {...props.img1}></ChapterSelectionButton>
            <ChapterSelectionButton {...props.img2}></ChapterSelectionButton>
            <ChapterSelectionButton {...props.img3}></ChapterSelectionButton>
          </Chapters>
        </div>
      </div>
    )
  }
}

//  Styles

const Chapters = styled.ul`
  margin: 0;
  padding: 0;
`;