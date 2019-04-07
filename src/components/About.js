import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Discwoman from '../static/discwoman.jpg';
import Alquaws from '../static/alquaws_bashar_murad.png';
import ElDepartamento from '../static/el_departamento.jpg';
import FramesForLife from '../static/frames_for_life.jpg';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const Logo = styled.div`
  flex-grow: 1;
`;

const SiteComing = styled.div`
  flex-grow: 1;
`;

const FestComing = styled.div`
  margin-bottom: 50px;
`;

const Blurb = styled.div`
  margin-bottom: 50px;
  width: 200px;
`;

const ImageGridTitle = styled.div`
  margin-bottom: 20px;
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
  height: 170px;
  width: 300px;
  overflow: hidden;
  margin-right: 20px;
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
          <Logo>
            <Link to="/">O</Link>
          </Logo>
          <SiteComing> SITE COMING FALL 2019 </SiteComing>
        </TopBar>
        <Blurb> THE BREAKING WAVES PROJECT
              seeks to amplify
              artists & creative ventures
              that help us decolonize
              our imaginations,
              the places we come from,
              & the places we call home.
        </Blurb>
        <FestComing>FEST COMING FALL 2021 (NYC)</FestComing>
        <ImageGridTitle>SOME INSPIRATION / ACTIVATION WHILE YOU WAIT:</ImageGridTitle>
        <ImageGrid>
          <a href="https://google.com" target="_blank">
            <ImageWrapper>
              <Image src={Alquaws} />
              <ImageOverlay>Alquaws</ImageOverlay>
            </ImageWrapper>
          </a>
          <a href="https://google.com" target="_blank">
            <ImageWrapper>
              <Image src={ElDepartamento} />
              <ImageOverlay>El Departamento</ImageOverlay>
            </ImageWrapper>
          </a>
          <a href="https://google.com" target="_blank">
            <ImageWrapper>
              <Image src={FramesForLife} />
              <ImageOverlay>Frames For Life</ImageOverlay>
            </ImageWrapper>
          </a>
        </ImageGrid>
      </Wrapper>
    );
  }
}

export default About;
