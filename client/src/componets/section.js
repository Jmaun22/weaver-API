
import React, { Component } from "react";
import { Section, Container, Heading } from "react-bulma-components";
import BenfitCard from "./benfitCard";

class SectionComp extends Component {

    render() {
        return (
<>
  <Section>
    <Container>
      <Heading>
        Section
      </Heading>
      <Heading subtitle>
        A simple container to divide your page into{' '}
        <strong>
        <BenfitCard />
        </strong>
        , like the one you are currently reading
      </Heading>
    </Container>
  </Section>
  <Section>
    <Container>
      <Heading>
        Section
      </Heading>
      <Heading subtitle>
        A simple container to divide your page into{' '}
        <strong>
        <BenfitCard />
        </strong>
        , like the one you are currently reading
      </Heading>
    </Container>
  </Section>
  <Section>
    <Container>
      <Heading>
        Section
      </Heading>
      <Heading subtitle>
        A simple container to divide your page into{' '}
        <strong>
        <BenfitCard />
        </strong>
        , like the one you are currently reading
      </Heading>
    </Container>
  </Section>
</>

);
}
}

export default SectionComp