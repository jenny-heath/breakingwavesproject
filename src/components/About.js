import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Discwoman from '../static/discwoman.jpg';
import Alquaws from '../static/alquaws_bashar_murad.png';
import ElDepartamento from '../static/el_departamento.jpg';
import FramesForLife from '../static/frames_for_life.jpg';
import ICollective from '../static/icollective.png';
import IndyaMoore from '../static/indya_moore.jpg';
import KoroRulesTheSun from '../static/kororulesthesun.png';
import MalaForever from '../static/mala_forever.png';
import OurHistory from '../static/our_history.jpg';
import PalestineMusicExpo from '../static/palestine_music_expo.jpg';
import StandingRockSyllabus from '../static/standing_rock_syllabus.png';
import YaaSamar from '../static/yaa_samar.png';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #003348;
  color: white;
  font-family: 'Futura';
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const Logo = styled(Link)`
  margin-left: 20px;
  flex-grow: 1;
  text-decoration: none;
  color: white;
  :hover {
    color: #15697A;
  }
`;

const SiteComing = styled.div`
  flex-grow: 1;
`;

const FestComing = styled.div`
  margin-bottom: 100px;
`;

const Blurb = styled.div`
  margin-top: 50px;
  margin-bottom: 150px;
  width: 500px;
`;

const ImageGridTitle = styled.div`
  margin-bottom: 20px;
  margin-left: 55px;
  align-self: flex-start;
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`;

const Image = styled.img`
  width: 100%;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const ImageWrapper = styled.div`
  height: 201px;
  width: 30%;
  overflow: hidden;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
  :hover ${ImageOverlay} {
    opacity: 0.5;
  }
  :hover ${Image} {
    opacity: 0.5;
  }
`;

class About extends Component {
  render() {
    return (
      <Wrapper>
        <TopBar>
          <Logo to="/">
            go back
          </Logo>
          <SiteComing> SITE COMING FALL 2019 </SiteComing>
        </TopBar>
        <Blurb>
          THE BREAKING WAVES PROJECT seeks to amplify artists & creative ventures that help us decolonize our imaginations, the places we come from, & the places we call home.
        </Blurb>
        <FestComing>FEST COMING FALL 2021 (NYC)</FestComing>
        <ImageGridTitle>Some inspiration / activation while you wait...</ImageGridTitle>
        <ImageGrid>
          <ImageWrapper>
            <a href="https://google.com" target="_blank">
              <Image src={Alquaws} />
              <ImageOverlay>Alquaws</ImageOverlay>
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://google.com" target="_blank">
              <Image src={ElDepartamento} />
              <ImageOverlay>El Departamento</ImageOverlay>
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://google.com" target="_blank">
              <Image src={FramesForLife} />
              <ImageOverlay>Frames For Life</ImageOverlay>
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://google.com" target="_blank">
              <Image src={ICollective} />
              <ImageOverlay>iCollective</ImageOverlay>
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://google.com" target="_blank">
              <Image src={IndyaMoore} />
              <ImageOverlay>Indya Moore</ImageOverlay>
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://google.com" target="_blank">
              <Image src={KoroRulesTheSun} />
              <ImageOverlay>Koro Rules The Sun</ImageOverlay>
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://google.com" target="_blank">
              <Image src={MalaForever} />
              <ImageOverlay>Mala Forever</ImageOverlay>
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://google.com" target="_blank">
              <Image src={OurHistory} />
              <ImageOverlay>Our History</ImageOverlay>
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://google.com" target="_blank">
              <Image src={PalestineMusicExpo} />
              <ImageOverlay>Palestine Music Expo</ImageOverlay>
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://google.com" target="_blank">
              <Image src={StandingRockSyllabus} />
              <ImageOverlay>Standing Rock Syllabus</ImageOverlay>
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://google.com" target="_blank">
              <Image src={YaaSamar} />
              <ImageOverlay>Yaa Samar</ImageOverlay>
            </a>
          </ImageWrapper>
        </ImageGrid>
      </Wrapper>
    );
  }
}

export default About;
