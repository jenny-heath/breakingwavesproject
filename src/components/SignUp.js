import React, { Component } from 'react';
import {
  Title,
  Wrapper,
} from '../styles/SignUp';
import QueryString from 'query-string';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    const queryParams = QueryString.parse(this.props.queryString);
    this.state = {email: '', submitted: queryParams.subscribed ? true : false};
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  render() {
    return (
      <Wrapper>
        <Title>STAY IN THE KNOW</Title>
        <div style={{textAlign: 'center'}}>
          {
            this.state.submitted && <div>Thank you for signing up!</div>
          }
          {
            !this.state.submitted && <form action="https://gmail.us20.list-manage.com/subscribe/post" method="POST">
              <input type="hidden" name="u" value="43b9c4e3deb0845d356636b3a" />
              <input type="hidden" name="id" value="4f9a9dbb7e" />
              <input type="email" onChange={this.handleChange} autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size="25" value={this.state.email} />
              <input type="submit" name="submit" value="Subscribe" />
            </form>
          }
        </div>
      </Wrapper>
    );
  }
}

export default SignUp;
