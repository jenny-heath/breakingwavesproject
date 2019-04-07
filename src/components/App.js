import React, { Component } from 'react';
// import './App.css';
import styled from 'styled-components';
import Koro from '../static/kaleidescope.png';
import {Link} from 'react-router-dom';

// TODO: figure out how to actually place this background
const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  max-height: 150%;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

const EventsWrapper = styled.div`
  align-self: flex-start;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const EventLinkLeft = styled.div`
`;

const EventLinkRight = styled.div`
`;

const TitleWrapper = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: space-between;
`;

const LearnMoreLink = styled.div`
  align-self: center;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  align-self: center;
`;

const Subtitle = styled.div`
  align-self: center;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BackgroundImage src={Koro} />
          <Wrapper>
            <EventsWrapper>
              <EventLinkLeft>LA LAUNCH - MAY 9</EventLinkLeft>
              <EventLinkRight>NYC LAUNCH - MAY 17</EventLinkRight>
            </EventsWrapper>
            <TitleWrapper>
              <Title>THE BREAKING WAVES PROJECT</Title>
              <Subtitle>cultivating culture | shift connections</Subtitle>
            </TitleWrapper>
            <LearnMoreLink>
              <Link to="/about">
                LEARN MORE
              </Link>
            </LearnMoreLink>
          </Wrapper>
        </header>
      </div>
    );
  }
}

export default App;
