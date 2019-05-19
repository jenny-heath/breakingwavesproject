import React, { Component } from 'react';
import {
  Text,
  TextProjectName,
  TextContent,
  Wrapper,
} from '../styles/Blurb';

class Blurb extends Component {
  render() {
    return (
      <Wrapper>
        <Text>
          <TextProjectName>THE BREAKING WAVES PROJECT</TextProjectName>
          <TextContent>is a women-led production platform that curates brave artistic expression and cultivates strategies towards culture|shift.</TextContent>
        </Text>
      </Wrapper>
    );
  }
}

export default Blurb;
