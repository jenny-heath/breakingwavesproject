import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  font-family: 'Futura';
`;

const EventsWrapper = styled.div`
  align-self: flex-start;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
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
  font-family: 'Catamaran';
`;

const VimeoWrapper = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: -1;
   /* why was this here? */
   /* pointer-events: none; */
   overflow: hidden;
`;

const IframeWrapper = styled.iframe`
   width: 100vw;
   height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
   min-height: 100vh;
   min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <VimeoWrapper>
           <IframeWrapper src="https://player.vimeo.com/video/247917721?background=1&autoplay=1&loop=1&byline=0&title=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></IframeWrapper>
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
               <LearnMoreLink to="/breakingwavesproject/about">
                 LEARN MORE
               </LearnMoreLink>
             </Wrapper>
           </header>
        </VimeoWrapper>
      </div>
    );
  }
}

export default App;
