import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export default class Title extends React.Component {
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
        <Moon>
          <FlexContent>
            <h1>Retroventure</h1>
            <h2>A space adventure retrospective...</h2>
            <GhostBtn>
              <Link to={{pathname: '/ChapterSelection' }} style={{ textDecoration: 'none' }}>
                Let's Begin
              </Link>
            </GhostBtn>
            <br></br>
            <br></br>
            <BouncingRocket src="resources/images/rocket.png" height="100" alt=""></BouncingRocket>
          </FlexContent>
        </Moon>
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

// styling

const Moon = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: url(../resources/images/bg-moon.png) top right no-repeat;
  background-size: 200px;
`;

const FlexContent = styled.div`
  text-align: center;
`;

const GhostBtn = styled.button`
  padding: 15px 20px;
  color: #63D1E2;
  text-decoration: none;
  border: 2px solid #63D1E2;
  border-radius: 4px;
  display: inline-block;
  margin-top: 24px;
  font-size: 18px;
  font-weight: bold;
`;

const bounce = keyframes`
  from { transform: translate3d(0, 0, 0);     }
  to   { transform: translate3d(0, 30px, 0); }
`;
const BouncingRocket = styled.img`
animation: ${bounce} 1s;
animation-direction: alternate;
animation-iteration-count: infinite;
`;
