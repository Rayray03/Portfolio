import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: "Tennis", text: "Member of Local Tennis Club" },
  { number: "Fencing", text: "2018 - 2019 McMaster Varisty Fencing" },
  { number: "Model Builder", text: "3000+ Followers on Social Medias" },
  {
    number: "YouTuber",
    text: "Sponsored Model Building Channel with 400+ Subscribers",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle main>Interest / Hobby</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
