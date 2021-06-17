import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

import {
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer,
} from "./NavDropDown";

const NavDropDown = (props) => (
  <DropDownContainer active={props.isOpen}>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <AiFillPhone />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Phone</DropDownItemTitle>
        <DropDownItemDesc>Chat with me!</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <AiFillMail />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Email</DropDownItemTitle>
        <DropDownItemDesc>Mail me here!</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
  </DropDownContainer>
);

export default NavDropDown;
