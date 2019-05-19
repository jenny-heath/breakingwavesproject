import React, { Component } from 'react';
import {
  Title,
  Wrapper,
} from '../styles/SignUp';

class SignUp extends Component {
  render() {
    return (
      <Wrapper>
        <Title>STAY IN THE KNOW</Title>
        <div style={{textAlign: 'center'}}>[email signup form]</div>
      </Wrapper>
    );
  }
}

export default SignUp;
