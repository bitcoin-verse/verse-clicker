import React, { FC } from "react";
import styled from "styled-components";
import Stats from "./Stats";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Footer: FC = () => {
  return (
    <>
      <Stats />
      <StyledFooter>
        <div>Copyright 2023</div>
        <div>Made by: Micah, Paul, Ricky</div>
      </StyledFooter>
    </>
  );
};

export default Footer;
