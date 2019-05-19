import React, { Component } from 'react';
import Instafeed from 'instafeed.js';
import QueryString from 'query-string';

import {
  IframeWrapper,
  ScrollDown,
  Subtitle,
  Title,
  TitleWrapper,
  VimeoWrapper,
  Wrapper,
} from '../styles/App';
import Blurb from './Blurb';
import About from './About';
import SignUp from './SignUp';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollDown = this.scrollDown.bind(this);
  }

  componentWillMount() {
    const feed = new Instafeed({
        get: 'user',
        // userId: '12982224536', // bwp
        userId: '1611681887', // me
        clientId: '5704d35b094b41f7bf2e30df3480b271',
        accessToken: '1611681887.5704d35.982a24618a3e4ba584b35c55782bc66f'
    });
    feed.run();
  }

  componentDidMount() {
    const queryString = QueryString.parse(this.props.location.search);
    if (queryString.subscribed) {
      this.scrollDown(this.refs.signUp);
    }
  }
  
  scrollDown(ref, behavior) {
    ref.scrollIntoView(behavior);
  }

  render() {
    return (
      <div className="App">
        <div>
          <VimeoWrapper>
             <IframeWrapper src="https://player.vimeo.com/video/247917721?background=1&autoplay=1&loop=1&byline=0&title=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></IframeWrapper>
             <header className="App-header">
               <Wrapper>
                 <TitleWrapper>
                   <Title>THE BREAKING WAVES PROJECT</Title>
                   <Subtitle>cultivating culture | shift connections</Subtitle>
                 </TitleWrapper>
                 <ScrollDown onClick={() => this.scrollDown(this.refs.blurb, {behavior: "smooth"})}>
                   v
                 </ScrollDown>
               </Wrapper>
             </header>
          </VimeoWrapper>
        </div>
        <div ref="blurb">
          <Blurb />
        </div>
        <About />
        <div ref="signUp">
          <SignUp queryString={this.props.location.search} />
        </div>
        <div id="instafeed"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
