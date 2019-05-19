import React, { Component } from 'react';
import {
  Title,
  SectionsWrapper,
  Section,
  SiteComing,
  Wrapper,
} from '../styles/About';

class About extends Component {
  render() {
    return (
      <Wrapper>
        <SectionsWrapper>
          <Section><strong>THE BREAKING WAVES PROJECT is</strong></Section>
          <Section>about amplifying shifts already in motion across our cultural landscapes...</Section>

          <Section>Cultural institutions making bold curatorial choices</Section>

          <Section>Influencers taking public stands for justice</Section>

          <Section>Artists offering creative tools that are helping the grassroots build power</Section>

          <Section>There's a sea change happening...</Section>
          <Section>It's growing...</Section>
          <Section>Let's take it to the next level!</Section>
          <SiteComing>SITE COMING FALL 2019</SiteComing>
        </SectionsWrapper>
      </Wrapper>
    );
  }
}

// <Title>THE BREAKING WAVES PROJECT is...</Title>
// <SectionsWrapper>
//   <Section>
//     A resource hub that amplifies creative projects and multimedia tools for decolonizing our imaginations, the places we come from, and the places we call home.
//   </Section>
//   <Section>
//     A festival shaped by artists who invite us to think critically about and actively address legacies of settler colonialism, while celebrating resiliency & our interconnected freedom.
//   </Section>
//   <Section>
//     A think | tank that calls in art worlds & audiences to explore what culture|shift means, what’s at stake, & how to move it forward more powerfully together.
//   </Section>
// </SectionsWrapper>
export default About;
