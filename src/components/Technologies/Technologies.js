import React from "react";
import { DiFirebase, DiReact, DiLaravel } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <br />
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      Coming from the auotmotive engineering back ground, I worked with
      different hardwares and softwares to design the next gen robot or your
      next car. <br />
      <br />
      Now starting to seek new opportunities in the IT field, I've worked with
      different technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySql and MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiLaravel size="3rem" />
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            Experience with <br />
            Laravel, OpenCart, ZenCart
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
