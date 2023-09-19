import { Web3Button } from "@web3modal/react";
import React, { FC } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <h1>Verse Clicker</h1>
      <Web3Button />
    </StyledHeader>
  );
};

export default Header;
