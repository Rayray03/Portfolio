import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Space!
      </SectionTitle>
      <SectionText>
        Continuous Learning, Information Technology, Automotive Engineering
      </SectionText>
      <Button
        onClick={() => (window.location = "https://www.linkedin.com/in/rayxw/")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
