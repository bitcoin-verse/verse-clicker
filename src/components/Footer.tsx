import React, { FC } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Footer: FC = () => {
  return (
    <StyledFooter>
      <div>Copyright 2023</div>
      <div>Made by: Micah, Paul, Ricky</div>
    </StyledFooter>
  );
};

export default Footer;
