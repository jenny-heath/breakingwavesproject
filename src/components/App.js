import React, { Component } from 'react';
// import './App.css';
import styled from 'styled-components';
// import Koro from '../static/kaleidescope.png';
import Koro from '../static/kaleidescope2.png';
import {Link} from 'react-router-dom';

// TODO: figure out how to actually place this background
const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  max-height: 110%;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  font-family: 'Catamaran';
  background-color: #003348;
`;

const EventsWrapper = styled.div`
  align-self: flex-start;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-family: 'Futura';
`;

const EventLinkLeft = styled.a`
  margin: 20px;
  text-decoration: none;
  color: inherit;
`;

const EventLinkRight = styled.a`
  margin: 20px;
  text-decoration: none;
  color: inherit;
`;

const TitleWrapper = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: space-between;
`;

const LearnMoreLink = styled(Link)`
  align-self: center;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
  font-size: 16px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  :hover {
    color: #15697A;
  }
`;

const Title = styled.div`
  align-self: center;
  font-size: 26px;
  font-weight: bold;
`;

const Subtitle = styled.div`
  align-self: center;
`;

// TODO: add back in later
// <BackgroundImage src={Koro} />
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Wrapper>
            <EventsWrapper>
              <EventLinkLeft href="https://google.com" target="_blank">LA LAUNCH - MAY 9</EventLinkLeft>
              <EventLinkRight href="https://google.com" target="_blank">NYC LAUNCH - MAY 17</EventLinkRight>
            </EventsWrapper>
            <TitleWrapper>
              <Title>THE BREAKING WAVES PROJECT</Title>
              <Subtitle>cultivating culture | shift connections</Subtitle>
            </TitleWrapper>
            <LearnMoreLink to="/about">
              LEARN MORE
            </LearnMoreLink>
          </Wrapper>
        </header>
      </div>
    );
  }
}

export default App;
